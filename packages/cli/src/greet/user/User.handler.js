"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("api");
const Base_handler_1 = require("../Base.handler");
class GreetingHandler extends Base_handler_1.default {
    async processCmd(parms) {
        const result = await api_1.Greeting.greet(this.mSession, parms.arguments.name);
        parms.response.data.setObj(result);
        parms.response.console.log(result.content);
    }
}
exports.default = GreetingHandler;
//# sourceMappingURL=User.handler.js.map