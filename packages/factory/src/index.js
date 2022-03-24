import build from "./consoleFactory.js";

const redLogger = build("red");
const blueLogger = build("blue");

redLogger.log("message");
blueLogger.log("message");
