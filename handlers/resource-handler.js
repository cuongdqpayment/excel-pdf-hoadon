
var xlstojson = require("xls-to-json-lc");
var xlsxtojson = require("xlsx-to-json-lc");

var exceltojson; //ham phu thuoc vao xlsx/xls



class ResourceHandler {

  getCustomers(req, res, next) {

    var filename = './db/ql-hoadon.xlsx';
    
    exceltojson = xlsxtojson;    
    try {
        exceltojson({
            input: filename,
            output: null, //since we don't need output.json
            lowerCaseHeaders:true
        }, function(err,result){
            if(err) {
                throw err;
            } 
           
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify({
                      success: true,
                      message: 'Thành công!',
                      data: result
                    }));
    
        });
    } catch (e){
        throw "Corupted excel file";
    }



  }
 

}

module.exports = {
    ResourceHandler: new ResourceHandler()
};