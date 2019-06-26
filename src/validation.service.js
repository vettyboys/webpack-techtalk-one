export class ValidationService {
    parseParams(...inputs) {
        return inputs.map(input => parseInt(input))
    };


    inputsAreValid(...input) {
        return input.every(num => typeof num === "number" && !isNaN(num));
    };
}
