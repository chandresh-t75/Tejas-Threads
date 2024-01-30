import mongoose from "mongoose"

let isConnected=false;
export const connectToDB=async()=>{
    mongoose.set('strictQuery',true);
    if(!process.env.MONGODB_URL) return console.log('Mongodb url not found');
    if(isConnected)return console.log('Already connected to mongodb');

    try {
        await mongoose.connect(process.env.MONGODB_URL);

        isConnected=true;
        console.log('Connected to MogoDB');
    } catch (error) {
        console.log(error);
    }
}