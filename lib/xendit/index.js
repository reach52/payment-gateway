const Xendit = require('xendit-node');
const config = require("config");

const xendit = new Xendit({
    secretKey: config.get("secretKey"),
    xenditURL: ""
});

module.exports = xendit
