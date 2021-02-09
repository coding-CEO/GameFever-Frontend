import * as H from 'history';
import { Route } from './Route';
// TODO: very importants
export class ErrorHandler {

    static handle = (error: Error) => {
        // TODO: handle error here
    }

    static ERROR500 = (routeHistory: H.History) => {
        Route.goToRoute('/500', routeHistory);
    }

    static ERROR404 = (routeHistory: H.History) => {
        Route.goToRoute('/404', routeHistory);
    }

    static ERROR401 = (routeHistory: H.History) => {
        Route.goToRoute('/401', routeHistory);
    }
}