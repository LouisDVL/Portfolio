import React from 'react';
import CardComponent from './cardComponent';
import holderImage from './Images/holder.svg';
import { Row, Col } from 'react-bootstrap';

class Work extends React.Component {
    render() {
        return (
            <div id="portWork" className="portfolio container">
                <h1 id="portfolioId" className="text-center font-weight-bold">Portfolio</h1>
                <Row className="justify-content-center">
                    <Col>
                <CardComponent
                            url={holderImage}
                            title="RCK"
                            text={<div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">JavaScript</li>
                                    <li className="list-group-item">Bootstrap 4</li>
                                    <li className="list-group-item">ASP.NET</li>
                                </ul>
                            </div>}
                        />
                    </Col>

                    <Col>
                <CardComponent
                    url={holderImage}
                    title="Card Title"
                    text="Some quick example text to build on the card title and make up the bulk of
      the card's content."
                        />
                    </Col>

                    <Col>
                        <CardComponent
                            url={holderImage}
                            title="Card Title"
                            text="Some quick example text to build on the card title and make up the bulk of
      the card's content."
                        />
                    </Col>
                    <Col>
                        <CardComponent
                            url={holderImage}
                            title="Card Title"
                            text="Some quick example text to build on the card title and make up the bulk of
      the card's content."
                        />
                    </Col>
                    <Col>
                        <CardComponent
                            url={holderImage}
                            title="Card Title"
                            text="Some quick example text to build on the card title and make up the bulk of
      the card's content."
                        />
                    </Col>
                    <Col>
                        <CardComponent
                            url={holderImage}
                            title="Card Title"
                            text="Some quick example text to build on the card title and make up the bulk of
      the card's content."
                        />
                    </Col>
                </Row>
            </div>
            )
    }
}

export default Work;