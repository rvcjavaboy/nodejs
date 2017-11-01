var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){


if(req.url==="/"){
    fs.createReadStream(__dirname+'/pages/index.html').pipe(res);
}if(req.url==="/contact"){
    fs.createReadStream(__dirname+'/pages/contact.html').pipe(res);
}if(req.url==="/about"){
    fs.createReadStream(__dirname+'/pages/about.html').pipe(res);
}

});
server.listen(3000);
