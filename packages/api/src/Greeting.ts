import { AbstractSession, ImperativeExpect } from "@zowe/imperative";
import { SampleRestClient } from "./SampleRestClient";

export class Greeting {

    public static readonly QUERY = "?name=";

    public static async greeting(session: AbstractSession, name?: string): Promise<string> {
        ImperativeExpect.toNotBeNullOrUndefined(session, "Required session must be defined");

        let url;
        if (session.ISession.basePath == null || session.ISession.basePath === "") {
            url = this.context + this.contentResource;
        } else {
            url = this.contentResource;
        }

        const saveUrl = url;
        url = url.concat(this.QUERY, name);

        return SampleRestClient.getExpectString(session, url);
    }

    public static get contentResource(): string {
        return `greeting`;
    }

    public static get context(): string {
        return "api/v1/";
    }
}
