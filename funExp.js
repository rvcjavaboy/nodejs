
//Normal Funtion
function Call(){

  console.log('Caller');
}

Call();


//Function as expression


var temp=function(){
      console.log("anonymous function");
}

temp();


//function as parameter
function funcall(fun){

    fun();
}

funcall(temp);
