"use strict"

const timeZoneOffset = +7;
const vietnamese = require('../utils/vietnamese-handler');
const arrayObject = require('../utils/array-object');

const db_service = require('../db/sqlite3/excel-sqlite-service');
const dbFilename = './db/qld-vinhhung-hoadon-rac.db';
const excelFilename = './db/admin-setting.xlsx';

/* 
setTimeout(() => {
    db_service.handler.init(dbFilename); //ket noi db moi neu khac default trong excel-sqlite-service
}, 1000); //doi 1s ket noi db


//du lieu ban dau duoc tao tu manual bang lenh
setTimeout(() => {
    db_service.handler.createDatabase(excelFilename,dbFilename); //ket noi db moi
}, 3000); //doi 1s ket noi db
 */

const PDFDocument = require('pdfkit');
const fs = require('fs');
const url = require('url');

//ma tran in hoa don
const offset_1 = 0 - 5; //hoa don lien 2 giao cho khach
const offset_2 = 422 + 17; //hoa don lien 2 giao cho khach

const image_size = {left:-5, top:-18, width: 610, height: 890 };

//neu khong can in truong nao thi rao lai khong khai bao
var billPrintMatrix = {
    bill_date: [{ col: 285, row: 58 }, { col: 340, row: 58 }, { col: 387, row: 58 }],
    //invoice_no: { col: 480, row: 55, color: 'red'},
    full_name: { col: 160, row: 90 },
    organization_name: { col: 120, row: 105 },
    tax_no: { col: 120, row: 120 },
    address: { col: 120, row: 135 },
    pay_method: { col: 145, row: 148 },
    account_no: { col: 310, row: 148 },
    bill_details: [
        {
            unit: { col: 280, row: 185 },
            product_count: { col: 260, row: 185, width: 100, align: 'right', color: 'red' },
            price_not_vat: { col: 350, row: 185, width: 100, align: 'right', color: 'red' },
            total_not_vat: { col: 450, row: 185, width: 100, align: 'right', color: 'red' }
        }
    ],
    bill_sum: {
        sum_not_vat: { col: 450, row: 219, width: 100, align: 'right', color: 'red' },
        sum_vat: { col: 450, row: 238, width: 100, align: 'right', color: 'red' },
        sum_charge: { col: 450, row: 257, width: 100, align: 'right', color: 'red' }
    },
    bill_sum_charge_spell: { col: 155, row: 278, color: 'red' },
    sign_customer: {
        signature: { col: 120, row: 330 },
        full_name: { col: 105, row: 380 }
    },
    sign_saler: {
        signature: { col: 290, row: 330 },
        full_name: { col: 280, row: 380 }
    },
    sign_manager: {
        signature: { col: 470, row: 330 },
        full_name: { col: 450, row: 380 }
    }
};


var selectCustomers = (cust_id) => {
    let custSelect = cust_id ? 'and a.cust_id = \'' + cust_id + '\' ' : '';
    let sql = 'select \
                    a.id\
                    ,a.full_name\
                    ,a.tax_no\
                    ,a.address\
                    ,a.email\
                    ,a.phone\
                    ,a.cust_id\
                    ,a.last_name \
                    ,a.first_name \
                    ,a.type_id\
                    ,b.name as cust_type\
                    ,a.price_id\
                    ,b.unit\
                    ,b.not_vat\
                    ,b.vat\
                    ,b.charge\
                    ,a.area_id\
                    ,c.description as area\
                    ,a.staff_id\
                    ,d.description as staff\
                    ,a.start_date\
                    ,a.end_date\
                    ,a.change_time\
                    ,a.status\
                    from customers a\
                    ,prices b\
                    ,(select code, description from parameters where type = 6) c\
                    ,(select code, description from parameters where type = 4) d\
                    where 1=1 \
                    '+ custSelect + ' \
                    and a.price_id = b.id\
                    and a.area_id = c.code\
                    and a.staff_id = d.code\
                    ';

    return db_service.db.getRsts(sql)
        .then(results => {
            return results;
        });
}


