const componentService = new ComponentService();
const validationService = new ValidationService();

const execute = (componentService, validationService) => {
    componentService.onClick(() => {
        const inputs = componentService.getInputParameters();
        const parsedInputs = validationService.parseParams(...inputs);

        if (validationService.inputsAreValid(...parsedInputs)) {
            const [p1, p2] = parsedInputs;
            componentService.setResult(p1 * p2);
        }else{
            componentService.setResult("Check Inputs are Numbers");
        }
    });
};
execute(componentService, validationService);



