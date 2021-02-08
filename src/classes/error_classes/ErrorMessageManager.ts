import { ErrorMessage } from "./ErrorMessage";

export class ErrorMessageManager {
    errors: ErrorMessage[];
    constructor(){
        this.errors = [];
    }

    private pop = (callback: Function) => {
        if(this.errors.length > 0){
            this.errors.splice(0, 1);
        }
        callback();
    }

    push = (error: ErrorMessage, callback: Function) => {
        this.errors.push(error);
        setTimeout(() => {
            this.pop(callback);
        }, 3000);
    }
}