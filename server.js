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
		// if the file requested by the url is not in the static folder, it's a url route and the content shown will be index.html
		if (!filePath.includes("./static/")) {
			// on this application, the server will no be responsible for routing, the router.js will
			// so every url settled by the user will get index.html as response
			filePath = "./index.html";
		}

		// path.extname extracts the file extension of filePath
		let extname = String(path.extname(filePath)).toLowerCase();
		// contentType receives the extname MIME-type if it is declared in mimeTypes.js or a generic binary MIME-type
		let contentType = mimeTypes[extname] || "application/octet-stream";

		// fs.readFile tries to read the filePath content
		fs.readFile(filePath, (error, content) => {
			// if there is an error on the file path not caught by the router.js
			if (error) {
				// it might be a server error
				res.writeHead(500, { "Content-Type": "text/html" });
				res.end("Server error", "utf-8");
			}
			// if all goes well, it sends the filePath content to the client
			else {
				res.writeHead(200, { "Content-type": contentType });
				res.end(content, "utf-8");
			}
			// HTTP response status codes:
			// 200 >> success
			// 404 >> not found
			// 500 >> internal server error
		});
	}) // server listening to the right port and logging a message on the console
	.listen(port, () => console.log(`Server running on port ${port}`));
