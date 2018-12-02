import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import '../../index.css';



class ChirpCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            container: this.container,
        }
    }

    // componentWillEnter (callback) {
    //     const el = this.container;
    //     TweenMax.fromTo(el, 0.3, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
    //   }
    
    // componentWillLeave (callback) {
    //     const el = this.container;
    //     TweenMax.fromTo(el, 0.3, {y: 0, opacity: 1}, {y: -100, opacity: 0, onComplete: callback});
    //   }

    render() {
        console.log(this.state);
        return (
            
            <Card className="chirp-card col-centered">
                <CardBody>
                    <CardTitle className='chirp-card-title'>{this.props.newChirp.user}</CardTitle>
                    <CardText className='chirp-card-text'>{this.props.newChirp.text}</CardText>
                    <CardImg>{this.props.newChirp.image}</CardImg>
                </CardBody>
            </Card>
        );
    }
}

export default ChirpCard;