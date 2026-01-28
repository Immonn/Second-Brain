"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkModel = exports.contentModel = exports.userModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
exports.userModel = (0, mongoose_1.model)("user", userSchema);
const ContentSchema = new mongoose_1.Schema({
    title: String,
    link: String,
    tags: [{ type: mongoose_1.Types.ObjectId, ref: "tag" }],
    type: String,
    userId: { type: mongoose_1.Types.ObjectId, ref: 'user', required: true }
});
exports.contentModel = (0, mongoose_1.model)("content", ContentSchema);
const linkSchema = new mongoose_1.Schema({
    hash: String,
    userId: { type: mongoose_1.Types.ObjectId, ref: "user", required: true, unique: true }
});
exports.linkModel = (0, mongoose_1.model)('links', linkSchema);
//# sourceMappingURL=db.js.map