const fs = require("fs");
const path = require("path");
const JWT = require("jsonwebtoken");
module.exports = {
    signAccessTokenRSA: (userId) => {
        return new Promise(async (resolve, reject) => {
            const payload = {};

            const secret = fs.readFileSync(
                path.resolve(__dirname, "../certs/private.pem")
            );

            const options = {
                expiresIn: "10min",
                issuer: "www.hasan.com",
                audience: userId,
                algorithm: "RS256",
            };

            JWT.sign(payload, secret, options, (err, token) => {
                if (err) {
                    //console.log(err.message);
                    //return reject(err);
                    return reject(createError.InternalServerError());
                }

                resolve(token);
            });
        });
    },
};
