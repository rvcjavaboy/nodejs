var http=require('http');



var server=http.createServer(function(req,res){
      var json={
          name:'Ranjit',
          age:'21',
          clg:'Adcet'


      };
      res.writeHead(200,{'Content-type':'application/json'});
      res.write(JSON.stringify(json));

      res.end();


});

server.listen(3000);
