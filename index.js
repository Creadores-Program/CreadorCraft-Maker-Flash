const prefix = "[CreadorCraft Maker Flash] ";
console.info(prefix+"CreadorCraft Maker Flash by Creadores Program ©2024");
console.info(prefix+"Loading Libraries...");
try{
  const { execSync } = require("child_process");
  let rute = __dirname.replaceAll("\\", "/")+"/";
  execSync("npm install", { stdio: "inherit", cwd: rute });
  var core = require('@actions/core');
  var github = require('@actions/github');
  var fs = require("fs");
}catch(error){
  console.error(error.stack || error.message);
  core.setFailed(error.stack || error.message);
}
console.info(prefix+"Done!");
console.info(prefix+"Creating CreatorCraft Game...");
var dirGame = core.getInput("pathSWF");
var dirJS = core.getInput("path");
var elementID = core.getInput("elementID");
try{
  fs.readFile(__dirname.replaceAll("\\", "/")+"/org/CreadoresProgram/CreadorCraftMaker/Flash/script.js", "utf-8", function(err, data){
    if(err){
      throw err;
    }
    fs.writeFile(dirJS+"/main.js", data.replaceAll("{elementID}", elementID).replaceAll("{FileSWF}", dirGame), 'utf8', (err2) => { 
      if (err2) { 
        console.error(prefix+'Convert Fail!');
        throw err2;
      }
      console.info(prefix+'Convert Correctly!'); 
    });
  });
}catch(error){
    console.error(error.message);
    core.setFailed(error.message);
}
