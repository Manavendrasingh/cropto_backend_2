import express from 'express'
import FetchData from './FetchData.js';
import dbConnect from './dbConnect.js';
import cropto_route from './Router/Cropto.Route.js';
import Data from './Store_data_mongoDB/Data_store.js';

 

const app_server = express();
app_server.use("/",cropto_route);

dbConnect().then(()=>{
    console.log("database connected successfully")
    try{
        app_server.listen(process.env.PORT,()=>{
            console.log(`server run at http://localhost:${process.env.PORT}`);

        });
    }catch(error){console.log(error.message)}
}).catch(()=>{
    console.log("database is  not connected successfully");
})
 
setInterval(async()=>{
    Data();
},5000)
   





