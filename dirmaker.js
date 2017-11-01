var fs=require('fs');


// fs.unlink('demo');    remove file


//fs.mkdir('dir');     create Dir
//fs.rmdir('dir');      remove dir

//fs.mkdirSync('dir');  //  create sync dir
// fs.rmdirSync('dir');


/*
fs.mkdir('dir',function(){

  var a=  fs.readFileSync('./dump.txt','utf8');
  fs.writeFile('./dir/d.txt',a)  ;
});

*/


 fs.unlink('./dir/d.txt',function(){
  fs.rmdir('dir');       //remove dir with file
 });
