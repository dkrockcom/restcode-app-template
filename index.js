const RestFramework = require('rest-framework');
const StartupBase = require('rest-framework/StartupBase');
const TestTask = require('./Task/TestTask');

class Startup extends StartupBase {
    async onConfigure(app, server) {
        super.onConfigure(app, server)
        RestFramework.TaskManager.Add(new TestTask(), '* */5 * * * *', "TestTask");
    }

    async onException(error) {
        console.log("----------------ERROR-LOGGER---------------");
        console.log(error.stack);
    }
}
RestFramework.StartApp(Startup);