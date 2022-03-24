import { RedConsole } from "./redConsole.js";
import { YellowConsole } from "./yellowConsole.js";

const build = (type) => {
    if (type === "red") {
        return new RedConsole();
    } else if (type === "yellow") {
        return new YellowConsole();
    }

    throw new Error("Color type doesn't defined");
};

export default build;
