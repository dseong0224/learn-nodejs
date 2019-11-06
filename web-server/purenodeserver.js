var http = require('http');
var  url = require('url');

function handler(req,res){

  var  parsedUrl = url.parse(req.url, true);
  // console.log("url: ", parsedUrl);

  if(parsedUrl.pathname === '/'){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.write('Hello, I am a webserver!');
    return res.end(); 
  } else if (parsedUrl.pathname === '/time'){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.write(new Date().toString());
    return res.end(); 
  } else if (parsedUrl.pathname === '/hello'){
    const name = parsedUrl.query.name;
    if(!name){
      res.writeHead(404, {'Content-type':'text/plain'});
    return res.end(); 
    }
    res.writeHead(200,{'Content-type':'text/plain'});
    res.write(`Hello ${name}`);
    return res.end(); 
  } else if(parsedUrl.pathname.startsWith('/user/')){
    const regex = new RegExp('\/user\/(.+)');
    const matches = regex.exec(parsedUrl.pathname);
    if(!matches || !matches[1]){
      res.writeHead(404, {'Content-type':'text/plain'});
    return res.end(); 
    }
    res.writeHead(200,{'Content-type':'text/plain'});
    res.write(`Userprofile of ${matches[1]}`);
    return res.end(); 
  } else {
    res.writeHead(404, {'Content-type':'text/plain'});
    return res.end(); 
  }
}

const server =  http.createServer(handler);

server.listen(3000);