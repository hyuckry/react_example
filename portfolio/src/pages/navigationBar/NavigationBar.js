import React from 'react'
import './navigation.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { navigationlinks } from '../../helpers/navigationlinks'

function createLinks(params) {
    return navigationlinks.map((e, idx) => (
        <Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link>
    )


    )
}

const NavigationBar = () => {
    return (
        <div>
            <div id='home'>
                <Navbar expand="md" className='navigation_container'>
                    <Navbar.Brand style={{ marginLeft: '1rem' }} href="#home">fseason.info</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse style={{ justifyContent: 'flex-end', marginRight: '1rem' }}>
                        <Nav className='links' style={{ margin: '0 1rem' }}>
                            {createLinks()}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}

export default NavigationBar