var selectInvoicesJson = (bill_cycle, cust_id) => {
    let custSelect = cust_id ? 'and customers.cust_id = \'' + cust_id + '\' ' : '';
    let custSelectBill = cust_id ? 'and bills.cust_id = \'' + cust_id + '\' ' : '';

    //console.log(custSelect,custSelectBill);
    return (new Promise((resolve, reject) => {
        var invoices;
        var saler;
        var manager;
        var bill_details;

        db_service.db.getRsts(
            'select                         \
            customers.cust_id            \
            ,invoices.bill_date          \
            ,invoices.bill_cycle          \
            ,invoices.invoice_no         \
            ,customers.full_name         \
            ,customers.organization_name \
            ,customers.tax_no            \
            ,customers.address      \
            ,customers.pay_method   \
            ,customers.account_no    \
            ,invoices.sum_not_vat   \
            ,invoices.sum_vat        \
            ,invoices.sum_charge    \
            ,customers.signature    \
            from                    \
            customers           \
            ,invoices           \
            where invoices.bill_cycle = \''+ bill_cycle + '\' \
            ' + custSelect + ' \
            and customers.cust_id = invoices.cust_id  \
            and customers.cust_id = invoices.cust_id \
            ')
            .then(results => {
                invoices = results;
            })
            .catch(err => {
                console.log(err);
                reject(err);
            });


        db_service.db.getRst('select description as full_name, signature from parameters where id = 33')
            .then(results => {
                saler = results;
            })
            .catch(err => {
                console.log(err);
                reject(err);
            });

        db_service.db.getRst('select description as full_name, signature from parameters where id = 32')
            .then(results => {
                manager = results;
            })
            .catch(err => {
                console.log(err);
                reject(err);
            });

        db_service.db.getRsts(
            '\
                select              \
                bills.cust_id             \
                ,prices.unit         \
                ,bills.product_count \
                ,bills.price_not_vat \
                ,bills.total_not_vat \
                from bills,prices \
                where bills.bill_cycle= ' + bill_cycle + '\
                '+ custSelectBill + '                \
                and bills.price_id = prices.id \
                ')
            .then(results => {
                bill_details = results;
            })
            .catch(err => {
                console.log(err);
                reject(err);
            });

        setTimeout(() => {
            if (manager && saler && invoices && bill_details) {
                console.log('doc xong co du lieu'
                    , invoices.length
                    , bill_details.length
                    , manager
                    , saler
                );

                let invoicesPrint = []
                invoices.forEach(el => {

                    //su dung trong chuyen doi kieu du lieu dong bo luon
                    //el.bill_date = billDatePrints(el.bill_date);

                    el.bill_details = bill_details.filter(x => x.cust_id == el.cust_id);
                    el.bill_sum_charge_spell = vietnamese.StringVietnamDong(el.sum_charge);
                    el.bill_sum = {
                        sum_not_vat: el.sum_not_vat,
                        sum_vat: el.sum_vat,
                        sum_charge: el.sum_charge
                    };
                    el.sign_customer = {
                        signature: null,
                        full_name: el.full_name
                    }
                    el.sign_saler = {
                        signature: saler.signature,
                        full_name: saler.full_name
                    }
                    el.sign_manager = {
                        signature: manager.signature,
                        full_name: manager.full_name
                    }
                    invoicesPrint.push(el);
                })
                resolve(invoicesPrint);
            }
        }, 3000);
    }));
}

var selectInvoicesMatrix = (bill_cycle, cust_id) => {
    return selectInvoicesJson(bill_cycle, cust_id)
        .then(invoices => {
            var old = JSON.stringify(invoices
                , (key, value) => {
                    if (key == 'start_date') return new Date(value + timeZoneOffset * 60 * 60 * 1000).toISOString().replace(/T/, ' ').replace(/\..+/, '')
                    if (typeof value == 'number') return '' + value; //chuyen doi thanh chuoi (format dau . hoac dau trong)
                    if (key == 'bill_date'&&value) return [value.slice(6, 8), value.slice(4, 6), value.slice(2, 4)]
                    return value;
                }
            ); //convert to JSON string
            const invoicesPrintString = JSON.parse(old); //convert back to array
            let printMatrixs = [];
            invoicesPrintString.forEach(el => {
                printMatrixs.push(arrayObject.getMatrix(billPrintMatrix, el, { col: 0, row: 0 })); //cac cot gia tri nhieu nhat cau hinh in
            });
            return printMatrixs;
        })
        .catch(err => {
            console.log(err);
            return err;
        })
}


