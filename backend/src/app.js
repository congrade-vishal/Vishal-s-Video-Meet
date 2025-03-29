// import env from 'dotenv';
// env.config();
// import express from 'express';
// import {createServer} from 'node:http';
// import { Server } from 'socket.io';
// import {connectToSocket} from './Controllers/socketManager.js';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import userRoutes from './Routes/users.routes.js';

// const PORT = process.env.PORT || 4000;
// const uri = process.env.MONGO_URL;
// const app = express();
// const server = createServer(app);
// const io = connectToSocket(server);

// app.use(cors());
// app.use(express.json({limit: "40kb"}));
// app.use(express.urlencoded({limit: "40kb", extended: true}));

// app.use("/api/v1/users", userRoutes);

// app.get("/home", (req, res)=>{
//     return res.json({"Hello": "World"});
// });

// const start = async()=>{
     
//     server.listen(PORT, () => {
//         console.log(`App started! ${PORT}`);
//         mongoose.connect(uri);
//         console.log("DB connected successfully!");
        
//       });
// }




// start();



import env from 'dotenv';
env.config();
import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./Routes/users.routes.js";

const app = express();
const server = createServer(app);
const uri = process.env.MONGO_URL;
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
    app.set("mongo_user")
    const connectionDb = await mongoose.connect(uri);

    console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`);
    server.listen(app.get("port"), () => {
        console.log("LISTENIN ON PORT 8000");
    });



};



start();