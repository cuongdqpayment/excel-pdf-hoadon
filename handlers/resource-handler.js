
const xlstojson = require("xls-to-json-lc");
const xlsxtojson = require("xlsx-to-json-lc");

var exceltojson; //ham phu thuoc vao xlsx/xls

const PDFDocument = require('pdfkit');
var fs = require('fs');

const vnd = require('../utils/number-2-vnd')

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

}

module.exports = {
    ResourceHandler: new ResourceHandler()
};