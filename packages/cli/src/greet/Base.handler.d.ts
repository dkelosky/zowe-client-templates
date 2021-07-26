import { AbstractSession, ICommandArguments, ICommandHandler, IHandlerParameters, IProfile, IHandlerResponseConsoleApi, IHandlerFormatOutputApi, IHandlerResponseDataApi, IHandlerProgressApi, IImperativeError, IProfileLoaded } from "@zowe/imperative";
export default abstract class BaseHandler implements ICommandHandler {
    protected mSession: AbstractSession;
    protected mProfile: IProfile;
    protected mLoadedProfile: IProfileLoaded;
    protected mArguments: ICommandArguments;
    protected mHandlerParams: IHandlerParameters;
    process(commandParameters: IHandlerParameters): Promise<void>;
    fail(err: IImperativeError): void;
    get console(): IHandlerResponseConsoleApi;
    get format(): IHandlerFormatOutputApi;
    get data(): IHandlerResponseDataApi;
    get progress(): IHandlerProgressApi;
    abstract processCmd(commandParameters: IHandlerParameters): Promise<void>;
}
