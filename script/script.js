const form = document.querySelector('.input');
const buttons = document.querySelectorAll('input[type="button"]');

var num1 = 0;
var num2 = 0;
var operator = "";


function add(num1, num2)
{
    return num1 + num2;
}

function subtract(num1, num2)
{
    return num1 - num2;
}

function multiply(num1, num2)
{
    return num1 * num2;
}

function divide(num1, num2)
{
    return num1/num2;
}

function mod(num1, num2)
{
    return num1 % num2;
}

function operate(num1, num2, operator)
{   
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    switch (operator)
    {
        case "+":
            let sum = add(num1, num2);
            form.innerText = sum;
            break;
        case "-":
            let diff = subtract(num1, num2);
            form.innerText = diff;
            break;
        case "x":
            let prod = multiply(num1, num2);
            form.innerText = prod;
            break;
        case "/":
            let quot = divide(num1, num2);
            form.innerText = quot;
            break;
        case "%":
            let remainder = mod(num1, num2);
            form.innerText = remainder;
            break;
    }
}


buttons.forEach(button => {
    button.addEventListener("click", function(e)
    {
        switch(e.target.id)
        {
            case "one":
                form.innerText += "1";
                break;
            case "two":
                form.innerText += "2";
                break;
            case "three":
                form.innerText += "3";
                break;
            case "four":
                form.innerText += "4";
                break;
            case "five":
                form.innerText += "5";
                break;
            case "six":
                form.innerText += "6";
                break;
            case "seven":
                form.innerText += "7";
                break;
            case "eight":
                form.innerText += "8";
                break;
            case "nine":
                form.innerText += "9";
                break;
            case "zero":
                form.innerText += "0";
                break;
            case "div":
                num1 = form.innerText;
                form.innerText = "";
                operator = "/";
                break;
            case "mul":
                num1 = form.innerText;
                form.innerText = "";
                operator = "x";
                break;
            case "sub":
                num1 = form.innerText;
                form.innerText = "";
                operator = "-";
                break;
            case "plus":
                num1 = form.innerText;
                form.innerText = "";
                operator = "+";
                break;
            case "mod":
                num1 = form.innerText;
                form.innerText = "";
                operator = "%";
                break;
            case "sign":
                let num = parseInt(form.innerText);
                form.innerText = -1 * num;
                break;
            case "AC":
                form.innerText = "";
                num1 = 0;
                num2 = 0;
                break;
            case "dot":
                form.innerText += ".";
                break;
            case "equal":
                num2 = form.innerText;
                operate(num1, num2, operator);
                break;
        }
    });
})




