import { Greeting, IGreeting } from "zapi";
import BaseHandler from "../Base.handler";
import { IHandlerParameters } from "@zowe/imperative";
import { inspect } from "util";

export default class GreetingHandler extends BaseHandler {
    public async processCmd(parms: IHandlerParameters): Promise<void> {
        const result: IGreeting = await Greeting.greet(this.mSession, parms.arguments.name);

        parms.response.data.setObj(result);

        // if (result.rc !== 0) {
        //     parms.response.data.setExitCode(1);
        //     parms.response.console.errorHeader("Command failed");
        //     parms.response.console.error(inspect(result));
        // } else {
        parms.response.console.log(result.content);
        // }
    }
}
