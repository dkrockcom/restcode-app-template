const WebPage = require('rest-framework/WebPage');

class Default extends WebPage {
    isAuthEnabled = false;
    extra = {};
}
module.exports = Default;