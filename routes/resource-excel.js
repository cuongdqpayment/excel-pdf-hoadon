const router = require('express').Router();

const resourceHandler = require('../handlers/resource-handler');
let handlers = resourceHandler.ResourceHandler;
//kiem tra token dung
router.get('/json-parameters', handlers.getParameters);
router.get('/json-customers', handlers.getCustomers);
router.get('/pdf-invoice', handlers.getPdfInvoice);
router.get('/pdf-invoices', handlers.getPdfInvoices);
router.get('/file-customers', handlers.getAttachCustomers);
router.get('/excel-customers', handlers.viewExcelCustomers);

module.exports = router;