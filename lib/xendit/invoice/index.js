const Xendit = require("../index");
const { Invoice } = Xendit
const invoiceSpecificOptions = {};
const xendit = new Invoice(invoiceSpecificOptions);

module.exports = createInvoice = async (invoice) => {
    /**
     * @desc    create invoice
     * @author  Robert Janagap
     * @since   Sept. 15, 2021
     * @ref     https://developers.xendit.co/api-reference/?_ga=2.204315415.661640618.1631524746-432699479.1631524746&_gac=1.90521064.1631676369.Cj0KCQjwkIGKBhCxARIsAINMioK-fCba9S84fChtvD2AyLbgipIadmIDWqZhV4bFBljHnHsXv3Rm2REaAiDiEALw_wcB#invoices
     */

    const resp = await xendit.createInvoice(invoice);

    return resp
}