import React, { Component } from 'react';
import '../../index.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import ChirpCard from './ChirpCard.jsx';
import { TransitionGroup } from 'react-transition-group';
import ChirpCardWrapper from './ChirpCardWrapper';


class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chirpKeys: this.props.chirpKeys,
            chirpArray: this.props.chirpArray,
        }
        this.newChirp = this.props.newChirp;
        this.chirpCardWrapper = new ChirpCardWrapper;
    }

    render() {
        console.log(this.state.chirpArray);
        let chirpElements;

        // If there are any chirp objects in chirpArray
        if (this.state.chirpArray.length > 0) {
            // Map all chirp objects to an array of elements for rendering
            chirpElements = this.state.chirpArray.map((item) => {
                return (
                    <ListGroupItem key={item.key}>
                        <TransitionGroup>
                            <ChirpCard newChirp={item} container={ChirpCardWrapper()}/>
                        </TransitionGroup>
                    </ListGroupItem>
                );
            });
            // Then reverse the array so chirps are displayed from newest to oldest
            chirpElements = chirpElements.reverse();
        }

        // Render chirp feed
        return (
            <div className='feed-container'>
                <ListGroup className="col-centered">{chirpElements}</ListGroup>
            </div>
        );

    };

}

export default Feed;