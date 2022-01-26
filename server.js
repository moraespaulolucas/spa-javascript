// http module allows Node.js to use the HTTP and create a Web Server
const http = require("http");
// file system module allows the server to work with static files
const fs = require("fs");
// path module allows the server to work with directories and file paths
const path = require("path");

// MIME-types contains the types of documents accepted by the server
const mimeTypes = require("./mimeTypes");
// port receives a environment variable or a specific port for the server listen to
const port = process.env.PORT || 3000;

// on creating the server, req is the client request and res is the server response
http
	.createServer((req, res) => {
		// filePath will receive the path of every file transferred by the server at the request
		let filePath = "." + req.url;
		// the if statement makes sure that the first requested file will be index.html
		if (filePath === "./") {
			filePath = "./index.html";
		}

		// path.extname extracts the file extension of filePath
		let extname = String(path.extname(filePath)).toLowerCase();
		// contentType receives the extname MIME-type if it is declared or a generic binary MIME-type
		let contentType = mimeTypes[extname] || "application/octet-stream";

		// fs.readFile tries to read the filePath content
		fs.readFile(filePath, (error, content) => {
			// if there is an error
			if (error) {
				// and it is an invalid requested url
				if (error.code === "ENOENT") {
					res.writeHead(404, { "Content-Type": "text/html" });
					res.end("Not found", "utf-8");
				}
				// and it is a server problem
				else {
					res.writeHead(500, { "Content-Type": "text/html" });
					res.end("Server error", "utf-8");
				}
			}
			// if all goes well, it sends the filePath content to the client
			else {
				res.writeHead(200, { "Content-type": contentType });
				res.end(content, "utf-8");
			}
		});
	}) // server listening to the right port and logging a message on the console
	.listen(port, () => console.log(`Server running on port ${port}`));
