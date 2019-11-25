function pushBtn(value) {            
    let arithmetic;
    let pushed=value.innerHTML;
    $(function () {
        arithmetic = $('#inputLabel').html();
    });
    if (pushed == '='){
        if(isNaN(arithmetic[arithmetic.length-1])==false) {   
            calculate(arithmetic);
            if(pushed!="="){
                inputLabel.innerHTML = "0";
            }
        }
        else{
            alert("Syntax Err");
            $('#inputLabel').html("0");
        }
    }
    else if (pushed == 'AC'){
        inputLabel.innerHTML = '0';
    }
    else{
        if(inputLabel.innerHTML == '0'){
            inputLabel.innerHTML = pushed;
        }
        else { 
            inputLabel.innerHTML += pushed;
        }
    }
}
function isWholeNumber(num){
    return num === Math.round(num);
}
function calculate(expression){
    if(isWholeNumber(eval(expression))==false){
        $('#inputLabel').html(eval(expression).toFixed(2));
    }   
    else{
        $('#inputLabel').html(eval(expression));
    }
}
