import tap from "tap";
import Builder from "../src/builder.js";
import Url from "../src/url.js";

tap.before(() => {
    tap.context.urlBuilder = new Builder();
    tap.context.urlBuilder.setProtocol("https");
    tap.context.urlBuilder.setHostname("node-tap.org");
    tap.context.urlBuilder.setPath("/docs/getting-started/");
});

tap.test("build() create a Url object", async () => {
    const urlBuilder = tap.context.urlBuilder;
    const url = urlBuilder.build();
    tap.type(url, Url);
});

tap.test("toString() can create am https url", (tap) => {
    const urlBuilder = tap.context.urlBuilder;
    const url = urlBuilder.build();
    tap.equal(url.toString(), "https://node-tap.org/docs/getting-started/");
    tap.end();
});

tap.test("toString() can create am http url", (tap) => {
    const urlBuilder = new Builder();
    urlBuilder.setProtocol("http");
    urlBuilder.setHost("127.0.0.1");
    urlBuilder.setPort(3000);
    urlBuilder.setPath("/index");
    const url = urlBuilder.build();
    tap.equal(url.toString(), "http://127.0.0.1:3000/index");
    tap.end();
});

tap.test(
    "toString() validate hostname and protocols such as required",
    async () => {
        const urlBuilder = tap.context.urlBuilder;
        urlBuilder.setHostname(null);
        tap.throws(() => urlBuilder.build(), {}, { skip: true });
    }
);

tap.test("toString() validate hostname and protocol as required", async () => {
    const urlBuilder = tap.context.urlBuilder;
    urlBuilder.setHost(null);
    tap.throws(() => urlBuilder.build(), {}, { skip: true });
});
