import React from 'react'
import './aboutMe.css'
import image from '../../images/images.png'

const AboutMe = () => {
    return (
        <div className='about_container' id='about-me'>
            <div>
                <img src={image} alt='person icon'></img>
            </div>
            <div className='about_text'>
                <h1>ABOUT ME</h1>
                <p>ORM for TypeScript and JavaScript (ES7, ES6, ES5). Supports MySQL, PostgreSQL, MariaDB, SQLite, MS SQL Server, Oracle, SAP Hana, WebSQL databases. Works in NodeJS, Browser, Ionic, Cordova and Electron platforms.</p>
            </div>
        </div>
    )
}

export default AboutMe