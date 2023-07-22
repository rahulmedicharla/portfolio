import React from "react";
import logo from "../../assets/logo.png";
import "./Navigation.css";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

export default function Navigation({anchorTags, links}){
    return (
        <div className="navContainer">
            <img src={logo} width={150} alt="-"/>
            <div className="links">
                <a href={anchorTags[0]}>/home</a>
                <a href={anchorTags[1]}>/about</a>
                <a href={anchorTags[2]}>/experience</a>
                <a href={anchorTags[3]}>/creations</a>
                <a href={anchorTags[4]}>/articles</a>
                <a href={anchorTags[5]}>/contact</a>
                <div className="contactIcons">
                    <a href={links.email} target="_blank" rel="noreferrer"><Email /></a>
                    <a href={links.github} target="_blank" rel="noreferrer"><GitHub /></a>
                    <a href={links.linkedin} target="_blank" rel="noreferrer"><LinkedIn /></a>
                </div>
            </div>
        </div>
    );
}