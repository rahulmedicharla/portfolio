import React from "react";
import { Nav} from "react-bootstrap";
import "./Navigation.css";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import { Link} from "react-scroll";

export default function Navigation({anchorTags, links}) {
    return (
        <div className="navContainer align-items-center">
            <Nav className="d-flex flex-column align-items-end linkContainer">
                {anchorTags.map((tag, index) => {
                    return (
                        <Link to={tag} smooth activeClass="active" key={index}><div className="text navLinks">/{tag}</div></Link>
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