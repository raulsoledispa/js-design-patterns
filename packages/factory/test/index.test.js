import tap from "tap";
import consoleFactory from "../src/consoleFactory.js";
import { RedConsole } from "../src/redConsole.js";
import { YellowConsole } from "../src/yellowConsole.js";

tap.test("consoleFactory() must create a Red Console instance", async () => {
    const logger = consoleFactory("red");
    tap.type(logger, RedConsole);
});

tap.test("consoleFactory() must create a Yellow Console instance", async () => {
    const logger = consoleFactory("yellow");
    tap.type(logger, YellowConsole);
});

tap.test("consoleFactory() doesn't must create a instance", async () => {
    tap.throw(() => consoleFactory("blue"), {}, { skip: true });
});
