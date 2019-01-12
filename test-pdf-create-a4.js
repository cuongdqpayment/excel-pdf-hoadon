

const PDFDocument = require('pdfkit');
const fs = require('fs');

var outputFilename = './pdf/pdf-sample-a4.pdf';

//tao grid de canh mau
const maxRow = 42;
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
      //value:'(' + (row) + ',' + (col) + ')'
      value:'(' + (row * zipperRow) + ',' + (col * zipperCol) + ')'
    })
  }
}

//bat dau tao pdf
    var doc = new PDFDocument({
      size: 'A4',
      margin: 0
});
    var defaultColor = 'gray';

    var stream = doc.pipe(fs.createWriteStream(outputFilename));

    doc.info['Title'] = 'Mẫu in hóa đơn A4 1 trang';
    doc.info['Author'] = 'Đoàn Quốc Cường';

    //in nen de canh
    doc.image('./pdf/mau_hoa_don.png', -5, -3, {width: 610, height: 845});
    

    doc.registerFont('Time-new-roman-utf8', './fonts/times.ttf');
    doc.font('Time-new-roman-utf8');

    doc.fontSize(12);


    doc.fillColor('blue');
    
    doc.text('1000',260,185,
      {width: 100,
      align: 'right'
    });

    doc.text('20 000',350,185,
      {width: 100,
      align: 'right'
    });

    
    doc.fillColor('red');

    doc.text('20 000',450,185,
      {width: 100,
      align: 'right'
    });
    
    doc.fillColor('red');
    
    doc.text('20 000',450,218,
      {width: 100,
      align: 'right'
    });

    doc.text('2 000',450,235,
      {width: 100,
       align: 'right'
    });

    doc.fillColor(defaultColor);
    matrix.forEach(el => {
        //doc.moveDown(el.line); //xuong dong de ghi
        doc.text(el.value,el.x,el.y
          );
    });


    
    doc.end();

   // console.log(stream);

