console.log("1) Start");

setTimeout(() => console.log("4) setTimeout (macrotask)"), 0);

Promise.resolve().then(() => console.log("3) Promise.then (microtask)"));

console.log("2) End");