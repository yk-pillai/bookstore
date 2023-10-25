import express, { request } from "express";
import { PORT, mongoDbUrl } from "./config.js";
import mongoose from "mongoose";
import bookRoutes from './routes/bookRoutes.js'
import cors from 'cors'


const app = express();

// middleware for parsing request body
app.use(express.json())

//middleware for handling cors
// app.use(cors()) //allows all origins

//allow custom origins
app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    allowedHeaders: ["Content-Type"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.get('/', (request, response)=>{
  return response.status(234).send('Welcome');
});

// app.use('/', bookRoutes)//use this if routes does not have a pattern url
app.use('/books', bookRoutes)// use this if all the routes have /books as base param

mongoose
.connect(mongoDbUrl)
.then(()=>{
  console.log("Connected to DB")
  app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
  });

})
.catch((error)=>{
  console.log(error)
})

