import express, { application } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb'}));

mongoose.set('strictQuery', true)

{/** mongodb connect side  */}
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("connect to mongodb")
    }catch(error){
        console.log('error')
        throw error;
    }
}


mongoose.connection.on("disconnected", ()=> {
  console.log("Disconnectod to database")
});

mongoose.connection.on("connected", ()=> {
  console.log("connected to database")
})
{/** mongodb finish */}


app.get('/', async (req, res) => {
    res.status(200).json({
      message: 'Hello from DALL.E!',
    });
  });

 app.use('/api/v1/post', postRoutes);
 app.use('/api/v1/dalle', dalleRoutes);
  


app.listen(8080, ()=> {
    connect()
    console.log("connected sucsess")
});



