import React from "react";
import { IFetchingState } from "../logic/use-fetch";

// TODO: Pass reFetch method and try again
// TODO: actual loader and error screen
export const FetchingState: React.FC<IFetchingState> = (props) => (
    <>
        {props.isLoading && <div>Loading data...</div>}
        {props.hasError && <div>Ups... Something went wrong</div>}
    </>
);
