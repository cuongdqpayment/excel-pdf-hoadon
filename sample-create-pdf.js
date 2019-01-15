const pdfUtil = require('./utils/pdf-util');


//Buoc 1----------------------------------------------------------
var pdfConfig = {
    config: {
        matrix_point: {
            max_row: 20, //so luong dong
            max_col: 10, // so luong cot
            zipper_row: 20, //khoang cach giua 2 dong
            zipper_col: 60, //khoang cach giua 2 cot
        },
        background: {
            image: './pdf/Backgroud-Giay-moi-2019.jpg',
            left: 0,
            top: 0,
            width: 610,
            height: 422
        },
        page_config: {
            size: 'A5',
            margin: 0,
            layout: 'landscape'
        },
        text_config: {
            size : 12,
            color: "gray",
        },
        title: "mau giay moi sample",
        author: "intenet"

    }
}

var sampleFileName = './pdf/giaymoi_A5_sample.pdf';

pdfUtil.createPdfPoint(pdfConfig, sampleFileName);

//---------------------------------------------------------

//ket qua cua file nay la background va ma tran diem
// su dung no de canh toa do

//Buoc 2---------------------------------------------------------
//tao ra mask
var printPdf = {
    config: {
        background: {
            image: './pdf/Backgroud-Giay-moi-2019.jpg',
            left: 0,
            top: 0,
            width: 610,
            height: 422
        },
        page_config: {
            size: 'A5',
            margin: 0,
            layout: 'landscape'
        },
        text_config: {
            size : 12,
            color: "gray",
        },
        title: "mau giay moi",
        author: "intenet"
        
    },
    //duoc tao tu  buoc 1 lay toa do va dat ten cho vi tri in
    mask: {
        ten_kh: {
            col: 120,
            row: 100
        },
        sotrang: {
            col: 540,
            row: 380,
            color: "red"
        }
    },
    //du lieu duoc tao ra tu database hoac arraykhach hang
    //ten truong trung voi mask o tren
    list_data: [
        { ten_kh: "Nguyen Van Dinh", sotrang: 1 },
        { ten_kh: "Nguyen Van anh", sotrang: 2 },
        { ten_kh: "Nguyen Van em", sotrang: 3 },
        { ten_kh: "Nguyen Van minh", sotrang: 4 },
        { ten_kh: "Nguyen Van ha", sotrang: 5 },
        { ten_kh: "Nguyen Van hung", sotrang: 6 },
        { ten_kh: "Nguyen Van hoa", sotrang: 7 }
    ]
}

var outputFilename = './pdf/giaymoi_A5.pdf';
pdfUtil.createPdf(printPdf, outputFilename);
//ket qua la tap giay moi pdf cho nhieu khach hang
