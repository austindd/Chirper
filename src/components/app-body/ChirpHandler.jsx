import React, { Component, Fragment } from 'react';
import '../../index.css';
import Chirp from '../shared/Chirp';
import ChirpInput from './ChirpInput.jsx';
import ChirpFeed from './ChirpFeed.jsx';

// ChirpHandler's sole function is to provide a parent for input and output components to sync state properties.
// ChirpHandler provides the 'newChirp' object to its children for read/write/display functions.

class ChirpHandler extends Component {
    constructor(props) {
        super(props);


        this.state = {
            newChirp: null,
            chirpArray: [],
            chirpKeys: [],
            nextKey: null,
        }
        console.log(this.state.nextKey);
        this.handleNewChirp = this.handleNewChirp.bind(this);
    }




    handleNewChirp(submission) {
        // pushing old array states into temp variables to be used in setState()
        let newArray = this.state.chirpArray;
        newArray.push(submission);

        let newKeys = this.state.chirpKeys;
        newKeys.push(submission.key)

        console.log(newArray);
        this.setState(() => { // functional setState() used to avoid problems with async react DOM updates
            return {
                newChirp: submission,
                chirpArray: newArray,
                chirpKeys: newKeys
            }
        });
        console.log(submission);
    };

    render() {
        let chirpTemplate = new Chirp();
        let generateNewKey = this.state.chirpKeys ? String(10000000000000 + this.state.chirpKeys.length) : String(10000000000000);
        return (
            <Fragment>
                <ChirpInput
                    // Giving access 
                    nextKey={generateNewKey}
                    // Hard coding valid input data for testing purposes
                    user='Austin'
                    type='default'
                    text={null}
                    // Sending ChirpInput a callback function to lift state
                    handleNewChirp={this.handleNewChirp}
                />
                <ChirpFeed
                    newChirp={this.state.newChirp}
                    chirpArray={this.state.chirpArray}
                    chirpKeys={this.state.chirpKeys}
                />
            </Fragment>
        );
    }
}

export default ChirpHandler;