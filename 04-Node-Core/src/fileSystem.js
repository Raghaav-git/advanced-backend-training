const fs = require('fs');

function writeData() {
    fs.writeFileSync('data.txt', 'Learning Node.js File System Module');
    console.log("Data written successfully.");
}

function readData() {
    const data = fs.readFileSync('data.txt', 'utf8');
    console.log("File Content:", data);
}

module.exports = { writeData, readData };