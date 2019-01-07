// dich vu tao csdl hoa don ban dau
// doc excel, tao db, tao table
const fs = require('fs');
const SQLiteDAO = require('./sqlite-dao');
const dirDB = 'db';

const xlsxtojson1st = require("xlsx-to-json-lc");
const databaseSetting = './db/admin-setting.xlsx';
const excelToJsonAll = require('convert-excel-to-json');
const dbFileName = './' + dirDB + '/hoadon-database.db';

if (!fs.existsSync(dirDB)) {
    fs.mkdirSync(dirDB);
}

const db = new SQLiteDAO(dbFileName);

class HandleDatabase {

    init(){
        if (fs.existsSync(databaseSetting)) {
            this.initTable();
        }else if (fs.existsSync(dbFileName)){
            console.log('Database '+ dbFileName + ' ready!');
        }else{
            throw 'No Database Setting xlsx and Database Sqlite'
        }
    }
    //khoi tao cac bang luu so lieu
    initTable(){
        //doc excel
        try {
            xlsxtojson1st({
                input: databaseSetting,
                output: null, //since we don't need output.json
                lowerCaseHeaders:true
            }, (err,results)=>{
                if(err) {
                    console.log(err);
                } 
                //console.log('result :',results);
                let distinct_table_name =[];
                results.forEach(el => {
                    if (!distinct_table_name.find(x=>x==el.table_name)) distinct_table_name.push(el.table_name)
                });

                //console.log(distinct_table_name)
                
                distinct_table_name.forEach(el=>{
                    let table = results.filter(x=>x.table_name==el);
                    //console.log(table);
                    if (table){
                        let tableJson={};
                        tableJson.name = el;
                        tableJson.cols = [];
                        table.forEach(e=>{
                            let col = {};
                            col.name = e.field_name;
                            col.type = e.data_type;
                            col.option_key = e.options;
                            col.description = e.description;
                            tableJson.cols.push(col);
                        })
                        //console.log(tableJson);
                        db.createTable(tableJson)
                        .then(data=>{
                            console.log(data);
                        })
                        .catch(err=>{
                            console.log(err);
                        })
                    }
                })
                //cho tao bang xong moi doc du lieu
                setTimeout(()=>{
                    console.log('table created: ',distinct_table_name)
                    this.initData(distinct_table_name);
                },1000);

            });
        } catch (e){
            console.log("Corupted excel file",e);
        }
    } 
    
    initData(tables){
        try{
            let results = excelToJsonAll({
                sourceFile: databaseSetting
            });

            tables.forEach(tablename=>{
                let sheet = results[tablename];
                if (sheet!=undefined){
                    console.log('sheet-tablename insert db: ',tablename);
                    //chuyen doi kieu doc dong 1 la header
                    let header=sheet[0];
                    let jsonOut = [];
                    for (let i=1;i<sheet.length;i++){
                        let row = {};
                        for (let col in header){
                            if (sheet[i][col]!=undefined){
                                Object.defineProperty(row, header[col], {
                                    value: sheet[i][col], //gia tri bien duoc bind vao bindVars.p_in_0,1,...n
                                    writable: false, //khong cho phep sua du lieu sau khi gan gia tri vao
                                    enumerable: true, //cho phep gan thanh thuoc tinh truy van sau khi hoan thanh
                                    //configurable: false default
                                });
                            }
                        }
                        jsonOut.push(row);
                    }
                    //thuc hien insert data vao table da tao
                    for (let i=0;i<jsonOut.length;i++){
                        let row = jsonOut[i];
                        let jsonInsert={ name:tablename,cols:[]}
                        for (let key in row){
                            let col = {name:key,value:row[key]};
                            jsonInsert.cols.push(col);
                        }
                        //`console.log(jsonInsert);
                        db.insert(jsonInsert)
                        .then(data=>{
                            //console.log(data)
                        })
                        .catch(err=>{
                            //console.log(err);
                        })
                    }  
                }
            })

        }catch(e){
            console.log("Corupted excel file",e);
        }
    }
}

module.exports = {
    db:db,
    handler: new HandleDatabase()
};