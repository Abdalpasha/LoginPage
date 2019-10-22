import express from 'express';
import jwt from 'jsonwebtoken';

export class auth{
    public static async authenticate(req:any, res: express.Response, next: any){
        let token = req.headers.authorization.split(' ')[1];
        if(token== null){
            return res.json(" Access Dinied")
        }try{
            let decodedData = await jwt.verify(token, "secret");
            req.user = decodedData;
            next();
        }
        catch(err){
            console.log(err);
            return res.json(err)            
        }
    }
}