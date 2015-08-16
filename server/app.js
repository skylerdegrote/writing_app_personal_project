/**
 * Created by Skyler DeGrote on 8/15/15.
 */


//SERVER SIDE APP.JS


var express = require("express");
var path = require("path");
var index = require("./routes/index.js");
var app = express();
app.set("port", (process.env.PORT || 5000));
app.use("/", index);
app.listen(app.get("port"), function(){
    console.log("Listening to port: "+ app.get("port"));
});