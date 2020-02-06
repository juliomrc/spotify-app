import * as React from "react";
import * as ReactDOM from "react-dom";

import { StoreProvider } from "./spotify/logic/store/store-provider";
import { BrowserRouter } from "react-router-dom";

import * as RoutesModule from "./routes";
import "./index.css";

const routes = RoutesModule.routes;

const renderApp = () => {
    const app = (
        <StoreProvider>
            <BrowserRouter>
                {routes}
            </BrowserRouter>
        </StoreProvider>
    );

    ReactDOM.render(app, document.getElementById("root"));
};

renderApp();
