import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { userModel } from '../model/userModel';


export class UserSignupServices{
    public static async registerUser(req:express.Request, res: express.Response){
        try{
            let encryptedPassword = await bcrypt.hash(req.body.password, 1);
            req.body.password = encryptedPassword;
            let newUser = new userModel(req.body);
            await newUser.save()
            return newUser;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async loginUser(req:express.Request, res: express.Response){
        try{
            let user:any = await userModel.findOne({email: req.body.email}).exec();
            if(user){
                let passwordMatch = await bcrypt.compare(req.body.password, user.password)
                if(passwordMatch){
                    let options:jwt.SignOptions ={expiresIn : "4h"};
                    let payload= {"email": user.email}
                    let token = await jwt.sign(payload, "secret", options);
                    return{token}
                }else{
                    return "Invalid Password!!";
                }
            }else{
                return "Invalid Email!";
            }
        }
        catch(err){
            console.log(err);
            return err
        }
    }
}