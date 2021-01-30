const RequestOAuth = (username, password, history) => {
    return {
        type: 'REQUEST_AUTH',
        payload: {
            request: {
                username,
                password
            },
            history
        }
    };
};

export const LoginActionCreators = {
    RequestOAuth
};