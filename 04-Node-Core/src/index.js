console.log("Program Started");

const math = require("./math");
console.log("math module =", math);

const fileOperations = require("./fileSystem");

console.log("Addition:", math.add(10, 5));
console.log("Subtraction:", math.subtract(20, 8));

fileOperations.writeData();
fileOperations.readData();