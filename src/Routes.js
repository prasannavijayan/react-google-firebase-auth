import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import routes from "./routes/routeConfig";
import UserProvider, { UserContext } from "./providers/UserProvider";
import { Login } from "./pages";

export default function RouteConfigExample() {
  return (
    <UserProvider>
        <Router>
          <div>
            <Switch>
              <RouteWithSubRoutes key={"login"} path="/login" exact={true} component={Login} />
              <RouteWithSubRoutes key={"login"} path="/" exact={true} component={Login} />
              {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} isAuth={true} />
              ))}
            </Switch>
          </div>
        </Router>
    </UserProvider>
  );
};

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  if (!route.isAuth) {
    return (
      <Route
        path={route.path}
        render={props => <route.component {...props} routes={route.routes} />}
      />
    );
  }

  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <UserContext.Consumer>
          {user =>
              <route.component {...props} routes={route.routes} user={user} />
          }
        </UserContext.Consumer>
      )}
    />
  );
}