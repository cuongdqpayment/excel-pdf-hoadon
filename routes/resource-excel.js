const router = require('express').Router();

const resourceHandler = require('../handlers/resource-handler');
let handlers = resourceHandler.ResourceHandler;
//kiem tra token dung
router.get('/customers', handlers.getCustomers);
router.get('/invoice', handlers.getInvoice);
router.get('/invoices', handlers.getInvoices);
router.get('/backup-customers', handlers.getBackupCustomers);

module.exports = router;