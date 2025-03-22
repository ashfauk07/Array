var msg=document.getElementById("message");
var num=document.getElementById("number");
function arr(){
    const input=number.value;
    num=input.split(",");
}
  
function value(text){
    msg.innerText=text;
}
  
function sort(){
    arr();
    value("Sorted Values: "+num.sort((num1,num2)=>num1-num2));
}
  
function reverse(){
    arr();
    value("Reverse value: "+num.reverse());
}
  
function even(){
    arr();
    value("Even Numbers: "+num.filter((num1)=>num1%2===0));
}
  
function odd(){
    arr();
    value("Odd Numbers: "+num.filter((num1)=>num1%2!=0));
}
  

  
