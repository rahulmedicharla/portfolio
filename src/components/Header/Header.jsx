import React from "react";
import {Image} from 'react-bootstrap';
import './Header.css';
export default function Header() { 
    return (
        <div className="d-flex glowable header">
            <Image src="/logo.png" className="logo" fluid/>
        </div>
    );
}