
const xlstojson = require("xls-to-json-lc");
const xlsxtojson = require("xlsx-to-json-lc");

var exceltojson; //ham phu thuoc vao xlsx/xls

const PDFDocument = require('pdfkit');
const fs = require('fs');

const vnd = require('../utils/number-2-vnd');

const db = require('../db/sqlite3/sqlite-hoadon-service.js');
setTimeout(()=>{
  db.handler.init();
},1000); //doi 3 giay de oracle ket noi


var createExcel = (jsonRows)=>{
    
    const excel = require('node-excel-export');
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
        }
      };
       
      //Array of objects representing heading rows (very top)
      const heading = [
        [{value: 'a1', style: styles.headerDark}, {value: 'b1', style: styles.headerDark}, {value: 'c1', style: styles.headerDark}],
        ['a2', 'b2', 'c2'] // <-- It can be only values
      ];
       
      //Here you specify the export structure
      const specification = {
        customer_name: { // <- the key should match the actual data key
          displayName: 'Customer', // <- Here you specify the column header
          headerStyle: styles.headerDark, // <- Header style
          cellStyle: function(value, row) { // <- style renderer function
            // if the status is 1 then color in green else color in red
            // Notice how we use another cell value to style the current one
            return (row.status_id == 1) ? styles.cellGreen : {fill: {fgColor: {rgb: 'FFFF0000'}}}; // <- Inline cell style is possible 
          },
          width: 120 // <- width in pixels
        },
        status_id: {
          displayName: 'Status',
          headerStyle: styles.headerDark,
          cellFormat: function(value, row) { // <- Renderer function, you can access also any row.property
            return (value == 1) ? 'Active' : 'Inactive';
          },
          width: '10' // <- width in chars (when the number is passed as string)
        },
        note: {
          displayName: 'Description',
          headerStyle: styles.headerDark,
          cellStyle: styles.cellPink, // <- Cell style
          width: 220 // <- width in pixels
        }
      }
       
      // The data set should have the following shape (Array of Objects)
      // The order of the keys is irrelevant, it is also irrelevant if the
      // dataset contains more fields as the report is build based on the
      // specification provided above. But you should have all the fields
      // that are listed in the report specification
      const dataset = [
        {customer_name: 'IBM', status_id: 1, note: 'some note', misc: 'not shown'},
        {customer_name: 'HP', status_id: 0, note: 'some note'},
        {customer_name: 'MS', status_id: 0, note: 'some note', misc: 'not shown'}
      ]
       
      // Define an array of merges. 1-1 = A:1
      // The merges are independent of the data.
      // A merge will overwrite all data _not_ in the top-left cell.
      const merges = [
        { start: { row: 7, column: 1 }, end: { row: 7, column: 10 } },
        { start: { row: 8, column: 1 }, end: { row: 8, column: 5 } },
        { start: { row: 8, column: 6 }, end: { row: 8, column: 10 } }
      ]

    return excel.buildExport(
        [ // <- Notice that this is an array. Pass multiple sheets to create multi sheet report
          {
            name: 'khach_hang', // <- Specify sheet name (optional)
            heading: heading, // <- Raw heading array (optional)
            merges: merges, // <- Merge cell ranges
            specification: specification, // <- Report specification
            data: dataset // <-- Report data
          }
        ]
      );

}



class ResourceHandler {

    getCustomers(req, res, next) {

        var inputFilename = './db/ql-hoadon.xlsx';

        exceltojson = xlsxtojson;
        try {
            exceltojson({
                input: inputFilename,
                output: null, //since we don't need output.json
                lowerCaseHeaders: true
            }, function (err, result) {
                if (err) {
                    throw err;
                }

                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({
                    success: true,
                    message: 'Thành công!',
                    data: result
                }));

            });
        } catch (e) {
            throw "Corupted excel file";
        }



    }

    getInvoice(req, res, next) {
        var doc = new PDFDocument();
        var outputFilename = './pdf/hoadon.pdf';
        var stream = doc.pipe(fs.createWriteStream(outputFilename));

        doc.info['Title'] = 'Hoa don';
        doc.info['Author'] = 'Cuong.dq';
        doc.registerFont('Palatino', 'fonts/PalatinoBold.ttf');

        var lorem = 'Ho va ten'

        doc.fontSize(8);

        doc.text('This text is left aligned. ' + lorem,
            {
                width: 410,
                align: 'left'
            }
        )

        doc.moveDown()
        doc.text('This text is centered. ' + lorem, {
            width: 410,
            align: 'center'
        })

        doc.end();

        stream.on('finish', () =>{
            //console.log(stream);
            fs.readFile(outputFilename, { flag: 'r' }, function (error, data) {
                if (!error) {
                    res.writeHead(200, { 'Content-Type': 'application/pdf; charset=utf-8' });
                    res.end(data);
                } else {
                    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                    res.end(JSON.stringify(error));
                }
            });
        });
    }

    getInvoices(req, res, next) {

        var inputFilename = './db/ql-hoadon.xlsx';
        exceltojson = xlsxtojson;
        try {
            exceltojson({
                input: inputFilename,
                output: null, //since we don't need output.json
                lowerCaseHeaders: true
            }, function (err, result) {
                if (err) {
                    throw err;
                }
                //result la array ket qua can phai in ra hoa don
                var doc = new PDFDocument();
                var outputFilename = './pdf/hoadon_all.pdf';
                var stream = doc.pipe(fs.createWriteStream(outputFilename));
        
                doc.info['Title'] = 'Hóa đơn thu tiền rác';
                doc.info['Author'] = 'Qld Vinh Hưng';
                
                //doc.registerFont('Tahoma-utf8', './fonts/tahoma.ttf');
                //doc.font('Tahoma-utf8');

                doc.registerFont('Time-new-roman-utf8', './fonts/times.ttf');
                doc.font('Time-new-roman-utf8');

                doc.fontSize(13);
                
                //{"status":"","stt":"1","full_name":"Phan Thanh Hiệp","type":"Hộ KH Bình Thường","tax_id":"","charge":"20,000","area":"Thôn Lương Viện","address":"Thôn Lương Viện","phone":"","staff":"Bốn","cus_id":"R000000001","last_name":"Phan Thanh","first_name":"Hiệp","type_id":"1","price_id":"1","area_id":"1","staff_id":"1","start_date":"01/01/2018","end_date":"","change_date":""}

                result.forEach((el,idx) => {

                    let charge = parseInt(el.charge.replace(',',''));

                    if (idx>0) doc.addPage();
                    doc.text(el.cus_id, 100);
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

                    doc.text(el.cus_id);
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
        
                stream.on('finish', () =>{
                    //console.log(stream);
                    fs.readFile(outputFilename, { flag: 'r' }, function (error, data) {
                        if (!error) {
                            res.writeHead(200, { 'Content-Type': 'application/pdf; charset=utf-8' });
                            res.end(data);
                        } else {
                            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                            res.end(JSON.stringify(error));
                        }
                    });
                });
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
    getBackupCustomers(req, res, next){
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
                      ')
            .then(results=>{
              let excelBuffuer = createExcel(results);
              //thuc hien gui file kieu dinh kem 
              //khong view ma tu save vao download tren client
               res.attachment('ds_khach_hang_hoa_don.xlsx'); // ten file tra ve 
               res.send(excelBuffuer);
               //res.end();
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