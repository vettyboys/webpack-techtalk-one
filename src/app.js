const parameterA = document.getElementById("paramA");
const parameterB = document.getElementById("paramB");
const result = document.getElementById("result");
const multiplyButton = document.getElementById("multiply");

multiplyButton.addEventListener('click', () => {
    const inputs = [parameterA.value, parameterB.value];
    const parsedInputs = parseParams(...inputs);
    if (inputsAreValid(...parsedInputs)) {
        const [p1, p2] = parsedInputs;
        console.log(p2);
        result.innerText = p1 * p2;
    }
});

const parseParams = (...inputs) => {
    return inputs.map(input => parseInt(input))
};


const inputsAreValid = (...input) => {
    return input.every(num => typeof num === "number" && !isNaN(num));
};

