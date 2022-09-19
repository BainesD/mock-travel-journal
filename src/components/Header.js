import React from "react";
import earthIcon from "../images/earth-small.png";

export default function Header(){

    return(
        <>
        <header className="header">
            <img className="header-icon" src={earthIcon}/>
            <h4>my travel journal.</h4>
        </header>
        </>
    )
}