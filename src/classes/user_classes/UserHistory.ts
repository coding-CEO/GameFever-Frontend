export class UserHistory {
    private history: string[];
    private capacity: number;

    constructor(){
        this.history = [];
        this.capacity = 5;
    }

    addToHistory = (historyInfo: string) => {
        // TODO: add to history
    }

    getHistory = (): string[] => {
        return this.history;
    }
}