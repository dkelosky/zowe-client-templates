import {
    AbstractSession,
    ICommandArguments,
    ICommandHandler,
    IHandlerParameters,
    IProfile,
    IHandlerResponseConsoleApi,
    IHandlerFormatOutputApi,
    IHandlerResponseDataApi,
    IHandlerProgressApi,
    IImperativeError,
    ImperativeError,
    IProfileLoaded,
    ISession,
    Session,
    ConnectionPropsForSessCfg
} from "@zowe/imperative";
import { SampleSessionUtils } from "../SampleSessionUtils";

export default abstract class BaseHandler implements ICommandHandler {

    protected mSession: AbstractSession;

    protected mProfile: IProfile;

    protected mLoadedProfile: IProfileLoaded;

    protected mArguments: ICommandArguments;

    protected mHandlerParams: IHandlerParameters;

    public async process(commandParameters: IHandlerParameters) {

        this.mHandlerParams = commandParameters;

        const sessCfg: ISession = SampleSessionUtils.createSessCfgFromArgs(
            commandParameters.arguments
        );

        const sessCfgWithCreds = await ConnectionPropsForSessCfg.addPropsOrPrompt<ISession>(
            sessCfg, commandParameters.arguments
        );

        this.mSession = new Session(sessCfgWithCreds);
        this.mArguments = commandParameters.arguments;
        await this.processCmd(commandParameters);
    }

    public fail(err: IImperativeError) {
        throw new ImperativeError(err);
    }

    public get console(): IHandlerResponseConsoleApi {
        return this.mHandlerParams.response.console;
    }

    public get format(): IHandlerFormatOutputApi {
        return this.mHandlerParams.response.format;
    }

    public get data(): IHandlerResponseDataApi {
        return this.mHandlerParams.response.data;
    }

    public get progress(): IHandlerProgressApi {
        return this.mHandlerParams.response.progress;
    }

    public abstract processCmd(
        commandParameters: IHandlerParameters
    ): Promise<void>;
}