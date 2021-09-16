const express = require("express");
const router = express.Router();
const { check } = require('express-validator');

const {
    createInvoice
} = require("./controllers/invoice.controller")

router.route("/").post(
    [
        check('payer_email', 'Email is invalid').isEmail().normalizeEmail(),
        check('amount', 'Amount is invalid').isNumeric(),
        check('externalID', "externalID is required").not().isEmpty()
    ]
    , createInvoice)

module.exports = router;