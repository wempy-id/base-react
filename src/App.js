import React, { lazy, Suspense, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { alertActions } from './middlewares/actions/AlertAction';
import { PrivateRoute, PublicRoute } from './routes/RouteAccess';
const Index = lazy(() => import('./pages/index'));
const Login = lazy(() => import('./pages/login/index'));
function App() {
  return (
    <Router>
        <Suspense fallback={<Fragment />}>
          <Switch>
            {/* <Route exact path="/" render={() => <Redirect to="/home" />} /> */}
          <PublicRoute restricted={true} path="/login" component={Index} />
            <PrivateRoute path="/" component={Index} />
            {/* <Route component={Error} /> */}
          </Switch>
        </Suspense>
    </Router>
  );
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(Object.assign({}, alertActions), dispatch);
};

const mapStateToProps = state => {
  const { alert } = state;
  return { alert };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
