

const PDFDocument = require('pdfkit');
const fs = require('fs');

var outputFilename = './pdf/pdf-sample-a4.pdf';

//tao grid de canh mau
const maxRow = 36;
const maxCol = 10;
const zipperRow=20; 
const zipperCol=60;

var matrix = [];

//khoi tao rows, cols and matrix
for (let row=0;row<maxRow;row++){
  for (let col=0;col<maxCol;col++){
    matrix.push({
      x: col * zipperCol , //giãn cột
      y: row * zipperRow , //giãn dòng
      value:'(' + (row) + ',' + (col) + ')'
      //value:'(' + row + '.' + (row * zipperRow) + ',' + (col * zipperCol) + ')'
    })
  }
}

//bat dau tao pdf
    var doc = new PDFDocument();
    
    var stream = doc.pipe(fs.createWriteStream(outputFilename));

    doc.info['Title'] = 'Mẫu in hóa đơn A4 1 trang';
    doc.info['Author'] = 'Đoàn Quốc Cường';
    
    doc.registerFont('Time-new-roman-utf8', './fonts/times.ttf');
    doc.font('Time-new-roman-utf8');

    doc.fontSize(12);
    
    matrix.forEach((el,idx) => {
        //doc.moveDown(el.line); //xuong dong de ghi
        doc.text(el.value,el.x,el.y);
    });
    
    doc.end();

   // console.log(stream);

