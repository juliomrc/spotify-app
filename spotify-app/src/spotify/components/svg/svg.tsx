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
