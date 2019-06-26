class ComponentService {
    constructor() {
        this.parameterA = document.getElementById("paramA");
        this.parameterB = document.getElementById("paramB");
        this.result = document.getElementById("result");
        this.multiplyButton = document.getElementById("multiply");
    }

    getInputParameters() {
        return [this.parameterA.value, this.parameterB.value];
    }

    setResult(result) {
        this.result.innerText = result;
    }

    onClick(lamdaFunction) {
        this.multiplyButton.addEventListener("click", lamdaFunction);
    }
}
