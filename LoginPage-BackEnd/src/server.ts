import express from 'express';
import cors from 'cors'
import bodyparser from 'body-parser';
import { UserDb } from './startup/db'
import { Route } from './startup/router';


class UserSignup{
  app:express.Application;
  PORT:number = 3000;
  constructor(){
    this.app= express();
    this.configBodyParser();
    UserDb.connectDB();
    this.app.listen(this.PORT,"localhost",()=>{
      console.log("server is configured on port:", this.PORT);
    })
    this.app.use(cors());
    Route.configRoutes(this.app);
  }
  configBodyParser(){
      this.app.use(bodyparser.json());
      this.app.use(bodyparser.urlencoded({extended: false}));
  }
}

const SignUp = new UserSignup();