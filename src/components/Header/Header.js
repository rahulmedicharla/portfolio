import React from "react";
import {Image} from 'react-bootstrap';
import logo from '../../assets/logo.png';
import './Header.css';

export default function Header() {
    return (
        <div className="d-flex header">
            <Image src={logo} width={140} className="logo load-hidden" fluid/>
        </div>
    );
}