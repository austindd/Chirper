import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import '../../index.css';


class ChirpCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        }
    }
    render() {
        console.log(this.state);
        return (
            <Card className="chirp-card col-centered">
                <CardBody>
                    <CardTitle className='chirp-card-title'>{this.props.newChirp.key}</CardTitle>
                    <CardText className='chirp-card-text'>{this.props.newChirp.text}</CardText>
                    <CardImg>{this.props.newChirp.image}</CardImg>
                </CardBody>
            </Card>
        );
    }
}

export default ChirpCard;