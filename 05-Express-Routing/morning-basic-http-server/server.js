const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);

  if (pathname === "/") {
    res.end("This is my home Page");
  } 
  else if (pathname === "/about") {
    res.end("This is my about Page");
  } 
  else if (pathname === "/api/user") {
    res.end(JSON.stringify({ name: "Raghavendra", role: "Backend Trainee" }));
  } 
  else {
    res.statusCode = 404;
    res.end("404 Route Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});