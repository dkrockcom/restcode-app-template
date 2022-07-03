const LookupListBase = require('rest-code/Helper/LookupListBase');

class LookupList extends LookupListBase {
    async customLookup(lookupType, cli) {
        switch (lookupType) {
            // case "User":
            //     cli.field = {
            //         "_id": 0,
            //         "displayValue": "$username",
            //         "lookupId": "$_id"
            //     };
            //     cli.source = "User";
            //     cli.filter = null; // { LookupTypeId: item._id };
            //     cli.sort = "username";
            //     break;
        }
        return await super.customLookup(lookupType, cli);
    }
}
module.exports = LookupList;