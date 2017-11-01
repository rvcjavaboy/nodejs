var express=require('express');
var fs=require('fs');
var app=express();

app.use('/js',express.static('js'));
app.use('/style',express.static('style'));
app.get('/Calc',function(request,response){
  fs.createReadStream(__dirname+'/Calc.html').pipe(response);



});
app.listen(3000);
