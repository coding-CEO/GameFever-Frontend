import { GlobalContentManager } from './GlobalContentManager';
import { UserContentManager } from './UserContentManager';

export class ContentManager {
    globalContentManager: GlobalContentManager;
    userContentManager: UserContentManager;

    constructor() {
        this.globalContentManager = new GlobalContentManager();
        this.userContentManager = new UserContentManager();
    }
}