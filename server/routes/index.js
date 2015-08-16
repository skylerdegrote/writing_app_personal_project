/**
 * Created by Skyler DeGrote on 8/15/15.
 */

//ROUTING FILE

var express = require("express");
var router = express.Router();
var path = require("path");
var namesData = require("../public/data/names.json");
var hairData = require("../public/data/hair.json");




router.get("/names", function(request, response){
    response.json(namesData);
});
router.get("/hair", function(request, response){
    response.json(hairData);
});
router.get("/*", function (request, response){
    var file = request.params[0] || "views/index.html";
    response.sendFile(path.join(__dirname, "../public", file));
});
module.exports = router;