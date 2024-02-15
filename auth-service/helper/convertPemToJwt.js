const fs = require("fs");
const path = require("path");
const rsaPemToJwk = require("rsa-pem-to-jwk");

const privateKey = fs.readFileSync(
    path.resolve(__dirname, "../certs/private.pem")
);

const b = Buffer.from(privateKey, "utf-8");

let cert = b.toString();
let certString = cert + "\n";

const jwk = rsaPemToJwk(certString, { use: "sig" }, "public");

console.log(jwk);

