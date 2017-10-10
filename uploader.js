#!/usr/local/bin/node

//Required Packages
var fs = require("fs");
var path = require("path");

//Import Functions

var uploadToEs = require("./actions/upload-es");
var dataFormatterForBulk = require("./actions/data-formatter-es");

//Get Data from the command line

//Usage `node uploader.js filename.json indexname doctype`

function main() {
  var fileName = process.argv[2];
  var base_url = process.argv[3];
  var index = process.argv[4];
  var type = process.argv[5];

  if(!fileName || !index || !type ){
    console.log("Usage: node uploader.js <filename(json format)> <base_url> <index_of_es> <doctype_of_index>");
    return;
  }

  //Reads the File and formats the data from file into the bulk format

  fs.readFile(path.join(__dirname, fileName), function(err, data) {
    var str = dataFormatterForBulk(JSON.parse(data), index, type);
    uploadToEs(str,base_url, index, type);
  });

}

main();
