"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = middleware;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
function middleware(req, res, next) {
    const token = req.headers.token;
    if (!config_1.JWT_USER) {
        return res.send("Provide JWT");
    }
    if (!token) {
        return res.send("Token not found");
    }
    const decode = jsonwebtoken_1.default.verify(token, config_1.JWT_USER);
    if (typeof decode === "object" && decode !== null && "id" in decode) {
        req.userId = decode.id;
        next();
    }
    else {
        res.send("Pls signed in again");
    }
}
//# sourceMappingURL=middleware.js.map