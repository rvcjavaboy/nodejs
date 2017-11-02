var http=require('http');

var server=http.createServer(function(req,res){

res.writeHead(200,{'Content-type':'application/json'});
  var json={
    id:'1',
    name:'Danny'

  }
  res.write(JSON.stringify(json));
  res.end();


});
server.listen(3000);
