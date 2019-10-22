"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
let Userschema = new mongoose_1.default.Schema({
    email: String,
    password: String
});
exports.userModel = mongoose_1.default.model('users', Userschema);
//# sourceMappingURL=userModel.js.map