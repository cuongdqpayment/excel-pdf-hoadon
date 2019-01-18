//doc excel ra cac sheet va dong 1
const excelToJson = require('convert-excel-to-json');
const vnUtils = require('./utils/vietnamese-handler');
const utils = require('./utils/array-object');
const fs = require('fs');


const db_service = require('./db/sqlite3/excel-sqlite-service');

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


//buoc 1, doc file excel setting  
var selectSheets = (filename) => {

    const results = excelToJson({
        sourceFile: filename
    });
    //in ra cac sheet va cac cot dau tien
    //copy ra bang table va tao cac loai du lieu tuong ung
    for (let sheet_name in results) {
        //console.log(sheet_name,',');
        results[sheet_name].forEach((e, i) => {
            if (i == 0) {
                for (let col in e) {
                    //in tao bang
                    console.log(sheet_name + ';' + e[col]);
                }
            }
        });
    }
}



var createDatabase = (excelFilename,dbFilename) => {
    //neu ton tai file thi delete
    //sau do tao lai database
    
    
    if (dbFilename&&fs.existsSync(dbFilename)) {
        fs.unlink(dbFilename, (err) => {
            if (err) throw err;
            console.log(dbFilename + ' was deleted');
          });
    }
    setTimeout(() => {
        db_service.handler.createDatabase(excelFilename,dbFilename);
    }, 1000); //doi 3 giay de oracle ket noi

}


var selectCustomers = (cust_id) => {
    
    //db.handler.init();

    let custSelect = cust_id?'and a.cust_id = \''+ cust_id + '\' ':'';
    setTimeout(() => {
        db_service.db.getRsts('select \
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
                console.log(results);
            })
            .catch(err => {
                console.log(err);
            });
    }, 1000);
}


var selectInvoices = (cycle_id, cust_id) => {
    
    setTimeout(() => {
        var bill_array;
        db_service.db.getRsts(
            'select                     \
            customers.cust_id           \
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
                where customers.cust_id = \''+ cust_id + '\' \
                and invoices.bill_cycle = \''+ cycle_id + '\'         \
                and customers.cust_id = invoices.cust_id  \
                and customers.cust_id = invoices.cust_id \
                ')
            .then(results => {
                console.log('invoices', results);
                bill_array = results;
            })
            .catch(err => {
                console.log(err);
            });


        var saler;
        db_service.db.getRst(
            '\
                    select description as full_name, signature from parameters where id = 33\
                    ')
            .then(results => {
                console.log('saler', results);
                saler = results;
            })
            .catch(err => {
                console.log(err);
            });

        var manager;
        db_service.db.getRst(
            '\
                        select description as full_name, signature from parameters where id = 32\
                        ')
            .then(results => {
                console.log('manager', results);
                manager = results;
            })
            .catch(err => {
                console.log(err);
            });

        var bill_details;

        db_service.db.getRsts(
            '\
                            select              \
                            bills.cust_id             \
                            ,prices.unit         \
                            ,bills.product_count \
                            ,bills.price_not_vat \
                            ,bills.total_not_vat \
                            from bills,prices \
                            where bills.cust_id= \''+ cust_id + '\' \
                            and bills.bill_cycle = \''+ cycle_id + '\'         \
                            and bills.price_id = prices.id \
                            ')
            .then(results => {
                console.log('bill_details', results);
                bill_details = results;
            })
            .catch(err => {
                console.log(err);
            });

    }, 1000);
}



var billDatePrints = (bill_date)=>{
    return [bill_date.slice(6,8), bill_date.slice(4,6), bill_date.slice(0,4)]
};



