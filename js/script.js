function calc(){

var  result = null;
var firstNum = parseFloat(prompt("enter  first number"));
var  operator = prompt ("enter in operators");
var lastNum = parseFloat(prompt("enter last number"));

if(!isNaN(firstNum)===true  &&  !isNaN(lastNum===true)){

switch (operator) {
    case operator="*":
        result=== alert(firstNum*lastNum) 
        break;
   case operator="/":
        result=== alert(firstNum/lastNum) 
        break;    
   case operator="-":
       result===alert(firstNum-lastNum) 
       break; 
   case operator="+":
     result=== alert(firstNum+lastNum) 
     break;   
  case operator="%":
     result=== alert(firstNum%lastNum) 
     break;       
   default:
        alert("eror in invalid value")
        
}}
else{ 
    alert("error bad value")
}


}




/////////----sqr


function sqr(){
var space= "&nbsp";
var res = "*";
var br = "<br />"

for (var a =1; a<=20;  a++){


    document.write(br)

    for(var b =1; b<=20-a ;b++){
      
      document.write(res)
        
    }
   
    for(var c =1; c<=a; c++){
      document.write(res)
}
}
}



document.write(br+br+br)


function getPrimes(x,y){

  var y;
prime: for (var x; x<= y; x++) {
if(x === 0 || x === 1){
   continue;
}
for (var i = 2; i <= x; i++) {
   if(x % i  === 0 && x !== i){
      continue prime;
   }
}
document.write(x+br)
}
}

getPrimes(1,100)