import React from "react";
import "./Landing.css";

export default function Landing({name, description, role, aboutTag}){
    return(
        <div className="landing">
            <div className="spacing">
                <span className="text title">hey everyone 👋</span><br/>
                <span className="text title">i'm <span className = "text name">{name}</span></span>
            </div>
            <div className="spacing">
                <span className="text description">{description}</span><br/>
                <div className="text description" id = "role">{role}</div>
            </div>
            <a href={"#" + aboutTag}>
                <div className="spacing hoverButton">
                    <span>learn more about me!</span>
                </div>
            </a>
        </div>
    )
}