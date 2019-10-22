"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = require("./startup/db");
const router_1 = require("./startup/router");
class UserSignup {
    constructor() {
        this.PORT = 3000;
        this.app = express_1.default();
        this.configBodyParser();
        db_1.UserDb.connectDB();
        this.app.listen(this.PORT, "localhost", () => {
            console.log("server is configured on port:", this.PORT);
        });
        this.app.use(cors_1.default());
        router_1.Route.configRoutes(this.app);
    }
    configBodyParser() {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
    }
}
const SignUp = new UserSignup();
//# sourceMappingURL=server.js.map