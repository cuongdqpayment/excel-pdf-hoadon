

var billPrint = {
    bill_date: ['10','01','2019'],
    bill_id:'000000111',
    full_name:'Nguyễn Văn A',
    organization_name:'Cơ quan',
    tax_id: '123456789',
    address:'Thôn trung hưng',
    pay_method:'TM',
    account_number:'123',
    bill_details:[
        {
        don_vi_tinh: 'tháng',
        so_luong: '1',
        don_gia: '20000',
        thanh_tien: '20000'
        }
    ],
    bill_total:{
        total_charge:'20000',
        total_vat:'2000',
        total_paid: '20000'
    },
    bill_spell: 'Hai muoi ngan dong chan',
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


/**
 * so sanh 2 doi tuong co cung thuoc tinh ma gia tri giong nhau hay khong
 * @param {*} a 
 * @param {*} b 
 */
var isEquivalent= (a, b) =>{
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    if (aProps.length != bProps.length) {
        return false;
    }
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}

var isEquikeylent= (a, b) =>{
    let aProps = Object.getOwnPropertyNames(a);
    let bProps = Object.getOwnPropertyNames(b);
    if (aProps.length != bProps.length)  return false;
    for (let i = 0; i < aProps.length; i++) if (bProps.find(x=>x===aProps[i]) === undefined) return false;
    return true;
}

// console.log('compare Value', isEquivalent(point1,point2),  isEquivalent(point1,point3));
// console.log('compare Key', isEquikeylent(point1,point2),  isEquikeylent(point1,point3));

 var billPrintMatrix = {
    bill_date: [{col:285,row:65},{col:340,row:65},{col:390,row:65}],
    bill_id:{col:480,row:55},
    full_name:{col:160,row:90},
    organization_name:{col:120,row:105},
    tax_id: {col:120,row:120},
    address:{col:120,row:135},
    pay_method:{col:145,row:148},
    account_number:{col:310,row:148},
    bill_details:[
        {
        don_vi_tinh: {col:280,row:190},
        so_luong: {col:350,row:190},
        don_gia: {col:400,row:190},
        thanh_tien: {col:480,row:190}
        }
    ],
    bill_total:{
        total_charge:{col:480,row:220},
        total_vat:{col:480,row:238},
        total_paid: {col:480,row:255}
    },
    bill_spell: {col:130,row:278},
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

const colxrow = {col:0,row:0}; //co the thay doi mat na toa do diem nay them thuoc tinh

var GetMatrix = (maskMatrix, data, point)=>{
    var arrayPrintMatrix = [];

    var PrintMatrix = (objPrintMatrix, dataObject)=>{
        for (let key of Object.keys(objPrintMatrix)){
            //console.log(typeof billPrintMatrix[key]);
            if (Array.isArray(objPrintMatrix[key])){
                objPrintMatrix[key].forEach((x,idx)=>{
                    if (isEquikeylent(point,x)){
                        //day la toa do
                        console.log('point X', key, idx , x , dataObject[key][idx]);
                        x.value = dataObject[key][idx];
                        if (x.value!==undefined&&x.value!==null&&x.value!=='') arrayPrintMatrix.push(x);
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
                    if (x.value!==undefined&&x.value!==null&&x.value!=='') arrayPrintMatrix.push(x);
                }else{
                    //day la doi tuong con xu ly de quy
                    //console.log('data next', dataObject[key])
                    if (dataObject[key]) PrintMatrix(objPrintMatrix[key],dataObject[key]);
                }
            }
        }
    
    }

    PrintMatrix(maskMatrix, data);

    return arrayPrintMatrix;
}

console.log(GetMatrix(billPrintMatrix,billPrint,colxrow));


const PDFDocument = require('pdfkit');
const fs = require('fs');

var outputFilename = './pdf/hoadon-rac-a4.pdf';


//hoa don lien 2 giao cho khach
const offset = 420;

//bat dau tao pdf
var doc = new PDFDocument({
                            size: 'A4',
                            margin: 0
    });
    
    var stream = doc.pipe(fs.createWriteStream(outputFilename));

    doc.info['Title'] = 'Mẫu in hóa đơn A4 1 trang';
    doc.info['Author'] = 'Đoàn Quốc Cường';
    
    doc.image('./pdf/mau_hoa_don.png', -5, -3, {width: 610, height: 845});

    doc.registerFont('Time-new-roman-utf8', './fonts/times.ttf');
    doc.font('Time-new-roman-utf8');

    doc.fontSize(12);
    //trang luu
    arrayPrintMatrix.forEach((el,idx) => {
        if (el.value&&el.value.length){
            doc.text(el.value, el.col, el.row);
            doc.text(el.value, el.col, el.row + offset);
        }
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

