"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class auth {
    static authenticate(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let token = req.headers.authorization.split(' ')[1];
            if (token == null) {
                return res.json(" Access Dinied");
            }
            try {
                let decodedData = yield jsonwebtoken_1.default.verify(token, "secret");
                req.user = decodedData;
                next();
            }
            catch (err) {
                console.log(err);
                return res.json(err);
            }
        });
    }
}
exports.auth = auth;
//# sourceMappingURL=auth.js.map