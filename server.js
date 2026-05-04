// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(
//     JSON.stringify({
//       message: "Hello From your First Server with the help of claude",
//     }),
//   );
// });

// server.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });

// PHASE 2

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("Method:", req.method);
//   console.log("URL:", req.url);
//   console.log("Headers:", req.headers);

//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(JSON.stringify({ message: "Check your terminal!" }));
// });

// server.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });

// PHASE 3
// const http = require("http");
// const server = http.createServer((req, res) => {
//   const { method, url } = req;
//   res.setHeader("Content-Type", "application/json");
//   if (method === "GET" && url === "/") {
//     res.writeHead(200);
//     res.end(JSON.stringify({ message: "Welcome to Home page" }));
//   } else if (method === "GET" && url === "/users") {
//     res.writeHead(200);
//     res.end(
//       JSON.stringify({
//         users: ["Malahim", "Abdulrehman", "Osama", "Bin laden"],
//       }),
//     );
//   } else {
//     res.writeHead(404);
//     res.end(JSON.stringify);
//   }
// });

// server.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });

// PHASE 4
const http = require("http");
const server = http.createServer((req, res) => {
  const { method, url } = req;
  if (method === "POST" && url === "/users") {
    let body = "";
    // Collects Chunks as they arrive
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const parsed = JSON.parse(body);
      console.log("Recived", parsed);
      res.writeHead(201);
      res.end(JSON.stringify({ message: "User Created", user: parsed }));
    });
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Route Not Found" }));
  }
});
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
