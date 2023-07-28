import React from 'react';
import './ScrollUp.css';
import { Link } from 'react-scroll';

export default function ScrollUp({tag}){
    return (
        <Link to={tag} smooth >
            <div className='scroll'>
                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-arrow-up-short icon" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
                </svg>
            </div>
        </Link>
    )
}