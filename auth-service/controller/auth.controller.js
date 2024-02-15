const { signAccessTokenRSA } = require("../helper/jwt_helper");

module.exports = {
    login: async (req, res, next) => {
        
        const id = "ABC";
        const accessToken = await signAccessTokenRSA(id);

        res.status(200).send({
            status: 200,
            message: "Login successful",
            data: {
                accessToken: accessToken
            },
        });
    },
};
