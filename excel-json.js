var xlstojson = require("xls-to-json-lc");
var xlsxtojson = require("xlsx-to-json-lc");

var exceltojson; //ham phu thuoc vao xlsx/xls

var filename = './db/ql-hoadon.xlsx';


exceltojson = xlsxtojson;

try {
    exceltojson({
        input: filename,
        output: null, //since we don't need output.json
        lowerCaseHeaders:true
    }, function(err,result){
        if(err) {
            console.log(err);
        } 
        console.log(result[0]);

    });
} catch (e){
    console.log("Corupted excel file",e);
}