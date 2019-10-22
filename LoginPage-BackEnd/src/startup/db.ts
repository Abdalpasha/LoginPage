import mongoose from 'mongoose';

export class UserDb{
    private static connectionString: string ='mongodb+srv://abdalpasha:abdal123@abdal-s91co.mongodb.net/SignUp?retryWrites=true&w=majority'
    public static connectDB(){
        mongoose.connect(this.connectionString,{useNewUrlParser:true})
        .then(()=> {console.log("DB connection successfull");
        })
        .catch((err)=>{console.log("DB connection failled");console.log(err);
        })
    }
}