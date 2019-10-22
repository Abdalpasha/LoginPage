import express from 'express';
import {Router} from 'express';
import { auth } from '../middleware/auth'

export const apiRoutes:Router =Router()

apiRoutes.use(auth.authenticate);

apiRoutes.get('/events', (req:express.Request, res:express.Response)=> {
    let events=[
        {
        "id" : "3",
        "name": " auto expo",
        "description" : "lorem ipsum",
        "Date" : "10-08-2019"
        },
        {
            "id" : "3",
            "name": " auto expo",
            "description" : "lorem ipsum",
            "Date" : "10-08-2019"
        },
        {
            "id" : "3",
            "name": " auto expo",
            "description" : "lorem ipsum",
            "Date" : "10-08-2019"
        },
        {
            "id" : "3",
            "name": " auto expo",
            "description" : "lorem ipsum",
            "Date" : "10-08-2019"
        },
        {
            "id" : "3",
            "name": " auto expo",
            "description" : "lorem ipsum",
            "Date" : "10-08-2019"
        },
        {
            "id" : "3",
            "name": " auto expo",
            "description" : "lorem ipsum",
            "Date" : "10-08-2019"
        },
        {
            "id" : "3",
            "name": " auto expo",
            "description" : "lorem ipsum",
            "Date" : "10-08-2019"
        },
    ]
    res.json(events)
})



apiRoutes.get('/special', (req:express.Request, res:express.Response)=> {
    let specialEvents=[
        {
        "id" : "3",
        "name": " auto expo",
        "description" : "lorem ipsum",
        "Date" : "10-08-2019"
        },
        {
            "id" : "3",
            "name": " auto expo",
            "description" : "lorem ipsum",
            "Date" : "10-08-2019"
        },
        {
            "id" : "3",
            "name": " auto expo",
            "description" : "lorem ipsum",
            "Date" : "10-08-2019"
        },
        {
            "id" : "3",
            "name": " auto expo",
            "description" : "lorem ipsum",
            "Date" : "10-08-2019"
        },
        {
            "id" : "3",
            "name": " auto expo",
            "description" : "lorem ipsum",
            "Date" : "10-08-2019"
        },
        {
            "id" : "3",
            "name": " auto expo",
            "description" : "lorem ipsum",
            "Date" : "10-08-2019"
        },
        {
            "id" : "3",
            "name": " auto expo",
            "description" : "lorem ipsum",
            "Date" : "10-08-2019"
        },
    ]
    res.json(specialEvents)
})