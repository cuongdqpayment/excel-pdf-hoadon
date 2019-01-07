
const timeZoneOffset = +7;

const xlstojson = require("xls-to-json-lc");
const xlsxtojson = require("xlsx-to-json-lc");

var exceltojson; //ham phu thuoc vao xlsx/xls

const PDFDocument = require('pdfkit');
const fs = require('fs');
const url = require('url');

const vnd = require('../utils/number-2-vnd');

const db = require('../db/sqlite3/sqlite-hoadon-service.js');

setTimeout(()=>{
  db.handler.init();
},1000); //doi 3 giay de oracle ket noi


var createExcel = (jsonRows)=>{
    //lay doi tuong excel
    const excel = require('node-excel-export');
    //dinh nghia style de gan de dan
    const styles = {
        headerDark: {
          fill: {
            fgColor: {
              rgb: 'FF000000'
            }
          },
          font: {
            color: {
              rgb: 'FFFFFFFF'
            },
            sz: 14,
            bold: true,
            underline: true
          }
        },
        cellPink: {
          fill: {
            fgColor: {
              rgb: 'FFFFCCFF'
            }
          }
        },
        cellGreen: {
          fill: {
            fgColor: {
              rgb: 'FF00FF00'
            }
          }
        },
        cellBrơwn: {
          fill: {
            fgColor: {
              rgb: 'ccccd485'
            }
          }
        },
        cellRed: {
          fill: {
            fgColor: {
              rgb: 'FFFF0000'
            }
          }
        }
        
      };
      //dinh nghia cac ten 
      const colsOrder = [
                         {json_name: "stt", column_name: "stt", width: 50 }
                        ,{json_name: "full_name", column_name: "Tên khách hàng", width: 150 }
                        ,{json_name: "tax_id", column_name: "Mã số thuế", width: 120 }
                        ,{json_name: "address", column_name: "Địa chỉ", width: 120 }
                        ,{json_name: "email", column_name: "Email", width: 120 }
                        ,{json_name: "phone", column_name: "Điện thoại", width: 100 }
                        ,{json_name: "cust_id", column_name: "Mã khách hàng", width: 100 }
                        //,{json_name: "last_name", column_name: "Họ và chữ lót", width: 100 }
                        //,{json_name: "first_name", column_name: "Tên", width: 100 }
                        ,{json_name: "type_id", column_name: "Mã loại", width: 50 }
                        ,{json_name: "cust_type", column_name: "Loại khách hàng", width: 120 }
                        ,{json_name: "charge", column_name: "Tiền cước", width: 100 }
                        ,{json_name: "price_id", column_name: "Mã giá", width: 50 }
                        ,{json_name: "area_id", column_name: "Mã vùng", width: 50 }
                        ,{json_name: "area", column_name: "Vùng quản lý", width: 120 }
                        ,{json_name: "staff_id", column_name: "Mã nhân viên", width: 50 }
                        ,{json_name: "staff", column_name: "Nhân viên quản lý", width: 120 }
                        ,{json_name: "start_date", column_name: "Ngày bắt đầu", width: 130 }
                        ,{json_name: "end_date", column_name: "Ngày kết thúc", width: 130 }
                        ,{json_name: "change_date", column_name: "Ngày thay đổi gần nhất", width: 130 }
                        ,{json_name: "status", column_name: "Trạng thái", width: 100 }
                      ]
    
       //header json var for upload again
       var heading = [];
       var rows = [];
        //[{value: 'a1', style: styles.headerDark}, {value: 'b1', style: styles.headerDark}, {value: 'c1', style: styles.headerDark}]
        for (let i=0;i<colsOrder.length;i++){
            rows.push({value:colsOrder[i].json_name,style:styles.headerDark})
        }
        heading.push(rows);

      var sheetspecification = {}
      for (let i=0;i<colsOrder.length;i++){
        Object.defineProperty(sheetspecification, colsOrder[i].json_name, { //dat ten thuoc tinh la ten truong
            value: { 
                displayName: colsOrder[i].column_name,  //ten hien thi tren cot header 
                headerStyle: styles.cellBrơwn, // mau style cua header
                cellStyle: function(value, row) { 
                  //hien thi mau theo gia tri du lieu can phan biet
                  return (colsOrder[i].json_name!='stt'&&colsOrder[i].json_name!='status')?{}:(row.status == 1) ? styles.cellGreen : styles.cellRed; // mau nen cua cell co gia tri status can phan biet
                },
                cellFormat: function(value, row) { // chuyen doi gia tri cua cell, neu la o trang thai 
                    return (colsOrder[i].json_name!='status')?value:(value == 1) ? 'Phải thu' : 'Ngưng thu';
                  },
                width: colsOrder[i].width // do rong cua cell neu can cau hinh tren mang order luon
              }, //gia tri la mot doi tuong
            writable: false, //khong cho phep sua du lieu sau khi gan gia tri vao
            enumerable: true, //cho phep gan thanh thuoc tinh truy van sau khi hoan thanh
        });
      }                
      
      var old = JSON.stringify(jsonRows
                                ,(key, value) => {
                                if (key=='start_date'){
                                    //chuyen doi thoi gian milisecond thanh string ngay gio
                                    return new Date(value + timeZoneOffset*60*60*1000).toISOString().replace(/T/, ' ').replace(/\..+/, '') 
                                }
                                return value;
                                }
        ); //convert to JSON string

      const dataset = JSON.parse(old); //convert back to array


    return excel.buildExport(
        [ // <- Notice that this is an array. Pass multiple sheets to create multi sheet report
          {
            name: 'khach_hang', // <- Specify sheet name (optional)
            heading: heading,
            specification: sheetspecification, // <- Report specification
            data: dataset // <-- Report data
          }
        ]
      );

}

