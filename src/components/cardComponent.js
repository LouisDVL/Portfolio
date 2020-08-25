import React from 'react';
import { Card, Button } from 'react-bootstrap'

class CardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleHover() {
        this.setState({ hover: !this.state.hover });
    }

    render() {
        let className;
        if (this.state.hover) {
            className = "mb-5 ml-auto mr-auto shadow-lg";

        } else {
            className = "mb-5 ml-auto mr-auto shadow";
        }

        return (
            <div>
                <Card style={{ width: '18rem' }} className={className} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} >
                    <Card.Img variant="top" src={this.props.url} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text >
                            {this.props.text}
                        </Card.Text>
                        <Button variant="primary">Learn More</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default CardComponent;