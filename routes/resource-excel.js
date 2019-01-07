const router = require('express').Router();

const resourceHandler = require('../handlers/resource-handler');
let handlers = resourceHandler.ResourceHandler;
//kiem tra token dung
router.get('/customers', handlers.getCustomers);
router.get('/pdf-invoice', handlers.getPdfInvoice);
router.get('/pdf-invoices', handlers.getPdfInvoices);
router.get('/save-customers', handlers.getAttachCustomers);
router.get('/view-customers', handlers.viewExcelCustomers);

module.exports = router;