var createPdfInvoices = (jsonRows,outputFilename)=>{
    //result la array ket qua can phai in ra hoa don
    var doc = new PDFDocument();
    
    var stream = doc.pipe(fs.createWriteStream(outputFilename));

    doc.info['Title'] = 'Hóa đơn thu tiền rác';
    doc.info['Author'] = 'Qld Vinh Hưng';
    
    doc.registerFont('Time-new-roman-utf8', './fonts/times.ttf');
    doc.font('Time-new-roman-utf8');

    doc.fontSize(13);
    
    jsonRows.forEach((el,idx) => {
        let charge = parseInt(el.charge);
        if (idx>0) doc.addPage();

        doc.text(el.cust_id, 100);
        doc.moveDown(0.5)
        doc.text(el.full_name);
        doc.moveDown(0.5)
        doc.text(el.address);
        doc.moveDown(0.5)
        doc.text(el.tax_id);
        doc.moveDown(0.5)
        doc.text(charge);
        doc.moveDown(0.5)
        doc.text(vnd.DocTienBangChu(charge));
        doc.moveDown()
        doc.text(el.staff);

        doc.moveDown(18);

        doc.text(el.cust_id);
        doc.moveDown(0.5)
        doc.text(el.full_name);
        doc.moveDown(0.5)
        doc.text(el.address);
        doc.moveDown(0.5)
        doc.text(el.tax_id);
        doc.moveDown(0.5)
        doc.text(charge);
        doc.moveDown(0.5)
        doc.text(vnd.DocTienBangChu(charge));
        doc.moveDown(0.5)
        doc.text(el.staff);
    });
    
    doc.end();

    return stream;

}

class ResourceHandler {

