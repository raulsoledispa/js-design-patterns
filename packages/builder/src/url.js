export default class Url {
    /**
     *
     * @param {string} protocol
     * @param {string} hostname
     * @param {string} host
     * @param {number} port
     * @param {string} path
     * @param {string} parameters
     */

    constructor(protocol, hostname, host, port, path, parameters) {
        this.protocol = protocol;
        this.hostname = hostname;
        this.host = host;
        this.port = port;
        this.path = path;
        this.parameters = parameters;
        this.validate();
    }

    validate() {
        console.log(this.host);
        console.log(this.port);
        if (!this.protocol || (!this.hostname && !this.host && !this.port)) {
            throw new Error(
                "Must specify at least a protocol, hostname or host and port"
            );
        }
    }

    toString() {
        const queryParameters = this.parameters ? `?${this.parameters}` : "";
        const ref = this.hostname ?? `${this.host}:${this.port}`;
        return `${this.protocol}://${ref}${this.path}${queryParameters}`;
    }
}
