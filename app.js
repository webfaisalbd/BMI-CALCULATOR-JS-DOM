const weightCalculate= document.getElementById('weightCalculate');
const heightCalculate= document.getElementById('heightCalculate');
const calculateBtn=document.getElementById('calculateBtn');
const resetBtn=document.getElementById('resetBtn');
const output=document.getElementById('output');
const message=document.getElementById('message');
function calculateBMI(){
    let height,weight,bmi;
    weight=Number(weightCalculate.value);
    height=Number(heightCalculate.value);
    bmi=weight/(height*0.0254*height*0.0254);
    output.textContent=bmi.toFixed(2);
    let report= showMessage(bmi);
    message.textContent=report;
}

function showMessage(bmiValue){
    if(bmiValue<16){
        return "You are Thin"
    }
    else if(bmiValue >=16 && bmiValue <=17){
        return "You are moderate thin"
    }
    else if(bmiValue >17 && bmiValue <=18.5){
        return "You are mid thin"
    }
    else if(bmiValue > 18.5 && bmiValue <=25){
        return "You are normal"
    }
    else if(bmiValue > 25){
        return "You are overweight"
    }
}

function eventHandler(){
    if(Number(heightCalculate.value) && Number(weightCalculate.value)){
        calculateBMI();
    }
    else{
        alert('please provide valid inputs');
        reset();
    }
}

function reset(){
    weightCalculate.value="";
    heightCalculate.value="";
    output.textContent="";
    message.textContent="";
}
calculateBtn.addEventListener('click',eventHandler);
resetBtn.addEventListener('click',reset)

