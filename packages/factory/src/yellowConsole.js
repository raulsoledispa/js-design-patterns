import { ColorConsole } from "./colorConsole.js";

export class YellowConsole extends ColorConsole {
    log(message) {
        console.log("\x1b[33m%s\x1b[0m", message);
    }
}
