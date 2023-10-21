import 'bootstrap/dist/css/bootstrap.css'
import './style.css';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavbarBrand, NavItem} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';

function aboutUs () {

}

export default function TopMenu ({app}) {
    function receiversClick () {
        app.changePage('receivers')
    }
    function aboutusClick () {
        app.changePage('aboutus')
    }
    function logoClick () {
        app.changePage('main')
    }

    return (
        <Navbar>
            <Container className={"container-fluid"}>
                <Navbar.Brand href="#" onClick={logoClick}>
                    <img alt={""} className={"logo"} src={"https://apps.odoo.com/web/image/loempia.module/63943/icon_image?unique=7a0cd2d"}></img>
                </Navbar.Brand>
                <Nav variant={"underline"}>
                    <Nav.Item>
                        <Nav.Link onClick={logoClick} style={{marginLeft: '20px'}}>Main</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={receiversClick}>Receivers</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={aboutusClick}>About us</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
        // <div className={"topmenu"}>
        //     <button className={"logo"} onClick={logoClick}>
        //         <img className={"logo"} alt={"main"} src={"https://apps.odoo.com/web/image/loempia.module/63943/icon_image?unique=7a0cd2d"}></img>
        //     </button>
        //     <ul className={"menu"}>
        //         <li>
        //             <button className={"menu"} onClick={aboutusClick}>About us</button>
        //         </li>
        //         <li>
        //             <button className={"menu"} onClick={receiversClick}>Receivers</button>
        //         </li>
        //         <li>
        //             <button className={'menu'} onClick={logoClick}>Main</button>
        //         </li>
        //     </ul>
        // </div>
    )
}