var json2SqliteSQLUpdateCustomerId = (tablename, json, idFields) => {
    let jsonInsert = { name: tablename, cols: [], wheres: [] }
    let whereFields = idFields ? idFields : ['cust_id'];
    for (let key in json) {
        jsonInsert.cols.push({ name: key, value: json[key] });
        if (whereFields.find(x => x === key)) jsonInsert.wheres.push({ name: key, value: json[key] })
    }
    return jsonInsert;
}

var createInvoicesCycle = (bill_cycle_in,bill_date_in,invoice_no_in, cust_id)=>{
   
    let bill_cycle = bill_cycle_in?bill_cycle_in: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '').slice(0,6);
    let bill_date = bill_date_in?bill_date_in: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '').slice(0,8);
    let invoice_no = invoice_no_in?invoice_no_in:1; //so hoa don bat dau tu 1 (so hoa don truoc do)
    
    let custSelect = cust_id ? 'and customers.cust_id = \'' + cust_id + '\' ' : '';

    var customerPromise = new Promise((resolveCustomers,rejectCustomers)=>{
        db_service.db.getRsts('select cust_id, price_id, area_id, staff_id from customers where status=1 ' + custSelect)
            .then(results => {
                resolveCustomers(results);
            })
            .catch(err => {
                rejectCustomers(err);
            })
    })

    var pricesPromise =  new Promise((resolvePrices,rejectPrices)=>{
        db_service.db.getRsts('select id ,product_id, unit, not_vat ,vat, charge from prices where status = 1')
            .then(results => {
                resolvePrices(results);
            })
            .catch(err => {
                rejectPrices(err);
            })
    })

    //tra ve no mot Promise
    return pricesPromise
    .then(prices=>{
        return customerPromise.then(customers=>{

            console.log('doc xong du lieu tao', customers.length, prices.length);

            var count = 0;

            var customerInvoicePromise = new Promise((resolve,reject)=>{
                //duyet Mang khach hang muon tao hoa don
                customers.forEach((el,idx)=>{

                    let product_count = 1; //so luong
                    let price = prices.find(x => x.id === el.price_id);
    
                    let bill_detail = {
                        cust_id         : el.cust_id,          //khach mua
                        bill_cycle      : bill_cycle,    //ky mua
                        product_count   : product_count, //so luong
                        price_id        : el.price_id,        //gia
                        price_not_vat   : price.not_vat,
                        total_not_vat   : price.not_vat * product_count,
                        total_vat       : price.vat * product_count
                    };
    
                    let sqlBill = json2SqliteSQLUpdateCustomerId('bills', bill_detail, ['cust_id','bill_cycle', 'price_id']) ;
    
                    var billDetailPromise = new Promise((resolveBill,rejectBill)=>{
                        db_service.db.insert(sqlBill)
                            .then(data => {
                                resolveBill(data);
                            })
                            .catch(err => {
                                db_service.db.update(sqlBill)
                                .then(data=>{
                                    resolveBill(data);
                                })
                                .catch(err=>{
                                    rejectBill(err);
                                })
                            })
                    })
                    
    
                        let bill_sum={};
                        bill_sum.sum_not_vat    = price.not_vat * product_count;
                        bill_sum.sum_vat        = price.vat * product_count;
                        bill_sum.sum_charge     = price.charge * product_count
    
                        let invoice = {
                            cust_id         : el.cust_id
                            , bill_cycle    : bill_cycle
                            , bill_date     : bill_date
                            , invoice_no    : invoice_no++
                            , sum_not_vat   : bill_sum.sum_not_vat
                            , sum_vat       : bill_sum.sum_vat
                            , sum_charge    : bill_sum.sum_charge
                        };
    
                        let sqlInvoice = json2SqliteSQLUpdateCustomerId('invoices', invoice,  ['cust_id','bill_cycle']);

                        console.log('sqlInvoice', sqlInvoice);

                        var invoicePromise = new Promise((resolveInvoice,rejectInvoice)=>{
                            db_service.db.insert(sqlInvoice)
                                .then(data => {
                                    resolveInvoice(invoice_no);
                                })
                                .catch(err => {
                                    db_service.db.update(sqlInvoice)
                                    .then(data=>{
                                        resolveInvoice(invoice_no);
                                    })
                                    .catch(err=>{
                                        rejectInvoice(err);            
                                    })
                                })
                        })
                        
                        billDetailPromise
                            .then(billResult=>{
                                invoicePromise.then(invoiceResult=>{
                                    count++; //xong 1 bang ghi
                                    if (count>=customers.length){
                                        console.log('Tao xong hoa don ky', count , bill_cycle, bill_date);
                                        resolve(
                                            {
                                                status: true
                                                , message:'Tao xong hoa don ky'
                                                , count: count 
                                                , bill_cycle: bill_cycle
                                                , bill_date: bill_date
                                                , invoice_no: invoice_no
                                            }
                                        );
                                    }
                                })
                                .catch(err=>{reject(
                                    {message:'Level 1:',error:err}
                                )})
                            })
                            .catch(err=>{reject(
                                {message:'Level 2:',error:err}
                            )})
            })
            });

            return customerInvoicePromise; //tra ve promise

        })
        .catch(err=>{throw {message:'Level 3:',error:err}});
    })
    .catch(err=>{throw {message:'ALL:',error:err}});
};

