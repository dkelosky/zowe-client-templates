import { AbstractSession, ImperativeExpect } from "@zowe/imperative";
import { IGreeting } from "./doc/IGreeting";
import { SampleRestClient } from "./SampleRestClient";

export class Greeting {

    public static readonly QUERY = "?name=";

    public static async greet(session: AbstractSession, name?: string): Promise<IGreeting> {
        ImperativeExpect.toNotBeNullOrUndefined(session, "Required session must be defined");

        let url;
        if (session.ISession.basePath == null || session.ISession.basePath === "") {
            url = this.context + this.contentResource;
        } else {
            url = this.contentResource;
        }

        if (name) {
            url = url.concat(this.QUERY, name);
        }

        return SampleRestClient.getExpectJSON<IGreeting>(session, url);
    }

    public static get contentResource(): string {
        return `greeting`;
    }

    public static get context(): string {
        return "api/v1/";
    }
}
