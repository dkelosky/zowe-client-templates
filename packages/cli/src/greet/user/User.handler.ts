/**
 * This program and the accompanying materials are made available and may be used, at your option, under either:
 * * Eclipse Public License v2.0, available at https://www.eclipse.org/legal/epl-v20.html, OR
 * * Apache License, version 2.0, available at http://www.apache.org/licenses/LICENSE-2.0
 *
 * SPDX-License-Identifier: EPL-2.0 OR Apache-2.0
 *
 * Copyright Contributors to the Zowe Project.
 */

import { Greeting, IGreeting } from "api";
import BaseHandler from "../Base.handler";
import { IHandlerParameters } from "@zowe/imperative";

export default class GreetingHandler extends BaseHandler {
  public async processCmd(parms: IHandlerParameters): Promise<void> {
    const result: IGreeting = await Greeting.greet(
      this.mSession,
      parms.arguments.name
    );

    parms.response.data.setObj(result);

    parms.response.console.log(result.content);
  }
}
