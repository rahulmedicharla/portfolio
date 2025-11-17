import React from "react";
import {Image} from 'react-bootstrap';
import './Header.css';
import Spline from '@splinetool/react-spline';
export default function Header() { 
    return (
        <div className="d-flex glowable header" style={{width: "100%", height: "100%"}}>
            <Spline
                scene="https://prod.spline.design/qP4NGECIu-5JxgJB/scene.splinecode"
            />
        </div>
    );
}