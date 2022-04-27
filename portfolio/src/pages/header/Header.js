import React from 'react'
import './header.css'
import Typed from '../../components/ReactTyped'

const Header = () => {
    return (
        <div className='main-info'>
            <h1>What am I</h1>
            <Typed strings={[
                " ",
                "A Software developer",
                "Front-end developer",
            ]}
                typeSpeed={40}
                backSpeed={50}
                loop
            >
            </Typed>
        </div>
    )
}

export default Header