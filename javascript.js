    document.querySelector('.button-container').addEventListener('click', function(event) {
        console.log(event.target.textContent); 
       
    });
    

var inputElement = document.getElementById('myInput');
var buttons = document.querySelectorAll('.button-container button');
var currentValue = '';
var operator = '';
var result = 0;

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var buttonText = button.textContent;

        if(buttonText){
            currentValue += buttonText;
            inputElement.value = currentValue;
            
        } else if (buttonText === '+' || buttonText === '-'|| buttonText === '*' || buttonText === '/' ){
            operator = buttonText;
            result = currentValue;
            currentValue = '';
        } else if(buttonText === '='){
            if (currentValue !== ''){
                switch(operator){
                case '+':
                    result += currentValue;
                    break;
                case '-':
                    result -= currentValue;
                    break;
                case '*':
                    result *= currentValue;
                    break;
                case '/':
                    result /= currentValue;
                    break;
                }
                
                inputElement.value = result;
                currentValue = result;
                console.log(currentValue)
                console.log(result)
                console.log(operator);
            }
        }
        else if (buttonText === 'AC') {
            inputElement.value = ''; 
            operator = '';
            result = 0;
            currentValue = '';
        } 
        
    });
});
