var http=require('http');
var url = require('url');
var server=http.createServer(function(req,res){

  var parameters = url.parse(req.url, true);
  var fname=parameters.msg;

console.log(parameters.query.id)
var json={
  msg:"Server ->> \t"+parameters.query.msg
}
res.writeHead(200,{'Content-type':'text/plain'})
res.write(JSON.stringify(json));
res.end();
});
server.listen(3000);
