const WebPage = require('restcode/WebPage');

class Nested extends WebPage {
    isAuthEnabled = false;
    extra = {};
    async pageLoad(http) {
        super.pageLoad(http);
    }
}
module.exports = Nested;