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
},1000); //doi 3 giay de oracle ket noi

//doc du lieu tu cac sheet ra json va insert vao cac bang
