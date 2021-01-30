import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

let cookie_token = Cookies.get('ACCESS_TOKEN');
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            cookie_token !== undefined ? (
                <Component {...props} />
            ) : (
                    <Redirect to="/login" />
                )
        }
    />
);

export const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                cookie_token !== undefined && restricted ? (
                    <Redirect to="/" />
                ) : (
                        <Component {...props} />
                    )
            }
        />
    );
};
