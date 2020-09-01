import React from 'react';
import CardComponent from './cardComponent';
import RCKImage from './Images/RCK/shop.PNG';
import { Row, Col } from 'react-bootstrap';

/*Card Component takes in
 * url for the image
 * title for the project
 * text that will be displayed can take in JSX
 * page link will be for where the description
 */

class Work extends React.Component {
    render() {
        return (
            <div id="portWork" className="portfolio container">
                <h1 className="text-center font-weight-bold">Portfolio</h1>
                <Row className="justify-content-center">
                    <Col>
                        <CardComponent
                            url={RCKImage}
                            title="RCK"
                            text={<div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">JavaScript</li>
                                    <li className="list-group-item">Bootstrap 4</li>
                                    <li className="list-group-item">ASP.NET</li>
                                </ul>
                            </div>
                            }
                            pageLink={process.env.PUBLIC_URL + '/RCK'}
                        />
                    </Col>
                </Row>
            </div>
            )
    }
}

export default Work;