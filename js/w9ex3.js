
function showOutput(){
    let number1 = document.querySelector("#text-box-1").value
    let number2 = document.querySelector("#text-box-2").value
    let mult = number1 * number2
    document.querySelector('#output').textContent = "The multiplication of " + 
                            number1 + " and " + number2 + " is " + mult
}

document.querySelector('#btn').addEventListener("click", showOutput)