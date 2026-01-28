"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoute = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_1 = require("express");
exports.authRoute = (0, express_1.Router)();
const zod_1 = require("zod");
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = require("../db");
const config_1 = require("../config");
exports.authRoute.post("/up", async (req, res) => {
    const required = zod_1.z.object({
        username: zod_1.z.string().min(3),
        password: zod_1.z.string().min(2)
    });
    const parseData = required.safeParse(req.body);
    if (!parseData.success) {
        return res.send("Invalid Credentials");
    }
    const { username, password } = req.body;
    const user = await db_1.userModel.findOne({
        username
    });
    if (user) {
        return res.send("You already signed up please login");
    }
    const hashpassword = await bcrypt_1.default.hash(password, 5);
    await db_1.userModel.create({
        username: username,
        password: hashpassword
    });
    res.json({
        msg: "Congrats, Account Created successfully"
    });
});
exports.authRoute.post("/in", async (req, res) => {
    const required = zod_1.z.object({
        username: zod_1.z.string().min(3),
        password: zod_1.z.string().min(2)
    });
    const parseData = required.safeParse(req.body);
    if (!parseData.success) {
        return res.send("Invalid Credentials");
    }
    const { username, password } = req.body;
    const user = await db_1.userModel.findOne({
        username
    });
    if (!user) {
        return res.send("Not Found");
    }
    const compared = await bcrypt_1.default.compare(password, user.password);
    if (!compared) {
        return res.send("Incorrect Password");
    }
    if (!config_1.JWT_USER) {
        return res.send("Enter JWT");
    }
    const token = jsonwebtoken_1.default.sign({
        id: user._id
    }, config_1.JWT_USER);
    res.json({
        token: token
    });
});
//# sourceMappingURL=auth.js.map