const RestFramework = require('rest-code');
const StartupBase = require('rest-code/StartupBase');
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