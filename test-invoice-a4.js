
const isEquikeylent= (a, b, isSameKey, isSameValue) =>{ //la giong nhau cau truc hoan toan isSame
    let aProps = Object.getOwnPropertyNames(a);
    let bProps = Object.getOwnPropertyNames(b);
    if (isSameKey&&isSameValue&&aProps.length !== bProps.length)  return false;
    for (let i = 0; i < aProps.length; i++) if (isSameValue&&a[aProps[i]] !== b[aProps[i]]) return false;
    for (let i = 0; i < aProps.length; i++) if (bProps.find(x=>x===aProps[i]) === undefined) return false;
    return true;
}

const colxrow = {col:0,row:0}; //co the thay doi mat na toa do diem nay them thuoc tinh
const GetMatrix = (maskMatrix, data, point)=>{
    var matrix = [];

    var PrintMatrix = (objPrintMatrix, dataObject)=>{
        for (let key of Object.keys(objPrintMatrix)){
            //console.log(typeof billPrintMatrix[key]);
            if (Array.isArray(objPrintMatrix[key])){
                objPrintMatrix[key].forEach((x,idx)=>{
                    if (isEquikeylent(point,x)){
                        //day la toa do
                        console.log('point X', key, idx , x , dataObject[key][idx]);
                        x.value = dataObject[key][idx];
                        
                        if (x.value!==undefined&&x.value!==null&&x.value!=='')matrix.push({col: x.col,row: x.row, value: x.value});
                        
                    }else{
                        //day la doi tuong hoac mang con
                        if (Array.isArray(x)){
                            //chua xu ly
                            console.log('ARRAY KHONG XU LY: ', key , idx , x);
                        }else{
                            //la doi tuong thi xu ly de quy
                            //console.log('data array', x,  dataObject[key][idx])
                            if (dataObject[key]&&dataObject[key][idx]) PrintMatrix( x, dataObject[key][idx]);
                        }
                    }
                })
                //console.log(key,'array');
            }else{
                if (isEquikeylent(point,objPrintMatrix[key])){
                    //day la toa do
                    let x = objPrintMatrix[key];
                    console.log('point X', key , 0 , x , dataObject[key])
                    x.value = dataObject[key];
                    if (x.value!==undefined&&x.value!==null&&x.value!=='')matrix.push({col: x.col,row: x.row, value: x.value});
                }else{
                    //day la doi tuong con xu ly de quy
                    //console.log('data next', dataObject[key])
                    if (dataObject[key]) PrintMatrix(objPrintMatrix[key],dataObject[key]);
                }
            }
        }
    
    }
    PrintMatrix(maskMatrix, data);
    return matrix;
}


var billPrint = {
    bill_date: ['10','01','2019'],
    invoice_no:'000000111',
    full_name:'Nguyễn Văn A',
    organization_name:'Cơ quan',
    tax_no: '123456789',
    address:'Thôn trung hưng',
    pay_method:'TM',
    account_no:'123',
    bill_details:[
        {
        unit: 'tháng',
        product_count: '1',
        price_not_vat: '18182',
        total_not_vat: '18182'
        }
    ],
    bill_sum:{
        sum_not_vat:'18182',
        sum_vat:'1818',
        sum_charge: '20000'
    },
    bill_sum_charge_spell: 'Hai muoi ngan dong chan',
    sign_customer:{
        signature:'ky',
        full_name:'Toi la Khach'
    },
    sign_saler:{
        signature:'ky',
        full_name:'Nguyen Bon'
    },
    sign_manager:{
        signature:'ky',
        full_name:'Le Tu Hong Vu'
    }
}

 var billPrintMatrix = {
    bill_date: [{col:285,row:65},{col:340,row:65},{col:375,row:65}],
    invoice_no:{col:480,row:55},
    full_name:{col:160,row:90},
    organization_name:{col:120,row:105},
    tax_no: {col:120,row:120},
    address:{col:120,row:135},
    pay_method:{col:145,row:148},
    account_no:{col:310,row:148},
    bill_details:[
        {
        unit: {col:280,row:185},
        product_count: {col:260,row:185, width: 100, align: 'right', color:'red'},
        price_not_vat: {col:350,row:185, width: 100, align: 'right', color:'red'},
        total_not_vat: {col:450,row:185, width: 100, align: 'right', color:'red'}
        }
    ],
    bill_sum:{
        sum_not_vat:{col:450,row:218, width: 100, align: 'right', color:'red'},
        sum_vat:{col:450,row:236, width: 100, align: 'right', color:'red'},
        sum_charge: {col:450,row:253, width: 100, align: 'right', color:'red'}
    },
    bill_sum_charge_spell: {col:155,row:273, color:'red'},
    sign_customer:{
        signature:{col:120,row:330},
        full_name:{col:110,row:375}
    },
    sign_saler:{
        signature:{col:290,row:330},
        full_name:{col:280,row:375}
    },
    sign_manager:{
        signature:{col:470,row:330},
        full_name:{col:450,row:375}
    }
}

let arrayPrintMatrix = GetMatrix(billPrintMatrix,billPrint,colxrow);
console.log(arrayPrintMatrix);

const PDFDocument = require('pdfkit');
const fs = require('fs');

var outputFilename = './pdf/hoadon-rac-a4.pdf';


//hoa don lien 2 giao cho khach
const offset = 422;

//bat dau tao pdf
var doc = new PDFDocument({
                            size: 'A4',
                            margin: 0
    });
    var defaultColor = 'blue';
    var stream = doc.pipe(fs.createWriteStream(outputFilename));

    doc.info['Title'] = 'Mẫu in hóa đơn A4 1 trang';
    doc.info['Author'] = 'Đoàn Quốc Cường';
    
    doc.image('./pdf/mau_hoa_don.png', -5, -3, {width: 610, height: 845});

    doc.registerFont('Time-new-roman-utf8', './fonts/times.ttf');
    doc.font('Time-new-roman-utf8');

    doc.fontSize(12);
    doc.fillColor(defaultColor);
    //trang luu
    arrayPrintMatrix.forEach((el,idx) => {
        if (el.color) doc.fillColor(el.color);
        if (el.value&&el.value.length){
           doc.text(el.value, el.col, el.row,{width: el.width, align: el.align});
           doc.text(el.value, el.col, el.row + offset, {width: el.width, align: el.align});
        }
        doc.fillColor(defaultColor);
    });



    //ve anh nen de canh
    //# Scale proprotionally to the specified width
    /* doc.image('images/test.jpeg', 0, 15,{width: 300} )
    .text('Proportional to width', 0, 0)

    //# Fit the image within the dimensions
    doc.image('images/test.jpeg', 320, 15, {fit: [100, 100]})
    .rect(320, 15, 100, 100)
    .stroke()
    .text('Fit', 320, 0) */

    //# Stretch the image
    //doc.image('./pdf/mau_hoa_don.png', 0, 0, {width: 420, height: 880})

    //# Scale the image
    /* doc.image('images/test.jpeg', 320, 280, {scale: 0.25})
    .text('Scale', 320, 265) */
    
    doc.end();

   // console.log(stream);

