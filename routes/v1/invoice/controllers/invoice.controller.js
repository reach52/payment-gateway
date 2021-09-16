const CreateInvoice = require("../../../../lib/xendit/invoice");
const ErrorHandling = require("../../../../lib/errorsHandling");
const { validationResult } = require('express-validator');

/**
 * @desc    create invoice
 * @author  Robert Janagap
 * @since   Sept. 15, 2021
 * @api     /xendit/invoice
 * @method  POST    
 * @ref     https://developers.xendit.co/api-reference/?_ga=2.204315415.661640618.1631524746-432699479.1631524746&_gac=1.90521064.1631676369.Cj0KCQjwkIGKBhCxARIsAINMioK-fCba9S84fChtvD2AyLbgipIadmIDWqZhV4bFBljHnHsXv3Rm2REaAiDiEALw_wcB#invoices
 */
exports.createInvoice = async (req, res) => {

    const err = validationResult(req)
    if (!err.isEmpty()) return res.status(400).json(ErrorHandling({
        errors: err.errors,
        message: "Validation Error",
        status: 400,
    }))

    try {
        const data = await CreateInvoice(req.body)

        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }

}