var createPdfInvoices = (invoices, outputFilename, background) => {

    //bat dau tao pdf
    var doc = new PDFDocument({
        size: 'A4',
        margin: 0
    });
    var defaultColor = 'blue';
    var stream = doc.pipe(fs.createWriteStream(outputFilename));

    doc.info['Title'] = 'Mẫu in hóa đơn A4 1 trang';
    doc.info['Author'] = 'Đoàn Quốc Cường';

    doc.registerFont('Time-new-roman-utf8', './fonts/times.ttf');
    doc.font('Time-new-roman-utf8');

    //trang luu
    invoices.forEach((invoice, idx) => {
        if (idx > 0) doc.addPage(); //in hoa don moi
        if (background) doc.image(background, image_size.left, image_size.top, { width: image_size.width, height: image_size.height });
        doc.fontSize(12);
        doc.fillColor(defaultColor);
        invoice.forEach(el => {
            if (el.color) doc.fillColor(el.color);
            if (el.value && el.value.length) {
                doc.text(el.value, el.col, el.row + offset_1, { width: el.width, align: el.align });
                doc.text(el.value, el.col, el.row + offset_2, { width: el.width, align: el.align });
            }
            doc.fillColor(defaultColor);
        });
    })
    doc.end();

    return stream;
}

class ResourceHandler {

