import React, { FunctionComponent } from "react";
import classnames from "classnames";

import "./svg-styles.css";

export interface ISvg {
    width?: number;
    height?: number;
    className?: string;
    alternativeText?: string;
}

export const Svg: FunctionComponent<ISvg> = (props) => {

    const { children } = props;
    if (!children) {
        return null;
    }

    const {
        width,
        height,
        className,
        alternativeText = "",
    } = props;

    // TODO: This should be an svg on a <div> so that we could maninupate their appearence better
    return (
        <img
            className={classnames("container", className)}
            role={"img"}
            aria-label={alternativeText}
            style={{
                width,
                height,
            }}
            src={children as string}
        />
    );
};