    /**
     * Lay tham so he thong ve mang tham so
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    getParameters(req, res, next) {
        db.db.getRsts('select\
                        id\
                        ,parent\
                        ,type\
                        ,code\
                        ,name\
                        ,description\
                        ,value\
                        ,order_1\
                     from parameters\
                      ')
            .then(results=>{
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify(results
                    ,(key, value) => {
                        //chuyen doi null khong xuat hien
                        if (value === null) {return undefined;}
                        return value;
                        }
                ));
            })
            .catch(err=>{
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(JSON.stringify(err));
            });
    }

    /**
     * Lay json khach hang
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    getCustomers(req, res, next) {
        db.db.getRsts('select \
                        a.stt\
                        ,a.full_name\
                        ,a.tax_id\
                        ,a.address\
                        ,a.email\
                        ,a.phone\
                        ,a.cust_id\
                        ,a.last_name \
                        ,a.first_name \
                        ,a.type_id\
                        ,b.description as cust_type\
                        ,b.value as charge\
                        ,a.price_id\
                        ,a.area_id\
                        ,c.description as area\
                        ,a.staff_id\
                        ,d.description as staff\
                        ,a.start_date\
                        ,a.end_date\
                        ,a.change_date\
                        ,a.status\
                     from customers a\
                     ,(select code, description, value from parameters where type = 5) b\
                     ,(select code, description from parameters where type = 6) c\
                     ,(select code, description from parameters where type = 4) d\
                      where a.type_id = b.code\
                      and a.area_id = c.code\
                      and a.staff_id = d.code\
                      order by stt\
                      ')
            .then(results=>{
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify(results
                    ,(key, value) => {
                    if (value === null) {
                        //chuyen doi null khong xuat hien
                        return undefined;
                    }
                    if (key=='start_date'){
                        //chuyen doi thoi gian milisecond thanh string ngay gio
                        return new Date(value + timeZoneOffset*60*60*1000).toISOString().replace(/T/, ' ').replace(/\..+/, '') 
                    }
                    return value;
                    }
                    ));
            })
            .catch(err=>{
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(JSON.stringify(err));
            });
    }

    /**
     * Doc file excel tra ket qua json
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    getCustomersFromExcel(req, res, next) {

        var inputFilename = './db/ql-hoadon.xlsx';

        exceltojson = xlsxtojson;
        try {
            exceltojson({
                input: inputFilename,
                output: null, //since we don't need output.json
                lowerCaseHeaders: true
            }, function (err, results) {
                if (err) {
                    throw err;
                }
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify(results));
            });
        } catch (e) {
            throw "Corupted excel file";
        }
    }

    /**
     * Doc csdl lay data tao excel va tra file backup
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    getAttachCustomers(req, res, next){
        db.db.getRsts('select \
                        a.stt\
                        ,a.full_name\
                        ,a.tax_id\
                        ,a.address\
                        ,a.email\
                        ,a.phone\
                        ,a.cust_id\
                        ,a.last_name \
                        ,a.first_name \
                        ,a.type_id\
                        ,b.description as cust_type\
                        ,b.value as charge\
                        ,a.price_id\
                        ,a.area_id\
                        ,c.description as area\
                        ,a.staff_id\
                        ,d.description as staff\
                        ,a.start_date\
                        ,a.end_date\
                        ,a.change_date\
                        ,a.status\
                     from customers a\
                     ,(select code, description, value from parameters where type = 5) b\
                     ,(select code, description from parameters where type = 6) c\
                     ,(select code, description from parameters where type = 4) d\
                      where a.type_id = b.code\
                      and a.area_id = c.code\
                      and a.staff_id = d.code\
                      order by stt\
                      ')
            .then(results=>{
              let excelBuffuer = createExcel(results);
               res.attachment(new Date().toISOString().replace(/T/, '_').replace(/\..+/, '').replace(/-/g, '').replace(/:/g, '')+'_ds_khach_hang_hoa_don.xlsx'); // ten file tra ve 
               res.send(excelBuffuer);
            })
            .catch(err=>{
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(JSON.stringify(err));
            });
    }

    /**
     * view file excel
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    viewExcelCustomers(req, res, next){
        db.db.getRsts('select \
                        a.stt\
                        ,a.full_name\
                        ,a.tax_id\
                        ,a.address\
                        ,a.email\
                        ,a.phone\
                        ,a.cust_id\
                        ,a.last_name \
                        ,a.first_name \
                        ,a.type_id\
                        ,b.description as cust_type\
                        ,b.value as charge\
                        ,a.price_id\
                        ,a.area_id\
                        ,c.description as area\
                        ,a.staff_id\
                        ,d.description as staff\
                        ,a.start_date\
                        ,a.end_date\
                        ,a.change_date\
                        ,a.status\
                     from customers a\
                     ,(select code, description, value from parameters where type = 5) b\
                     ,(select code, description from parameters where type = 6) c\
                     ,(select code, description from parameters where type = 4) d\
                      where a.type_id = b.code\
                      and a.area_id = c.code\
                      and a.staff_id = d.code\
                      order by stt\
                      ')
            .then(results=>{
              let excelBuffuer = createExcel(results);
               //show file excel
               res.writeHead(200, { 'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;'
                                    ,"Content-disposition": "filename=" + new Date().toISOString().replace(/T/, '_').replace(/\..+/, '').replace(/-/g, '').replace(/:/g, '')+'_ds_khach_hang_hoa_don.xlsx'
                                     });
               res.end(excelBuffuer);
            })
            .catch(err=>{
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(JSON.stringify(err));
            });
    }

    getPdfInvoice(req, res, next) {
        //lay duong dan va lay ma khach hang tren duong dan
        // /db/pdf-invoice/<cust_id>
        let path = decodeURIComponent(url.parse(req.url, true, false).pathname);
        let cust_id = path.substring('/pdf-invoice/'.length);
        // console.log('path: ',path);
        // console.log('cust_id: ',cust_id);
        let sql='select \
                    a.stt\
                    ,a.full_name\
                    ,a.tax_id\
                    ,a.address\
                    ,a.email\
                    ,a.phone\
                    ,a.cust_id\
                    ,a.last_name \
                    ,a.first_name \
                    ,a.type_id\
                    ,b.description as cust_type\
                    ,b.value as charge\
                    ,a.price_id\
                    ,a.area_id\
                    ,c.description as area\
                    ,a.staff_id\
                    ,d.description as staff\
                    ,a.start_date\
                    ,a.end_date\
                    ,a.change_date\
                    ,a.status\
                from customers a\
                ,(select code, description, value from parameters where type = 5) b\
                ,(select code, description from parameters where type = 6) c\
                ,(select code, description from parameters where type = 4) d\
                where\
                a.stt=\''+cust_id+'\'\
                and a.type_id = b.code\
                and a.area_id = c.code\
                and a.staff_id = d.code\
                order by stt\
                ';
        //console.log(sql);    
        db.db.getRsts(sql)
            .then(results=>{

              let outputFilename = './pdf/hoadon_'+cust_id+'.pdf';
              let stream = createPdfInvoices(results,outputFilename);
              
              stream.on('finish', () =>{
                    fs.readFile(outputFilename, { flag: 'r' }, (err, bufferPdf)=>{
                        if (err) {
                            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                            res.end(JSON.stringify(err));
                        }
                        res.writeHead(200, { 'Content-Type': 'application/pdf; charset=utf-8' });
                        res.end(bufferPdf);
                    });
                });
            })
            .catch(err=>{
                //console.log('err',err);
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(JSON.stringify(err));
            });
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    getPdfInvoices(req, res, next){

        db.db.getRsts('select \
                        a.stt\
                        ,a.full_name\
                        ,a.tax_id\
                        ,a.address\
                        ,a.email\
                        ,a.phone\
                        ,a.cust_id\
                        ,a.last_name \
                        ,a.first_name \
                        ,a.type_id\
                        ,b.description as cust_type\
                        ,b.value as charge\
                        ,a.price_id\
                        ,a.area_id\
                        ,c.description as area\
                        ,a.staff_id\
                        ,d.description as staff\
                        ,a.start_date\
                        ,a.end_date\
                        ,a.change_date\
                        ,a.status\
                     from customers a\
                     ,(select code, description, value from parameters where type = 5) b\
                     ,(select code, description from parameters where type = 6) c\
                     ,(select code, description from parameters where type = 4) d\
                      where a.type_id = b.code\
                      and a.area_id = c.code\
                      and a.staff_id = d.code\
                      order by stt\
                      ')
            .then(results=>{

              let outputFilename = './pdf/hoadon_all.pdf';
              let stream = createPdfInvoices(results,outputFilename);
              
              stream.on('finish', () =>{
                    fs.readFile(outputFilename, { flag: 'r' }, (err, bufferPdf)=>{
                        if (err) {
                            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                            res.end(JSON.stringify(err));
                        }
                        res.writeHead(200, { 'Content-Type': 'application/pdf; charset=utf-8' });
                        res.end(bufferPdf);
                    });
                });
            })
            .catch(err=>{
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(JSON.stringify(err));
            });

    }
}

module.exports = {
    ResourceHandler: new ResourceHandler()
};