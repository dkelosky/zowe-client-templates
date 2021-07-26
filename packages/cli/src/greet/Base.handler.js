"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const imperative_1 = require("@zowe/imperative");
const SampleSessionUtils_1 = require("../SampleSessionUtils");
class BaseHandler {
    async process(commandParameters) {
        this.mHandlerParams = commandParameters;
        const sessCfg = SampleSessionUtils_1.SampleSessionUtils.createSessCfgFromArgs(commandParameters.arguments);
        const sessCfgWithCreds = await imperative_1.ConnectionPropsForSessCfg.addPropsOrPrompt(sessCfg, commandParameters.arguments);
        this.mSession = new imperative_1.Session(sessCfgWithCreds);
        this.mArguments = commandParameters.arguments;
        await this.processCmd(commandParameters);
    }
    fail(err) {
        throw new imperative_1.ImperativeError(err);
    }
    get console() {
        return this.mHandlerParams.response.console;
    }
    get format() {
        return this.mHandlerParams.response.format;
    }
    get data() {
        return this.mHandlerParams.response.data;
    }
    get progress() {
        return this.mHandlerParams.response.progress;
    }
}
exports.default = BaseHandler;
//# sourceMappingURL=Base.handler.js.map