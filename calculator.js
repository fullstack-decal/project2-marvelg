//Check out calculator_hints.js for hints if you're stuck

let operator_list = ["+", "-", "x", "÷"]
let total = 0;
let strbuffer = null;
let operator = null;
let first_num = true


function calculations() {
    total = parseInt(total)
    if (operator === "+") {
        total += parseInt(strbuffer)
    }

    else if (operator === "-") {
        total -= parseInt(strbuffer)
    }

    else if (operator === "x") {
        total *= parseInt(strbuffer)
    }

    else if (operator === "÷") {
        total /= parseInt(strbuffer)
    }
    
    operator = null
}


let buttons = document.querySelectorAll(".buttons")
let resultScreen = document.querySelector(".result-screen")
let lastButtons = document.querySelectorAll(".last-buttons")
let cButton = document.getElementById('c-button')
// let backspace = document.getElementById('backspace')

for (item of buttons) {
    item.addEventListener("click", (event) => {
        if (event.target.innerHTML === '='){
            if (operator) {
                calculations(operator)
                
            }
            resultScreen.innerHTML = total
            operator = null
            strbuffer = null
        }
        else if (event.target.innerHTML === "←"){
            if (strbuffer !== null) {
                strbuffer = strbuffer.slice(0, -1);
                resultScreen.innerHTML = strbuffer;
            } else if(first_num) {
                total = total.slice(0, -1);
                resultScreen.innerHTML = total;
            }
            // resultScreen.innerHTML = operator
        }
        else if (operator_list.includes(event.target.innerHTML)){
            operator = event.target.innerHTML;
            first_num = false;
            // resultScreen.innerHTML = operator
        }
        else {
            if (operator === null & first_num) {
                if (total === 0) {
                    total = event.target.innerHTML;
                }
                else {
                    total += event.target.innerHTML;
                }
                
                resultScreen.innerHTML = total;
            }
            else {
                makesNumber(event.target.innerHTML)
                // strbuffer = event.target.innerHTML
                resultScreen.innerHTML = strbuffer;
                first_num = false;
            }
            
        }

        console.log('Total', total)
        console.log('strbuffer', strbuffer)

    })
}

cButton.addEventListener('click', () => {
    total = 0
    strbuffer = null
    operator = null
    first_num = true
    resultScreen.innerHTML = total
})


function makesNumber(value) {
    if (strbuffer === null ) {
        strbuffer = value;
    } else {
        strbuffer += value
    }
}


// || operator !== null

