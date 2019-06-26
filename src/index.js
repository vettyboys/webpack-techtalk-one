import {ComponentService} from "./component.service";
import {ValidationService} from "./validation.service";
import {execute} from "./app";

const componentService = new ComponentService();
const validationService = new ValidationService();

execute(componentService, validationService);
