import React, { lazy } from "react";
import { Route, RouteComponentProps, withRouter, Switch } from "react-router-dom";

export const SpotifyAsync = lazy(() => import(
    /* webpackChunkName: "widget-center" */
    "./spotify/spotify"
));

// tslint:disable:jsx-no-lambda
const Routes = withRouter((props: RouteComponentProps) => (
    <React.Suspense fallback={<div>Loading...</div>} >
        <Switch>
            <Route exact={false} path={"/"} component={SpotifyAsync} />
        </Switch>
    </React.Suspense>
));

export const routes = <Routes />;
