import { ColorConsole } from "./colorConsole.js";

export class RedConsole extends ColorConsole {
    log(message) {
        console.log("\x1b[31m%s\x1b[0m", message);
    }
}
