import express from 'express';
import { UserSignupServices } from '../services/userServices';

export class userSignupController{
    public async registerUser(req:express.Request, res:express.Response){
        let result = await UserSignupServices.registerUser(req,res);
        res.json(result);
    }
    public async loginUser(req:express.Request, res: express.Response){
        let result = await UserSignupServices.loginUser(req, res);
        res.json(result);
    }
}