const express = require("express");
const morgan = require("morgan");
const app = express();


async function server(mode){
    try {
        app.use(express.json())
        app.use(express.urlencoded({extended: true}))

        if(mode === "dev"){
            app.use(morgan("dev"))
        };

    } catch (error) {
        console.log("SERVER ERROR", error);
    }
    finally{

    }
}

module.exports = server;