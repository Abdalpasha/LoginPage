"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
exports.apiRoutes = express_1.Router();
exports.apiRoutes.use(auth_1.auth.authenticate);
exports.apiRoutes.get('/events', (req, res) => {
    let events = [
        {
            "id": "3",
            "name": " auto expo",
            "description": "lorem ipsum",
            "Date": "10-08-2019"
        },
        {
            "id": "3",
            "name": " auto expo",
            "description": "lorem ipsum",
            "Date": "10-08-2019"
        },
        {
            "id": "3",
            "name": " auto expo",
            "description": "lorem ipsum",
            "Date": "10-08-2019"
        },
        {
            "id": "3",
            "name": " auto expo",
            "description": "lorem ipsum",
            "Date": "10-08-2019"
        },
        {
            "id": "3",
            "name": " auto expo",
            "description": "lorem ipsum",
            "Date": "10-08-2019"
        },
        {
            "id": "3",
            "name": " auto expo",
            "description": "lorem ipsum",
            "Date": "10-08-2019"
        },
        {
            "id": "3",
            "name": " auto expo",
            "description": "lorem ipsum",
            "Date": "10-08-2019"
        },
    ];
    res.json(events);
});
exports.apiRoutes.get('/special', (req, res) => {
    let specialEvents = [
        {
            "id": "3",
            "name": " auto expo",
            "description": "lorem ipsum",
            "Date": "10-08-2019"
        },
        {
            "id": "3",
            "name": " auto expo",
            "description": "lorem ipsum",
            "Date": "10-08-2019"
        },
        {
            "id": "3",
            "name": " auto expo",
            "description": "lorem ipsum",
            "Date": "10-08-2019"
        },
        {
            "id": "3",
            "name": " auto expo",
            "description": "lorem ipsum",
            "Date": "10-08-2019"
        },
        {
            "id": "3",
            "name": " auto expo",
            "description": "lorem ipsum",
            "Date": "10-08-2019"
        },
        {
            "id": "3",
            "name": " auto expo",
            "description": "lorem ipsum",
            "Date": "10-08-2019"
        },
        {
            "id": "3",
            "name": " auto expo",
            "description": "lorem ipsum",
            "Date": "10-08-2019"
        },
    ];
    res.json(specialEvents);
});
//# sourceMappingURL=apiRoutes.js.map