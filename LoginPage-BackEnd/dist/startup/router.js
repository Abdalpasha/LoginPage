"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../controller/userController");
const apiRoutes_1 = require("../routes/apiRoutes");
class Route {
    static configRoutes(app) {
        app.get('/', (req, res) => {
            res.status(200).json({ "sucess": "server is up" });
        });
        let userControllerobj = new userController_1.userSignupController;
        app.post('/registerUser', userControllerobj.registerUser);
        app.post('/login', userControllerobj.loginUser);
        app.use('/api', apiRoutes_1.apiRoutes);
    }
}
exports.Route = Route;
//# sourceMappingURL=router.js.map