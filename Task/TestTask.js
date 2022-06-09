class TestTask {
    async execute() {
        console.log(`Task Called: ${new Date()}`)
    }
}
module.exports = TestTask;