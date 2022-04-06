import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from "mongoose";
import 'dotenv/config';
import eventsRouter from './routes/events.js';


const app = express();

app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());
app.use('/events', eventsRouter);

console.log(process.env.MONGODB_CONNECTION_STRING)
const CONNECT_URL = process.env.MONGODB_CONNECTION_STRING;
const PORT = process.env.PORT || 5000;

try {
    await mongoose.connect(CONNECT_URL, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
} catch (err) {
    console.log("Error connecting to MongoDB");
}
