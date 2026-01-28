"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentRouter = void 0;
const express_1 = require("express");
const db_1 = require("../db");
const middleware_1 = require("../middleware");
const zod_1 = require("zod");
const mongoose_1 = require("mongoose");
exports.contentRouter = (0, express_1.Router)();
exports.contentRouter.post("/content", middleware_1.middleware, async (req, res) => {
    const required = zod_1.z.object({
        link: zod_1.z.string(),
        type: zod_1.z.string(),
        title: zod_1.z.string()
    });
    const parseData = required.safeParse(req.body);
    if (!parseData.success) {
        return res.send("Invalid Credentials");
    }
    const { link, title, type } = req.body;
    await db_1.contentModel.create({
        link,
        type,
        title,
        tags: [],
        userId: new mongoose_1.Types.ObjectId(req.userId)
    });
    res.json({
        msg: "Content Added"
    });
});
exports.contentRouter.get("/content", middleware_1.middleware, async (req, res) => {
    const userId = new mongoose_1.Types.ObjectId(req.userId);
    const content = await db_1.contentModel.find({
        userId: userId
    }).populate("userId", "username");
    res.json({
        content
    });
});
exports.contentRouter.delete("/content", middleware_1.middleware, async (req, res) => {
    const contentId = req.body.contentId;
    await db_1.contentModel.deleteMany({
        _id: contentId,
        userId: new mongoose_1.Types.ObjectId(req.userId)
    });
    res.json({
        msg: "Successfully Deleted"
    });
});
//# sourceMappingURL=content.js.map