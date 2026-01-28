"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const auth_1 = require("./routes/auth");
const content_1 = require("./routes/content");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/auth", auth_1.authRoute);
app.use(content_1.contentRouter);
async function main() {
    if (!process.env.MONGO_URL) {
        throw new Error("MONGO_URL is not defined in environment variables");
    }
    await mongoose_1.default.connect(process.env.MONGO_URL);
    app.listen(3000, () => { console.log("App is running"); });
}
main();
//# sourceMappingURL=index.js.map