    /**
     * tạo hóa đơn theo req.json_data = {bill_cycle,bill_date,invoice_no,cust_id}
     * ket qủa cho biêt tạo được bao nhiêu hoá đơn, chu kỳ, ngày hóa đơn và số hóa đơn cho phiên sau
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    createInvoices(req, res, next) {
        if (req.json_data && req.json_data.bill_cycle && req.json_data.bill_date) {

            createInvoicesCycle(
                req.json_data.bill_cycle
                , req.json_data.bill_date
                , req.json_data.invoice_no
                , req.json_data.cust_id
                )
            .then(data=>{
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({status: true, message: "Created invoice successfull!", data: data }));
            })
            .catch(err=>{
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(JSON.stringify({ message: "Can not create Invoice cycle!", error: err }));
            });


        } else {
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(JSON.stringify({ message: "No json_data post" }));
        }
    }

    getBillCycles(req, res, next) {
        db_service.db.getRsts("select bill_cycle\
            ,count(cust_id) as count_customer\
            ,min(bill_date) as bill_date_min\
            ,max(bill_date) as bill_date\
            ,min(invoice_no) as invoice_no_min\
            ,max(invoice_no) as invoice_no\
            from invoices group by bill_cycle")
        .then(billCycles=>{
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify(billCycles
                    , (key, value) => {
                        if (value === null) { return undefined; }
                        return value;
                    }
                ));
            })
            .catch(err => {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(JSON.stringify(err));
            });
    }

    /**
     * Lay tham so he thong ve mang tham so
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    getParameters(req, res, next) {
        db_service.db.getRsts('select * from parameters')
            .then(results => {
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify(results
                    , (key, value) => {
                        if (value === null) { return undefined; }
                        return value;
                    }
                ));
            })
            .catch(err => {
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

        selectCustomers()
            .then(customers => {
                //console.log('customers',customers)
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify(customers
                    , (key, value) => {
                        if (value === null) {
                            //chuyen doi null khong xuat hien
                            return undefined;
                        }
                        if (key === 'start_date') {
                            //chuyen doi thoi gian milisecond thanh string ngay gio
                            return new Date(value + timeZoneOffset * 60 * 60 * 1000).toISOString().replace(/T/, ' ').replace(/\..+/, '')
                        }
                        return value;
                    }
                ));
            })
            .catch(err => {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(JSON.stringify(err));
            });
    }

    /**
     * Lay hoa don excel theo ky,khach le?backgroud=yes/no
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    getInvoices(req, res, next) {
        let path = decodeURIComponent(url.parse(req.url, true, false).pathname);
        let params = path.substring('/json-invoices/'.length);
        let bill_cycle = params.slice(0, 6);
        let cust_id = params.slice(7, 17);

        selectInvoicesJson(bill_cycle, cust_id)
            .then(invoices => {
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify(invoices
                    , (key, value) => {
                        if (value === null) return undefined
                        if (key == 'start_date') return new Date(value + timeZoneOffset * 60 * 60 * 1000).toISOString().replace(/T/, ' ').replace(/\..+/, '')
                        return value;
                    }
                ));
            })
            .catch(err => {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(JSON.stringify(err));
            });

    }

    /**
     * tao ban in file pdf luu tren server ten file theo 
     * bill_cycle
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    postPdfInvoices(req, res, next) {
        
        let bill_cycle = req.json_data.bill_cycle;
        let cust_id = req.json_data.cust_id?req.json_data.cust_id:'all';
        let bg = req.json_data.background;

        console.log('background:', bg);

        selectInvoicesMatrix(bill_cycle, cust_id)
            .then(invoicesMatrix => {

                let outputFilename = './pdf/'+bill_cycle+'_'+cust_id+'_invoices.pdf';
                
                let background = './pdf/mau_hoa_don.png';

                let stream = createPdfInvoices(invoicesMatrix, outputFilename, bg ? background : undefined);

                stream.on('finish', () => {
                    fs.readFile(outputFilename, { flag: 'r' }, (err, bufferPdf) => {
                        if (err) {
                            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                            res.end(JSON.stringify(err));
                        }
                        res.writeHead(200, { 'Content-Type': 'application/pdf; charset=utf-8' });
                        res.end(bufferPdf);
                    });
                });
            })
            .catch(err => {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(JSON.stringify({message:'Lỗi đọc file pdf', error:err}));
            });


    }

    getPdfInvoices(req, res, next) {
        let req_url = url.parse(req.url, true, false);
        let path = decodeURIComponent(req_url.pathname);
        let params = path.substring('/pdf-invoices/'.length);
        console.log('params:', params);

        let bill_cycle = params.slice(0, 6);
        let cust_id = params.slice(7, 17);

        let bg = req_url.query.background;

        console.log('background:', bg);

        selectInvoicesMatrix(bill_cycle, cust_id)
            .then(invoicesMatrix => {

                let outputFilename = './pdf/hoadon_1.pdf';
                let background = './pdf/mau_hoa_don.png';

                let stream = createPdfInvoices(invoicesMatrix, outputFilename, bg ? background : undefined);

                stream.on('finish', () => {
                    fs.readFile(outputFilename, { flag: 'r' }, (err, bufferPdf) => {
                        if (err) {
                            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                            res.end(JSON.stringify(err));
                        }
                        res.writeHead(200, { 'Content-Type': 'application/pdf; charset=utf-8' });
                        res.end(bufferPdf);
                    });
                });
            })
            .catch(err => {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(JSON.stringify({message:'Lỗi đọc file pdf', error:err}));
            });


    }

    /**
     * tra ds khack hang bang excel
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    getExcelCustomers(req, res, next) {

    }

    /**
     * tra ds hoa don bang excel 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    getExcelInvoices(req, res, next) {

    }


    //lay cau hinh ve de thay doi cau hinh in an
    getPrintMask(req, res, next) {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(billPrintMatrix
            , (key, value) => {
                if (value === null) { return undefined; }
                return value;
            }
        ));
    }
    //tra ket qua in tu client config
    postPrintMask(req, res, next) {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(req.json_data));
    }
    //tra cau truc json cho client khai bao lai: {print-config:{background:'url/base64',size:'A4',margin:0}, print_mask:[object-print-mask], print_data:[[object-print-data-page]]} 
    getPrintAny(req, res, next) {

    }
    //tra ket qua in tu client json gom: {print-config:{background:'url/base64',size:'A4',margin:0}, print_mask:[object-print-mask], print_data:[[object-print-data-page]]} 
    postPrintAny(req, res, next) {

    }

}

module.exports = {
    ResourceHandler: new ResourceHandler()

};