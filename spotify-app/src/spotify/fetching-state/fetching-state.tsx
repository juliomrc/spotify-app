import React from "react";
import { IFetchingState } from "../logic/use-fetch";

export const FetchingState: React.FC<IFetchingState> = (props) => {
    console.log(props);
    return (
        <div>
            {props.isLoading && <div>Loading data...</div>}
            {props.hasError && <div>Ups... Something went wrong</div>}
        </div>
    );
};
