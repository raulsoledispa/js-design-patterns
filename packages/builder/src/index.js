import Builder from "./builder.js";

const httpsUrl = new Builder()
    .setProtocol("https")
    .setHostname("hashnode.com")
    .setPath("/explore")
    .build();
console.log(httpsUrl.toString()); // https://hashnode.com/explore

const ftpUrl = new Builder()
    .setProtocol("ftp")
    .setHostname("fileservername")
    .setPath("/path")
    .build();
console.log(ftpUrl.toString()); // ftp://fileservername/path
