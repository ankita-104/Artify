import express from 'express';
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js'

// this helps to pull our environment variables from .env-->
dotenv.config();

//express for middleware and routing-->
const app = express();

app.use(cors());
app.use(express.json({limit:'50mb'}));

//api endpoints-->
app.use('/api/v1/post', postRoutes);

app.use('/api/v1/dalle', dalleRoutes);
//api endpoint creation ends


// main route set up-->
app.get('/', async(req,res)=>{
    res.send("Hello! we are in.");
})

const startServer = async()=>{
    try{
        //MONGODB_URL is a secret Mongodb Atlas url stored in the .env
        connectDB(process.env.MONGODB_URL);
        app.listen(8090,() => console.log('server has been started on  port http://localhost:8090'))
    }
    catch(error){
        console.log(error);
    }

   
}
startServer();