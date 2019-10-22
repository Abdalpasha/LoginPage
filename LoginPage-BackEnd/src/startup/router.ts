import express from 'express';
import { userSignupController } from '../controller/userController';
import { apiRoutes } from '../routes/apiRoutes';

export class Route{
    public static configRoutes(app:express.Application){
        app.get('/', (req:express.Request, res: express.Response)=>{
            res.status(200).json({"sucess":"server is up"});
        })
        let userControllerobj = new userSignupController
        app.post('/registerUser', userControllerobj.registerUser)
        app.post('/login', userControllerobj.loginUser);
        app.use('/api', apiRoutes)
    }
}