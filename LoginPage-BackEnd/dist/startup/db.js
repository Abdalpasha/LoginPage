"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class UserDb {
    static connectDB() {
        mongoose_1.default.connect(this.connectionString, { useNewUrlParser: true })
            .then(() => {
            console.log("DB connection successfull");
        })
            .catch((err) => {
            console.log("DB connection failled");
            console.log(err);
        });
    }
}
UserDb.connectionString = 'mongodb+srv://abdalpasha:abdal123@abdal-s91co.mongodb.net/SignUp?retryWrites=true&w=majority';
exports.UserDb = UserDb;
//# sourceMappingURL=db.js.map