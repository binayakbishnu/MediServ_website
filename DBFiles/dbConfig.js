const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const server = process.env.SERVER;
const database = process.env.DATABASE;
const instanceName = process.env.INSTANCE_NAME;

const config = {
    user: username,
    password: password,
    server: server,
    database: database,
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instanceName: instanceName,
    },
    port:1433
}

module.exports = config;