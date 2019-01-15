"use strict"

const router = require('express').Router();

const postHandler = require('../utils/post-handler');
const tokenHandler = require('../utils/token-handler');
const proxyHandler = require('../handlers/proxy-handler');

const resourceHandler = require('../handlers/database-handler');

let handlers = resourceHandler.ResourceHandler;
//kiem tra token dung cho phep lay tai nguyen nay
router.get('/json-parameters'
            , tokenHandler.getToken
            , proxyHandler.verifyProxyToken
            , handlers.getParameters
            ); //ok
router.get('/json-customers', tokenHandler.getToken
                            , proxyHandler.verifyProxyToken
                            , handlers.getCustomers
                            );   //ok

 //lay cau hinh ve de thay doi cau hinh in an
router.get('/json-print-mask', handlers.getPrintMask);
//tra ket qua in tu client config
router.post('/json-print-mask',postHandler.jsonProcess, handlers.postPrintMask);

//tra cau truc json cho client khai bao lai: {print-config:{background:'url/base64',size:'A4',margin:0}, print_mask:[object-print-mask], print_data:[[object-print-data-page]]} 
router.get('/json-print-any', handlers.getPrintAny);
//tra ket qua in tu client json gom: {print-config:{background:'url/base64',size:'A4',margin:0}, print_mask:[object-print-mask], print_data:[[object-print-data-page]]} 
router.post('/json-print-any', handlers.postPrintAny);
 
//tra ket qua in hoa don in don le, in nhom, in het, co/khong backgroud kieu json
router.get('/json-invoices/*'
                            //, tokenHandler.getToken
                            //, proxyHandler.verifyProxyToken
                            , handlers.getInvoices
                            );   //OK
//tra ket qua in hoa don in don le, in nhom, in het, co/khong background kieu pdf
router.get('/pdf-invoices/*'
                            //, tokenHandler.getToken
                            //, proxyHandler.verifyProxyToken
                            , handlers.getPdfInvoices); //OK

module.exports = router;