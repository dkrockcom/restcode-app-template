const WebPage = require('rest-framework/WebPage');

class Nested extends WebPage {
    isAuthEnabled = false;
    extra = {};
    async pageLoad(http) {
        super.pageLoad(http);
    }
}
module.exports = Nested;