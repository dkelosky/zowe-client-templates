import { IImperativeError, RestClient, TextUtils } from "@zowe/imperative";

export class  SampleRestClient extends RestClient {
    protected processError(original: IImperativeError): IImperativeError {
        original.msg = "Sample REST API Error:\n" + original.msg;
        let details = original.causeErrors;
        try {
            const json = JSON.parse(details);
            // if we didn't get an error trying to parse json, check if there is a stack
            // on the JSON error and delete it
            if (json.stack != null) {
                this.log.error("An error was encountered with a stack." +
                    " Here is the full error before deleting the stack:\n%s", JSON.stringify(json));
                this.log.error("The stack has been deleted from the error before displaying the error to the user");
                delete json.stack; // remove the stack field
            }

            // if we didn't get an error, make the parsed details part of the error
            details = TextUtils.prettyJson(json, undefined, false);
        } catch (e) {
            // if there's an error, the causeErrors text is not json
            this.log.debug("Encountered an error trying to parse causeErrors as JSON  - causeErrors is likely not JSON format");
        }
        original.msg += "\n" + details; // add the data string which is the original error
        return original;
    }
}