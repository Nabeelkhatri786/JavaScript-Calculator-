let count = document.querySelectorAll(".even");
let countNum = document.querySelectorAll(".count-Num");
let errorMsg = document.querySelectorAll(".error");

function addCount(){
   let countVal = count[0].value;
   printMsg(countVal, "+");
    
}

function minusCount(){
    let countVal = count[0].value;
    printMsg(countVal, "-");
     
 }

 function clearCal(){
    let countVal = count[0].value;
    printMsg(countVal, "");
 }



 function printMsg(formVal , operator){
    if(isNaN(formVal)) {

       errorMsg[0].innerHTML = "Count value must be a number.";
      

    }
    else if(operator === "+"){
       countNum[0].innerHTML = Number(countNum[0].innerHTML) + Number(formVal);
       errorMsg[0].innerHTML = ""
    }
    else if(operator === "-"){
        countNum[0].innerHTML = Number(countNum[0].innerHTML) - Number(formVal);
        errorMsg[0].innerHTML = ""
     }
    
     else{
        countNum[0].innerHTML = "";
        
     }
 }


