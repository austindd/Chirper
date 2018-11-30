import React, { Component } from 'react';
import '../../index.css';
import { ListGroup, ListGroupItem, ListGroupItemText } from 'reactstrap';
import ChirpCard from './ChirpCard.jsx';


class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chirpKeys: this.props.chirpKeys,
            chirpArray: this.props.chirpArray,

        }
        this.newChirp = this.props.newChirp;
    }


    render() {
        console.log(this.state.chirpArray);
        let chirpElements;
        // Map 
        if (this.state.chirpArray.length > 0) {
            chirpElements = this.state.chirpArray.map((item) => {
                return (
                    <ListGroupItem key={item.key}>
                        <ChirpCard newChirp={item} />
                    </ListGroupItem>
                );
            });    
        }

        return (
            <div className='feed-container text-center'>
                <ListGroup className="w-50 col-centered">{chirpElements}</ListGroup>
            </div>
        );

    };

}

export default Feed;