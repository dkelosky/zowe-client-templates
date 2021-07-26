"use strict";
const User_definition_1 = require("./user/User.definition");
const SampleSessionUtils_1 = require("../SampleSessionUtils");
const GreetDefinition = {
    name: "greet",
    summary: "Greet command",
    description: "Calls service for a greeting on an optional name",
    type: "group",
    children: [User_definition_1.UserDefinition],
    passOn: [
        {
            property: "options",
            value: SampleSessionUtils_1.SampleSessionUtils.SAMPLE_CONNECTION_OPTIONS,
            merge: true,
            ignoreNodes: [{ type: "group" }],
        },
    ],
};
module.exports = GreetDefinition;
//# sourceMappingURL=Greet.definition.js.map