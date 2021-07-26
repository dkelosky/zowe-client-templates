import BaseHandler from "../Base.handler";
import { IHandlerParameters } from "@zowe/imperative";
export default class GreetingHandler extends BaseHandler {
    processCmd(parms: IHandlerParameters): Promise<void>;
}
