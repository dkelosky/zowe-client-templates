import * as path from "path";
import { ICommandDefinition } from "@zowe/imperative";

export const UserDefinition: ICommandDefinition = {
  name: "user",
  aliases: ["u"],
  summary: "User",
  description: "User to greet",
  type: "command",
  handler: path.join(__dirname, "User.handler"),
  positionals: [
    {
      name: "name",
      type: "string",
      description: "Name to greet",
      required: false,
    },
  ],
  options: [],
  profile: {
    optional: ["sample"],
  },
  examples: [
    {
      options: `John --host hostname`,
      description: "Greet John",
    },
  ],
};
