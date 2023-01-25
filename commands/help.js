// Help
let fs = require("fs");
let path = require("path");

function helpFn() {
    console.log(
        `       LIST OF ALL  THE COMMANDS
         node main.js tree "directoryPath"
         node main.js organize "directoryPath"
         node main.js help
         `
    )
}
module.exports = {
    helpkey : helpFn 
}