import * as H from 'history';

export class Route {
    public static goToRoute = (route: string, routeHistory: H.History): void => {
        if(routeHistory.location.pathname !== route)
            routeHistory.push(route);
    }
}