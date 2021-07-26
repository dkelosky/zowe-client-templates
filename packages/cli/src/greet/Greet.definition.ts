import { ICommandDefinition } from "@zowe/imperative";
import { UserDefinition } from "./user/User.definition";
import { SampleSessionUtils } from "../SampleSessionUtils";

const GreetDefinition: ICommandDefinition = {
  name: "greet",
  summary: "Greet command",
  description: "Calls service for a greeting on an optional name",
  type: "group",
  children: [UserDefinition],
  passOn: [
    {
      property: "options",
      value: SampleSessionUtils.SAMPLE_CONNECTION_OPTIONS,
      merge: true,
      ignoreNodes: [{ type: "group" }],
    },
  ],
};

export = GreetDefinition;
