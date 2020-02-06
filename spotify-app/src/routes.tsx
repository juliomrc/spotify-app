import React, { lazy } from "react";
import { Route, RouteComponentProps, withRouter, Switch } from "react-router-dom";

export const SpotifyAsync = lazy(() => import(
    /* webpackChunkName: "widget-center" */
    "./spotify/spotify"
));

export const UserPage = lazy(() => import(
    /* webpackChunkName: "widget-center" */
    "./spotify/user-page"
));
// TODO: Route paths should be in a constants folder and not be hardcoded in the solution
// TODO: container wrapper with styles should be around the routes
const Routes = withRouter(() => (
    <React.Suspense fallback={<div>Loading...</div>} >
        <Switch>
            <Route exact={false} path={"/spotify"} component={SpotifyAsync} />
            <Route exact={true} path={"/user"} component={UserPage}/>
        </Switch>
    </React.Suspense>
));

export const routes = <Routes />;
