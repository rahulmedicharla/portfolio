import React from "react";
import {Image} from 'react-bootstrap';
import './Header.css';

export default function Header() {
    return (
        <div className="d-flex header">
            <Image src="/logo.png" width={140} className="logo" fluid/>
        </div>
    );
}