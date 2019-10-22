"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class UserDB {
    static connectMongoDb() {
        mongoose_1.default.connect(this.connectionString, { useNewUrlParser: true })
            .then(() => { console.log("DB connection Successfull"); })
            .catch(err => {
            console.log("DB connection failled");
            console.log(err);
        });
    }
}
UserDB.connectionString = "mongodb+srv://abdalpasha:Wwewt6432@cluster0-e1z6j.mongodb.net/test?retryWrites=true&w=majority";
exports.UserDB = UserDB;
