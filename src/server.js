import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viweEngine";
import initWebRoutes from './route/web';
import connectDB from './config/connectDB';
import cors from "cors";
require('dotenv').config();

let app = express();

// app.use(cors({ origin: ['http://localhost'] }));
app.use(cors({ origin: true, credentials: true }));
// app.use(cors({ origin: '*' }));
//config app
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 6969;
//Port == undefined => Port = 6969

app.listen(port, () => {
    // callback
    console.log("Backend Nodejs is running on the port: " + port)
})
