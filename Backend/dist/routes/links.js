"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkRouter = void 0;
const express_1 = require("express");
exports.linkRouter = (0, express_1.Router)();
const db_1 = require("../db");
const middleware_1 = require("../middleware");
const zod_1 = require("zod");
const mongoose_1 = require("mongoose");
const utils_1 = require("../utils");
exports.linkRouter.post("/share", middleware_1.middleware, async (req, res) => {
    const required = zod_1.z.object({
        link: zod_1.z.string()
    });
    const parseData = required.safeParse(req.body);
    if (!parseData.success) {
        return res.send("Invalid Credentials");
    }
    const share = req.body.share;
    if (share) {
        const existLink = await db_1.linkModel.findOne({
            userId: new mongoose_1.Types.ObjectId(req.userId)
        });
        if (existLink) {
            res.json({
                hash: existLink.hash
            });
            return;
        }
        const hash = (0, utils_1.random)(10);
        await db_1.linkModel.create({
            userId: new mongoose_1.Types.ObjectId(req.userId),
            hash: hash
        });
        res.json({
            hash
        });
    }
    else {
        await db_1.linkModel.deleteOne({
            userId: new mongoose_1.Types.ObjectId(req.body)
        });
        res.json({
            msg: "Removed Link"
        });
    }
});
exports.linkRouter.get("/brain/:sharelink", async (req, res) => {
    const hash = req.params.sharelink;
    const link = await db_1.linkModel.findOne({
        hash
    });
    if (!link) {
        return res.status(411).json({
            msg: "Incorrect Link"
        });
    }
    const content = await db_1.contentModel.find({
        userId: new mongoose_1.Types.ObjectId(link.userId)
    });
    const user = await db_1.userModel.findOne({
        _id: link.userId
    });
    if (!user) {
        return res.status(411).json({
            msg: "User not found"
        });
    }
    res.json({
        username: user.username,
        content: content
    });
});
//# sourceMappingURL=links.js.map