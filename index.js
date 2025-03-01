const connect = require("connect");
const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const app = connect();

// To view the Web page, open the output window at top
// . right in a new tab and go to [root-url]/index.html
// . in my original example, it's https://middleware-making--lbouthillier.repl.co/index.html 

// Add a middleware request handler here that will add
//  an 'image' property to the request object if the
//  URL ends in .jpg. Its value can be anything you like..
//  We'll only be checking for its existence, so the value 
//   doesn't matter, as long as it's 'truthy'
// Don't forget to call next() when your middleware is 
//  done.  
// We use req.image in the following request handler 
//  to log if the requested asset is an image.  
// The goal here is to have you create middleware,
//  and see how middleware can access (and modify) the
//  request and/or response objects for use later in the
//  middleware chain.




app.use((req, res) => {
  // parse the URL into its component parts
  const parsedUrl = new url.URL(req.url, `http://${req.headers.host}`);
	const { pathname, search } = parsedUrl
	const absolute_path_to_file = path.join(process.cwd(), 'htdocs', pathname);

	fs.readFile(absolute_path_to_file, (err, data) => {
		  if (err) {
	      console.log(err);
	      if (err.code == 'ENOENT'){
	        // file does not exist - we should return a 404 status code
					console.log('404 error getting ' + pathname);
					res.writeHead(404);
					res.end('404: Page Not Found!');
	      } else if (err.code == 'EISDIR'){
	        // this is actually a directory - we should create a directory listing
					console.log('directory listing ' + pathname);
					fs.readdir(absolute_path_to_file, (err, files)=>{
						if (err) {
							res.writeHead(500);
							res.end('Server Error 500');
						}
						let s = '<b>Directory Listing</b><br>';
						files.forEach((i)=>{
							s += (i + "<br>");
						});
						res.writeHead(200);
						res.end(s, 'utf8');
					});
	      }
	    } else {
		    // If we get to here, 'data' should contain the contents of the file
				res.writeHead(200);
				res.end(data, 'binary', ()=>{
					console.log((req.image ? 'Image ' : '' ) + "file delivered: " + pathname);
				});
		}
	});

});

var server = http.createServer(app);

var port = 3000;
server.listen(port, () => {
  console.log("Listening on " + port);
});
