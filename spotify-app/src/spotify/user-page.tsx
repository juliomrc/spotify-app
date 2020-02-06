import React from "react";
import { NavLink } from "./components/nav-link";

const UserPage = () => (
    <>
        <NavLink to={"/spotify"}>Go back</NavLink>
        <div>This would be the user Page</div>
    </>
);

export default UserPage;
