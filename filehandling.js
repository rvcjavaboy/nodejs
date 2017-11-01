var fs=require('fs');

/*
var data=fs.readFileSync('./dump.txt','utf8');
console.log(data);

fs.writeFileSync('./writedump.txt',data);
*/

var data=fs.readFile('./writedump.txt','utf8',function(e,readme){
  //fs.writeFile('demo.txt',readme);
  console.log(readme);
});



console.log('asynch \n\n');
