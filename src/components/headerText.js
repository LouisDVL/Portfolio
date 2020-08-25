import React from 'react';
import {Button } from 'react-bootstrap'
import { Link} from 'react-scroll'

function viewWork() {
    window.scrollTo({
        top: 800,
        left: 0,
        behavior: 'smooth'
    });
}

class HeaderText extends React.Component {

    render() {

        return (
            <div className="headerText align-items-center align-middle my-auto mx-auto">
                <h1>Hello, I am Louis Lising</h1>
                <p>Full-Stack Developer</p>
                <Link activeClass="active" to="portWork" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                    <Button variant="primary" onClick={viewWork}> View My Work</Button>
                </Link>
            </div>
        );
    }
}
export default HeaderText;