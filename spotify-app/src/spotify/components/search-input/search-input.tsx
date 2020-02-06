import React, { useRef, useState } from "react";
import classNames from "classnames";

// TODO ALIAS
import { TextInput } from "../text-input";
import { Button } from "../button";
import { Svg } from "../svg";

import clearIcon from "../resources/icons/cross.inline.svg";
import searchIcon from "../resources/icons/search_icon.inline.svg";

import "./search-input.css";

interface ISearchInput {
    onChange: (value: string) => void;
    className?: string;
    defaultText?: string;
    delay?: number;
}

const searchIconSize = 15;
const clearIconSize = 12;

export const SearchInput: React.FC<ISearchInput> = (props) => {

    const [inputValue, setInputValue] = useState("");

    const timeout = useRef<any>();

    const handleOnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        setInputValue(value);

        if (!props.delay) { props.onChange(value); }

        clearTimeout(timeout.current);
        timeout.current = setTimeout(
            () => props.onChange(value),
            props.delay,
        );
    };

    const onClearSearch = () => {
        setInputValue("");
        props.onChange("");
    };

    return (
        <div className={classNames("search-container", props.className)}>
            <div className={"search-icon"}>
                <Svg height={searchIconSize} width={searchIconSize} >{searchIcon}</Svg>
            </div>
            <TextInput className={"search-input"} onChange={handleOnInputChange} value={inputValue} placeholder={props.defaultText} />
            {inputValue &&
                <Button onClick={onClearSearch} className={"clear-icon"}>
                    <Svg height={clearIconSize} width={clearIconSize}>{clearIcon}</Svg>
                </Button>
            }
        </div>
    );
};

SearchInput.defaultProps = {
    defaultText: "Search here",
    delay: 500,
};
