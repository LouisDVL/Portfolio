import React from 'react';
import loginPage from "./Images/RCK/login.PNG";
import homePage from "./Images/RCK/home.PNG";
import profilePage from "./Images/RCK/profile.PNG";
import shopPage from "./Images/RCK/shop.PNG";
import shopAddPage from "./Images/RCK/shopAdd.PNG";
import { Container, Carousel } from 'react-bootstrap'


class RckPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Container className="mt-3 mb-2 shadow text-center">
                    <Carousel className="pb-2">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={loginPage}
                                alt="First Slide" 
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={homePage}
                                alt="First Slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={profilePage}
                                alt="First Slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={shopPage}
                                alt="First Slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={shopAddPage}
                                alt="First Slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <h1 className="text-center font-weight-bold">Description</h1>
                    <p>This was a university group project that was done for one of my Computer Science papers. This is the user interface that was loaded into a kiosk, which had then been connected to multiple lockers. We had hoped that it would encourage people to recycle clothing more rather than throw them away. This was our proposed solution for our trash problem.</p>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><h4>Tech Stack</h4></li>
                        <li className="list-group-item">JavaScript</li>
                        <li className="list-group-item">Bootstrap 4</li>
                        <li className="list-group-item">ASP.NET</li>
                    </ul>
                </Container>
            </div>
            )
    }
}

export default RckPage;