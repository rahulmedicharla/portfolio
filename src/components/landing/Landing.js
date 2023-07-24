import React from "react";
import "./Landing.css";
import { Link } from "react-scroll";

export default function Landing({name, description, role, aboutTag}){
    return(
        <div className="landing">
            <div className="spacing">
                <span className="text title">hey everyone 👋</span><br/>
                <span className="text title">i'm <span className = "text name">{name}</span></span>
            </div>
            <div className="spacing">
                <span className="text description-big">{description}</span><br/>
                <div className="text description-small" id = "role">{role}</div>
            </div>
            <Link to={aboutTag} smooth>
                <div className="spacing hoverButton">
                    <span>learn more about me!</span>
                </div>
            </Link>
        </div>
    )
}