
const timeZoneOffset = +7;
const utils = require('../utils/converter-2-vietnamese');
const db = require('../db/sqlite3/sqlite-hoadon-service');

const PDFDocument = require('pdfkit');
const fs = require('fs');
const url = require('url');

//ma tran in hoa don
//neu khong can in truong nao thi rao lai khong khai bao
var billPrintMatrix = {
    bill_date: [{ col: 285, row: 65 }, { col: 340, row: 65 }, { col: 375, row: 65 }],
    invoice_no: { col: 480, row: 55 },
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
        sum_not_vat: { col: 450, row: 218, width: 100, align: 'right', color: 'red' },
        sum_vat: { col: 450, row: 236, width: 100, align: 'right', color: 'red' },
        sum_charge: { col: 450, row: 253, width: 100, align: 'right', color: 'red' }
    },
    bill_sum_charge_spell: { col: 155, row: 273, color: 'red' },
    sign_customer: {
        signature: { col: 120, row: 330 },
        full_name: { col: 110, row: 375 }
    },
    sign_saler: {
        signature: { col: 290, row: 330 },
        full_name: { col: 280, row: 375 }
    },
    sign_manager: {
        signature: { col: 470, row: 330 },
        full_name: { col: 450, row: 375 }
    }
};


var selectCustomers = (cust_id) => {
    let custSelect = cust_id ? 'and a.cust_id = \'' + cust_id + '\' ' : '';
    return db.db.getRsts('select \
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
                        ')
            .then(results => {
                return results;
            });
}



var billDatePrints = (bill_date) => {
    return [bill_date.slice(6, 8), bill_date.slice(4, 6), bill_date.slice(0, 4)]
};


var selectInvoicesJson = (bill_cycle, cust_id) => {
    let custSelect = cust_id ? 'and customers.cust_id = \'' + cust_id + '\' ' : '';
    let custSelectBill = cust_id ? 'and bills.cust_id = \'' + cust_id + '\' ' : '';

    return (new Promise((resolve, reject) => {
        var invoices;
        var saler;
        var manager;
        var bill_details;

        db.db.getRsts(
            'select                         \
            customers.cust_id            \
            ,invoices.bill_date          \
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


        db.db.getRst('select description as full_name, signature from parameters where id = 33')
            .then(results => {
                saler = results;
            })
            .catch(err => {
                console.log(err);
                reject(err);
            });

        db.db.getRst('select description as full_name, signature from parameters where id = 32')
            .then(results => {
                manager = results;
            })
            .catch(err => {
                console.log(err);
                reject(err);
            });

        db.db.getRsts(
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

                    el.bill_date = billDatePrints(el.bill_date);

                    el.bill_details = bill_details.filter(x => x.cust_id == el.cust_id);
                    el.bill_sum_charge_spell = utils.StringVietnamDong(el.sum_charge);
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
            console.log(invoices);
            let printMatrixs = [];
            invoicesPrint.forEach(el => {
                printMatrixs.push(utils.GetMatrix(billPrintMatrix, el, { col: 0, row: 0 }));
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
        if (whereFields.find(x=>x=key)) jsonInsert.wheres.push({ name: key, value: json[key] })
    }
    return jsonInsert;
}

var createInvoices = (bill_cycle, bill_date, invoice_no, cust_id) => {
    return (new Promise((resolve, reject) => {
        var customers;
        var prices;
        let custSelect = cust_id ? 'and customers.cust_id = \'' + cust_id + '\' ' : '';
    
        db.db.getRsts('select cust_id, price_id, area_id, staff_id from customers where status = 1 ' + custSelect)
            .then(results => {
                customers = results;
            })
            .catch(err => {
                //console.log(err);
                reject(err);
            });
    
        db.db.getRsts('select id ,product_id, unit, not_vat ,vat, charge from prices where status = 1')
            .then(results => {
                prices = results;
            })
            .catch(err => {
                //console.log(err);
                reject(err);
            });
    
        setTimeout(() => {
    
            if (customers && prices) {
                console.log('doc xong du lieu tao', customers.length, prices.length);
                customers.forEach(el => {
    
                    let product_count = 1; //so luong
                    let price = prices.find(x => x.id = el.price_id);
    
                    let bill_detail = {
                        cust_id: el.cust_id,          //khach mua
                        bill_cycle: bill_cycle,    //ky mua
                        product_count: product_count, //so luong
                        price_id: el.price_id,        //gia
                        price_not_vat: price.not_vat,
                        total_not_vat: price.not_vat * product_count,
                        total_vat: price.vat * product_count
                    };
    
                    let sqlBill = json2SqliteSQLUpdateCustomerId('bills', bill_detail,['cust_id','bill_cycle']);
    
                    db.db.insert(sqlBill)
                        .then(data => {
                            //console.log(data);
                        })
                        .catch(err => {
                            //contraint thi update
                            db.db.update(sqlBill)
                                .then(data => {
                                    //console.log(data);
                                })
                                .catch(err => {
                                    //console.log(err);
                                    reject(err);
                                })
                        })
    
                    let bill_sum = {};
                    bill_sum.sum_not_vat = price.not_vat * product_count;
                    bill_sum.sum_vat = price.vat * product_count;
                    bill_sum.sum_charge = price.charge * product_count
    
                    let invoice = {
                        cust_id: el.cust_id
                        , bill_cycle: bill_cycle
                        , bill_date: bill_date
                        , invoice_no: invoice_no++
                        , sum_not_vat: bill_sum.sum_not_vat
                        , sum_vat: bill_sum.sum_vat
                        , sum_charge: bill_sum.sum_charge
                    };
    
                    let sqlInvoice = json2SqliteSQLUpdateCustomerId('invoices', invoice, ['cust_id']);
    
                    //tao hoa don thanh cong thi tra ve then
                    db.db.insert(sqlInvoice)
                        .then(data => {
                            //console.log(data);
                            resolve(data);
                        })
                        .catch(err => {
                            //console.log(err);
                            //contraint thi update
                            db.db.update(sqlInvoice)
                                .then(data => {
                                    //console.log(data);
                                    resolve(data);
                                })
                                .catch(err => {
                                    //console.log(err);
                                    reject(err);
                                })
                        })
    
                })
            }
        }, 1000);
    }));
}


class ResourceHandler {
    /**
     * Lay tham so he thong ve mang tham so
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    getParameters(req, res, next) {
        db.db.getRsts('select * from parameters')
            .then(results=>{
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify(results
                    ,(key, value) => {
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
        selectCustomers()
            .then(customers=>{
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                    res.end(JSON.stringify(customers
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

    getInvoices(req, res, next){

    }

    getPdfInvoices(req, res, next){

    }

    getExcelCustomers(req, res, next){
        
    }

    getExcelInvoices(req, res, next){
        
    }
    
}

module.exports = {
    SelectCustomers         :       selectCustomers,
    CreateInvoices          :       createInvoices,
    SelectInvoicesJson      :       selectInvoicesJson,
    SelectInvoicesMatrix    :       selectInvoicesMatrix,
    ResourceHandler         :       new ResourceHandler()

};