import { ErrorMessage } from "./ErrorMessage";

export class ErrorMessageManager {
    errors: ErrorMessage[];
    private canCallBack: boolean;

    constructor(){
        this.errors = [];
        this.canCallBack = true;
    }

    private pop = (callback: Function) => {
        if(this.errors.length > 0){
            this.errors.splice(0, 1);
        }
        callback();
    }

    setCallBack = (canCalLBack: boolean): void => {
        this.canCallBack = canCalLBack;
    }

    push = (error: ErrorMessage, callback: Function) => {
        this.errors.push(error);
        setTimeout(() => {
            if(this.canCallBack)
                this.pop(callback);
        }, 3000);
    }
}