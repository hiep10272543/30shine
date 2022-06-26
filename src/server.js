// file chạy server
import express from 'express'
import bodyParser from 'body-parser'
import viewEngine from './config/viewEngine'
import initWebRoutes from './route/web'
require('dotenv').config()

let app = express();

// config app 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`be nodejs is running on the port: ${port}`);
}
);
viewEngine(app);
initWebRoutes(app);
