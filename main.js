const http = require("http")
const url = require("url")
const fs = require("fs")
const query = require("querystring")
const module1 = require("./module")

processdata = function(req,resp) {
	d = url.parse(req.url);
	console.log(d);
	switch(d.pathname){
		case "/":
			resp.writeHead(200,{"Content-Type":"text/html"});
			fs.readFile("form.html",function(error,data){
				if(error) console.log("error occured");
				else resp.end(data);
			});
			break;
		case "/calulate":
			resp.writeHead(200,{"Content-Type":"text/html"});
			data = query.parse(d.query);
			switch(data.operation){
				case "add":
					resp.write(data.num1 + " + " + data.num2 + " = ");
					resp.end(""+module1.add(data.num1,data.num2)+module1.fib(data.num1));
					break;
				case "sub":
					resp.write(data.num1 + " - " + data.num2 + " = ");
					resp.end(""+module1.sub(data.num1,data.num2));
					break;
				case "mul":
					resp.write(data.num1 + " * " + data.num2 + " = ");
					resp.end(""+module1.mul(data.num1,data.num2));
					break;
				case "div":
					resp.write(data.num1 + " / " + data.num2 + " = ");
					resp.end(""+module1.div(data.num1,data.num2));
					break;
			}
			break;
		default:
			resp.writeHead(404,{"Content-Type":"text/html"});
			resp.end("page not found");
			break;
	}
}

http.createServer(processdata).listen(1337);
console.log("Server running on http://localhost:1337/ ")