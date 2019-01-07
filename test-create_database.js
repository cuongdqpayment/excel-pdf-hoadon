//doc excel ra cac sheet va dong 1
const excelToJson = require('convert-excel-to-json');
 
const results = excelToJson({
    sourceFile: './db/admin-setting.xlsx'
});

//in ra cac sheet va cac cot dau tien
//copy ra bang table va tao cac loai du lieu tuong ung
for (let sheet_name in results) {
    //console.log(sheet_name,',');
    results[sheet_name].forEach((e,i) => {
        if (i==0){
            for (let col in e){
                //in tao bang
                //console.log(sheet_name+';'+e[col]);                
            }
        }
});
}

const db = require('./db/sqlite3/sqlite-hoadon-service.js');
setTimeout(()=>{
  db.handler.init();

  setTimeout(()=>{
      db.db.getRsts('select \
                        a.stt\
                        ,a.full_name\
                        ,a.tax_id\
                        ,a.address\
                        ,a.email\
                        ,a.phone\
                        ,a.cust_id\
                        ,a.last_name \
                        ,a.first_name \
                        ,a.type_id\
                        ,b.description as cust_type\
                        ,b.value as charge\
                        ,a.price_id\
                        ,a.area_id\
                        ,c.description as area\
                        ,a.staff_id\
                        ,d.description as staff\
                        ,a.start_date\
                        ,a.end_date\
                        ,a.change_date\
                        ,a.status\
                     from customers a\
                     ,(select code, description, value from parameters where type = 5) b\
                     ,(select code, description from parameters where type = 6) c\
                     ,(select code, description from parameters where type = 4) d\
                      where a.type_id = b.code\
                      and a.area_id = c.code\
                      and a.staff_id = d.code\
                      ')
            .then(results=>{
                console.log(results);
            })
            .catch(err=>{
                console.log(err);
            });
  },1000);
},1000); //doi 3 giay de oracle ket noi

//doc du lieu tu cac sheet ra json va insert vao cac bang
