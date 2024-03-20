const form = document.getElementById('triangle-form');
const resultElement = document.getElementById('result');

function CalculateDecagon() {
    const A= parseFloat(form.elements['a'].value);

    if (!A) {
        alert('Fill the input area!');
    }else{
        const sqrt1 = Math.sqrt(5);
        const sqrt2 = Math.sqrt(5 + 2 *(sqrt1));
        const areaOfADecagon = 5/2  * sqrt2 * A**2;
        
    resultElement.innerHTML = `The Area Of A Decagon is ${areaOfADecagon.toFixed(2)}`
    }
}