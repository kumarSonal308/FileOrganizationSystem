let fs = require("fs");
let path = require("path");

function organizeFn(dirPath) {
    //console.log("Organize command impelmented for ", dirPath);
   // 1.Input ->directory path given
   let destPath ;

   if (dirPath == undefined) {
       destPath = process.cwd();
       return;
   }
   else {
       let doesexist = fs.existsSync(dirPath);
       if (doesexist) {

           // 2.create ->organized_files ->directory
            destPath = path.join(dirPath, "organized_files");

           if (fs.existsSync(destPath) == false) {
               fs.mkdirSync(destPath);
           }

       } else {
           console.log("Kindly enter the correct path");
           return;
       }

   }
   organizeHelper(dirPath,destPath);
    
}

function organizeHelper(srcPath , destPath){
   // 3.identify categories of all files present in that input directory->
   let childNames = fs.readdirSync(srcPath);
   
   for(let i =0 ; i<childNames.length ; i++){
       // console.log(childNames[i]);
       // check whether it is a file
       let childAdress = path.join(srcPath,childNames[i]);
       let isFile = fs.lstatSync(childAdress).isFile();
       if(isFile){
           let catogeory = getCategory(childNames[i]); 
           // console.log(catogeory);
           // console.log(childNames[i], " belongs to -->" , catogeory);
           // 4. copy/cut files to that organized directory insode of any catogeory folder
            sendfiles(childAdress,destPath,catogeory);

           }

     }

}

function sendfiles(srcFilePath, dest, catogeory){
    let catogeoryPath = path.join(dest,catogeory);
    if(fs.existsSync(catogeoryPath) == false){
       fs.mkdirSync(catogeoryPath);
    }
    let filename = path.basename(srcFilePath);
    let destFilePath = path.join(catogeoryPath,filename);
    fs.copyFileSync(srcFilePath,destFilePath) ;
    fs.unlinkSync(srcFilePath);
   
}
function getCategory(name){

   let ext = path.extname(name);
   ext = ext.slice(1);
   for(let type in types){
       let cType = types[type];
       for( let i =0 ; i<cType.length ; i++){
           if(cType[i] == ext){
               return type;
           }
       }
   }
   return "Others";
}

module.exports = {
    organizeKey : organizeFn 
}