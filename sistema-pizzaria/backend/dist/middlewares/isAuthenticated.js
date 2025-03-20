"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = isAuthenticated;
const jsonwebtoken_1 = require("jsonwebtoken");
function isAuthenticated(req, res, next) {
    // Receber o token
    const authToken = req.headers.authorization;
    // Se não receber token, vai da erro
    if (!authToken) {
        return res.status(401).end();
    }
    //Vai ignorar o primeira palavar e o espaço, e pegar apenas o token
    const [, token] = authToken.split(" ");
    try {
        //validar esse token.[
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        //Recuperar o id do token e colocar dentro de uma variavel user_id dentro do req.
        req.user_id = sub;
        return next();
    }
    catch (err) {
        return res.status(401).end();
    }
}
