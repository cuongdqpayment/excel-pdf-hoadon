'use strict';
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
                console.log(sheet_name+';'+e[col]);                
            }
        }
});
}

//lay ten bang va loc lay du lieu tung truong de insert vao csdl
let headerIsFirstLine = true;
   
let params = results['parameters'];
    
if (headerIsFirstLine) {
    //chuyen doi kieu du lieu dong thanh json
    //lay header = row 1  gan cho cac truong json
    let header=params[0];
    let jsonOut = [];
    for (let i=1;i<params.length;i++){
        let row = {};
        for (let col in header){
            if (params[i][col]!=undefined){
                Object.defineProperty(row, header[col], {
                    value: params[i][col], //gia tri bien duoc bind vao bindVars.p_in_0,1,...n
                    writable: false, //khong cho phep sua du lieu sau khi gan gia tri vao
                    enumerable: true, //cho phep gan thanh thuoc tinh truy van sau khi hoan thanh
                    //configurable: false default
                });
            }
        }
        jsonOut.push(row);
    }
    console.log(jsonOut);
}else{
    console.log(params);
}



