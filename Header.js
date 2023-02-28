import React from 'react'
import './header.css';

import {Link} from 'react-router-dom';


export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link class="navbar-brand" to="/">
                        {/* <img src="./images/green bull.png" className='miniimage'  alt="" width="30" height="24" class="d-inline-block align-text-top"/> */}
                                <b>Bulls & Bears</b> </Link>
                    {/* <a className="navbar-brand" href="#">Bulls & Bears</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="./Segment.js">Trade Journal</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="./resources.js">Resources</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="./service">Market</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="./Contact.js" >Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            


        </>
    )
}
