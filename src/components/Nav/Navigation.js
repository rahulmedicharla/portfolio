import React from "react";
import { Nav, NavLink} from "react-bootstrap";
import "./Navigation.css";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

export default function Navigation({anchorTags, links}) {
    return (
        <div className="navContainer align-items-center">
            <Nav className="d-flex flex-column align-items-end linkContainer">
                {anchorTags.map((tag, index) => {
                    return (
                        <NavLink className="text navLinks" key={index} href={"#" + tag}>/{tag}</NavLink>
                    )
                })}
                <div className="links">
                    <a href={links.email} target="_blank" rel="noreferrer" className="linkColor"><Email/></a>
                    <a href={links.github} target="_blank" rel="noreferrer" className="linkColor"><GitHub/></a>
                    <a href={links.linkedin} target="_blank" rel="noreferrer" className="linkColor"><LinkedIn/></a>
                </div>
            </Nav>
        </div>
    );
}