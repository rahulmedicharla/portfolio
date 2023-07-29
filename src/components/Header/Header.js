import React from "react";
import {Image} from 'react-bootstrap';
import './Header.css';

export default function Header() {
    return (
        <div className="d-flex header">
            <Image src="/logo.png" width={200} className="logo" fluid/>
        </div>
    );
}