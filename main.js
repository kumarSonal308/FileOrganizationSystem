
let inputArray = process.argv.slice(2);
let fs = require("fs");
let path = require("path");
let helpobj = require("./commands/help");
let organizeobj = require("./commands/organize");
let treeobj = require("./commands/tree");

let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
     Images : ['png','jpeg'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
// console.log(inputArray);

// node main.js tree "directoryPath"
// node main.js organize " directoryPath"
// node mian.js help

let command = inputArray[0];
switch (command) {
    case "tree":
        treeobj.treeKey(inputArray[1]);
        break;

    case "organize":
        organizeobj.organizeKey(inputArray[1]);
        break;

    case "help":
        helpobj.helpkey();
        break;

    default:
        console.log("Please input Right Command");

}



