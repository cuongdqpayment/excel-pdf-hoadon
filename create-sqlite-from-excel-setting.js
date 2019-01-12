//doc excel ra cac sheet va dong 1
const excelToJson = require('convert-excel-to-json');
const utils = require('./utils/converter-2-vietnamese');



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
};


//buoc 1, doc file excel setting  
var selectTable = () => {

    const results = excelToJson({
        sourceFile: './db/admin-setting.xlsx'
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



var createDatabase = () => {
//neu ton tai file thi delete
//sau do tao lai database


    const db = require('./db/sqlite3/sqlite-hoadon-service.js');

    setTimeout(() => {
        db.handler.init();
    }, 1000); //doi 3 giay de oracle ket noi

}


var selectCustomer = () => {
    const db = require('./db/sqlite3/sqlite-hoadon-service.js');

    setTimeout(() => {
        db.db.getRsts('select \
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
                        where a.price_id = b.id\
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


var selectInvoice = (cust_id,cycle_id) => {
    const db = require('./db/sqlite3/sqlite-hoadon-service.js');

    setTimeout(() => {
        var bill_array;
        db.db.getRsts(
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
                db.db.getRst(
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
                    db.db.getRst(
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
                        
                        db.db.getRsts(
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

//doc du lieu tu cac sheet ra json va insert vao cac bang
//selectTable(); //chay in ra ten bang va ten cot de lay lam bang tao trong sqlite 
//hoac tao select cac truong du lieu nhanh


//tao bang sqlite ban dau tu excel-setting (su dung cach nay de tao bang cho mobile)
//createDatabase(); //khoi tao database ban dau nhu file excel 
//

//select bang du lieu khach hang
//selectCustomer();

//select hoa don de in
//selectInvoice('R000000001',201901);





var selectInvoices = (bill_cycle) => {
    const db = require('./db/sqlite3/sqlite-hoadon-service.js');

    var invoices;
    db.db.getRsts(
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
        db.db.getRst('select description as full_name, signature from parameters where id = 33')
            .then(results => {
                saler = results;
            })
            .catch(err => {
                console.log(err);
            });
            
            var manager;
            db.db.getRst('select description as full_name, signature from parameters where id = 32')
                .then(results => {
                    manager = results;
                })
                .catch(err => {
                    console.log(err);
                });
                
                var bill_details;
                
                db.db.getRsts(
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

                        if (manager&&saler&&invoices&&bill_details){
                            console.log('doc xong co du lieu'
                            ,invoices.length
                            ,bill_details.length
                            ,manager
                            ,saler
                            );

                            let invoicesPrint=[]
                            invoices.forEach(el=>{
                                el.bill_details = bill_details.filter(x=>x.cust_id==el.cust_id);
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

                           // console.log('invoicesPrint',invoicesPrint);
                           
                           let printMatrixs = [];
                           invoicesPrint.forEach(el=>{
                               printMatrixs.push(utils.GetMatrix(billPrintMatrix,el,{col:0,row:0}));
                            });
                            
                            //dung ma tran nay de tao pdf cuoi cung
                            console.log('printMatrixs',printMatrixs);

                        }
                        
                    }, 3000);
                }

 //selectInvoices(201901);


 //viet ham tao hoa don,
 //bien vao la bill_cycle
 //neu khach hang mua san pham nao thi chon gia san pham 
 //so luong, don gia
 //khach hang chon 1 san pham, so luong la 1, loai gia 1 (co don gia, nhan ra, thoi gian mua hang)
 //ghep: customers (trang thai hien tai, khai gia, )
 var createInvoice = (cust_id,bill_cycle,price_id,product_count)=>{
     //tao bill_details
     //tao invoice tu bill
     //chen hoac update vao csdl
     

 }