let fs = require("fs");
let path = require("path");

function treeFn(dirPath) {
    // console.log("Tree command impelmented for ", dirPath);
    if (dirPath == undefined) {
        treeHelper(process.cwd(),"");
        return;
    }
    else {
        let doesexist = fs.existsSync(dirPath);
        if (doesexist) {
             treeHelper(dirPath,"");
        } else {
            console.log("Kindly enter the correct path");
            return;
        }

    }
   
}

function treeHelper(dirPath,indent){
    // is file or folder
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile){
        let FileName = path.basename(dirPath);
        console.log(indent+ "|----" + FileName);
    }
    else{
         let childNames =fs.readdirSync(dirPath);
         let dirName = path.basename(dirPath);
         console.log(indent+"--->" + dirName)
         for(let i =0 ; i<childNames.length ; i++){
            let childpath = path.join(dirPath,childNames[i]);
            treeHelper(childpath,indent+ "\t");
         }
    }
}

module.exports = {
    treeKey : treeFn 
}