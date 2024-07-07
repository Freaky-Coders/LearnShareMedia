import mongoose from "mongoose";

type ConnectionObject = {
    isConnection?: number
}

const connection: ConnectionObject = {};

async function dbConnect(){
    if(connection.isConnection){
        console.log("Already Database Connected");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URI || '');
        connection.isConnection = db.connections[0].readyState;
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log('Database Connection Failed', error);
        process.exit();
    }
}


export default dbConnect;