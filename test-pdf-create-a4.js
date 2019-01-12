var PDFDocument = require('pdfkit');
var fs = require('fs');
var doc = new PDFDocument;
doc.pipe(fs.createWriteStream('./pdf/hoadon-a4.pdf'));
doc.info['Title'] = 'Hoa don';
doc.info['Author'] = 'Cuong.dq';
doc.registerFont('Palatino', 'fonts/PalatinoBold.ttf');

/*   doc.save()
   .moveTo(100, 150)
   .lineTo(100, 250)
   .lineTo(200, 250)
   .fill("#FF3300")
 */

   var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl.'

   doc.fontSize(8);
   
   doc.text('This text is left aligned. ' + lorem,
     {width: 410,
     align: 'left'}
     )
   
   doc.moveDown()
   doc.text ('This text is centered. ' + lorem,{
     width: 410,
     align: 'center'})
   

     
doc.end();


