import React, { Component, Fragment } from 'react';
import ChirpCard from '../app-body/ChirpCard';
// import {
//     Card, CardProps,
//     CardBody, CardBodyProps,
//     CardColumns, CardColumnsProps,
//     CardDeck, CardDeckProps,
//     CardFooter, CardFooterProps,
//     CardGroup, CardGroupProps,
//     CardHeader, CardHeaderProps,
//     CardImg, CardImgProps,
//     CardSubtitle, CardLink,
// } from 'reactstrap';

// export class Chirp extends Component {
//     constructor(props) {
//         this.super(props);

//         this.user = this.props.user;
//         this.type = this.props.type;
//         this.text = this.props.text;
//         this.image = this.props.image;
//         this.link = this.props.link;
//         this.key = this.props.key;
//         this.element = this.props.element;
//         this.validate = () => {
//             if (this.key === null) return false;
//             if (this.user === null) return false;
//             if (this.type === null) return false;
//             if (this.text === null) return false;
//             if (this.element === null) return false;
//             return true;
//         };

//         this.defaultElement = this.defaultElement.bind(this);
//     }

//     defaultElement() {
//         return (
//             <ChirpCard ></ChirpCard>
//         );
//     }

// };


export class Chirp {
    constructor(key = null, user = null, type = 'default', text = null, image = null, link = null, element = null) {
        this.key = key;
        this.user = user;
        this.type = type;
        this.text = text;
        this.image = image;
        this.link = link;
        this.element = element;
        this.validCheck = () => {
            if (this.key === null) {
                return false
            } else if (this.user === null) {
                return false
            } else if (this.type === null) {
                return false
            } else if (this.text === null) {
                return false
            } else {
                return true;
            }
        };
    }
};

export default Chirp;