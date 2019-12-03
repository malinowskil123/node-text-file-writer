const fs = require("fs");
const http = require("http");
const https = require("https");

let readTxtFilePath = "https://d1b10bmlvqabco.cloudfront.net/attach/jzx1f2uji5b2c/i1wq2u14lnc4h7/k3ab11pjnpyo/dictionary.txt";
let writeTxtFilePath = "/Users/lukaszmalinowski/work/cse-218/FinalProjectLMalinowski/src/input_data/"
const regex = new RegExp(/[^\\\/:*?"<>|\r\n]+$/)
let textFileName =  readTxtFilePath.match(regex);

let ssl = (readTxtFilePath.includes("https"))? https : http;
let writePath = fs.createWriteStream(writeTxtFilePath+textFileName);
writePath.on("error",function(err){
    console.log("Path Not Found "+writeTxtFilePath);
    writePath.end();
});
ssl.get(readTxtFilePath, function(res,err){
    if(err)console.log(err);
    res.pipe(writePath);
    console.log(`Successfully Written ${writeTxtFilePath+textFileName}`);
});
