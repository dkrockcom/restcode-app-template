const RestFramework = require('rest-code');
const StartupBase = require('rest-code/StartupBase');
const TestTask = require('./Task/TestTask');

class Startup extends StartupBase {
    async onConfigure(app, server) {
        RestFramework.TaskManager.Add(new TestTask(), '* */1 * * * *', "TestTask");
        super.onConfigure(app, server)
    }

    async onException(error) {
        console.log("----------------ERROR-LOGGER---------------");
        console.log(error.stack);
    }
}
RestFramework.StartApp(Startup);