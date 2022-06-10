const WebPage = require('restcode/WebPage');

class Home extends WebPage {
    isAuthEnabled = false;
    extra = {};
    async pageLoad(http) {
        super.pageLoad(http);
    }
}
module.exports = Home;