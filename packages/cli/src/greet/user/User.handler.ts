import { Greeting, IGreeting } from "api";
import BaseHandler from "../Base.handler";
import { IHandlerParameters } from "@zowe/imperative";

export default class GreetingHandler extends BaseHandler {
    public async processCmd(parms: IHandlerParameters): Promise<void> {
        const result: IGreeting = await Greeting.greet(this.mSession, parms.arguments.name);

        parms.response.data.setObj(result);

        parms.response.console.log(result.content);
    }
}
