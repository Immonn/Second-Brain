"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
const auth_1 = require("./routes/auth");
const content_1 = require("./routes/content");
const links_1 = require("./routes/links");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "https://second-brain-alpha-ashen.vercel.app",
    credentials: true,
}));
app.use("/auth", auth_1.authRoute);
app.use(content_1.contentRouter);
app.use("/link", links_1.linkRouter);
const frontendBuildPath = path_1.default.join(__dirname, "../../Frontend/dist");
app.use(express_1.default.static(frontendBuildPath));
app.get(/^\/(?!api|auth|content|link).*/, (req, res) => {
    res.sendFile(path_1.default.join(frontendBuildPath, "index.html"));
});
async function main() {
    if (!process.env.MONGO_URL) {
        throw new Error("MONGO_URL is not defined in environment variables");
    }
    await mongoose_1.default.connect(process.env.MONGO_URL);
    app.listen(3000, () => { console.log("App is running"); });
}
main();
//# sourceMappingURL=index.js.map