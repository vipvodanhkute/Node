const fs = require('fs');
var file = fs.readdirSync(__dirname);
var lstatSync = fs.lstatSync(__dirname+"/song1.txt").isDirectory();
var stat = fs.stat(__dirname+"/song1.txt",function(err,stats){
  console.log(stats)  
})
console.log(file)
console.log(lstatSync)