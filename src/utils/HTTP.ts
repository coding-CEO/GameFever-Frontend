import { ErrorHandler } from './ErrorHandler';

export class HTTP {

    // /product/{productId}
    // /user/userId/accountInfo
    static generateConfig = (userJWT?: string, adminJWT?: string): Object => {
        let config = {};
        // TODO: take argument and convert to config
        return config;
    }

    static get = async (route: string, config: Object) => {

        try {
            //FIXME: fix this...
            throw new Error("fix this");
            // let { data } = await axios.get(route, config);
            // return data;
        } catch (error) {
            ErrorHandler.handle(error);
            return null;
        }
    };

    // TODO: implement remaining http methods
}