var selectInvoicesPdf = (bill_cycle,cust_id) => {

    let custSelect = cust_id?'and customers.cust_id = \''+ cust_id + '\' ':'';
    var invoices;
    db_service.db.getRsts(
        'select                     \
            customers.cust_id           \
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
        });


    var saler;
    db_service.db.getRst('select description as full_name, signature from parameters where id = 33')
        .then(results => {
            saler = results;
        })
        .catch(err => {
            console.log(err);
        });

    var manager;
    db_service.db.getRst('select description as full_name, signature from parameters where id = 32')
        .then(results => {
            manager = results;
        })
        .catch(err => {
            console.log(err);
        });

    var bill_details;

    db_service.db.getRsts(
        '\
                    select              \
                    bills.cust_id             \
                    ,prices.unit         \
                    ,bills.product_count \
                    ,bills.price_not_vat \
                    ,bills.total_not_vat \
                    from bills,prices where bill_cycle= '+ bill_cycle + ' and bills.price_id = prices.id \
                    ')
        .then(results => {
            bill_details = results;
        })
        .catch(err => {
            console.log(err);
        });

    setTimeout(() => {
        // console.log('manager', manager);
        // console.log('saler', saler);
        // console.log('invoices', invoices);
        // console.log('bill_details', bill_details);

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
                el.bill_sum_charge_spell = vnUtils.StringVietnamDong(el.sum_charge);
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

            // console.log('invoicesPrint',invoicesPrint);

            let printMatrixs = [];
            invoicesPrint.forEach(el => {
                printMatrixs.push(utils.getMatrix(billPrintMatrix, el, { col: 0, row: 0 }));
            });

            //dung ma tran nay de tao pdf cuoi cung
            console.log('printMatrixs', printMatrixs);

        }

    }, 3000);
}


//viet ham tao hoa don,
//bien vao la bill_cycle
//neu khach hang mua san pham nao thi chon gia san pham 
//so luong, don gia
//khach hang chon 1 san pham, so luong la 1, loai gia 1 (co don gia, nhan ra, thoi gian mua hang)
//ghep: customers (trang thai hien tai, khai gia, )
const json2SqliteSQLUpdateCustomerId = (tablename, json) => {
    let jsonInsert = { name: tablename, cols: [], wheres:[] }
    for (let key in json) {
        jsonInsert.cols.push( { name: key, value: json[key]});
        if (key=='cust_id') jsonInsert.wheres.push({ name: key, value: json[key] })
    }
    return jsonInsert;
}
const json2SqliteSQLInsert = (tablename, json) => {
    let jsonInsert = { name: tablename, cols: [] }
    for (let key in json) jsonInsert.cols.push( { name: key, value: json[key]});
    return jsonInsert;
}


var createInvoices = (bill_cycle_in,bill_date_in,invoice_no_in)=>{
   
    let bill_cycle = bill_cycle_in?bill_cycle_in: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '').slice(0,6);
    let bill_date = bill_date_in?bill_date_in: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '').slice(0,8);
    let invoice_no = invoice_no_in?invoice_no_in:1; //so hoa don bat dau tu 1 (so hoa don truoc do)
    
    
    var customerPromise = new Promise((resolveCustomers,rejectCustomers)=>{
        db_service.db.getRsts('select cust_id, price_id, area_id, staff_id from customers where status=1')
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
                    let price = prices.find(x => x.id = el.price_id);
    
                    let bill_detail = {
                        cust_id         : el.cust_id,          //khach mua
                        bill_cycle      : bill_cycle,    //ky mua
                        product_count   : product_count, //so luong
                        price_id        : el.price_id,        //gia
                        price_not_vat   : price.not_vat,
                        total_not_vat   : price.not_vat * product_count,
                        total_vat       : price.vat * product_count
                    };
    
                    let sqlBill = json2SqliteSQLUpdateCustomerId('bills', bill_detail);
    
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
    
                        let sqlInvoice = json2SqliteSQLUpdateCustomerId('invoices', invoice);

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
}



//1. doc du lieu tu cac sheet ra json va insert vao cac bang
//selectSheets('./db/admin-setting.xlsx'); //chay in ra ten bang va ten cot de lay lam bang tao trong sqlite 
//hoac tao select cac truong du lieu nhanh


//2. tao bang sqlite ban dau tu excel-setting (su dung cach nay de tao bang cho mobile)
//createDatabase('./db/admin-setting.xlsx', './db/qld-vinhhung-hoadon-rac.db'); //khoi tao database ban dau nhu file excel 


//3. select bang du lieu khach hang

//selectCustomers('R000000001');

//4. tao hoa don
let invoice_no = 1;
 /* createInvoices('201901','20190119',invoice_no)
 .then(data=>{
     console.log('data: ', data);
 })
 .catch(err=>{
     console.log('err: ', err);
 }); */

//5. xem hoa don
//selectInvoice('201901','R000000001');

//6. tao ma tran hoa don
//selectInvoicesPdf('201901','R000000001');

db_service.db.getRsts("select bill_cycle, count(cust_id) as count_customer from invoices group by bill_cycle")
.then(data=>{
    console.log('data: ', data);
})
.catch(err=>{
    console.log('err: ', err);
});