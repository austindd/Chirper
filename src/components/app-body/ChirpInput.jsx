import React, { Component } from 'react';
import { InputGroup, Input, Button, InputGroupAddon, InputGroupButtonDropdown, InputGroupText } from 'reactstrap';
import Chirp from '../shared/Chirp';
import MaterialIcon, {colorPalette} from 'material-icons-react';


class ChirpInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            complete: false,
            sanitized: false,
            nextKey: this.props.nextKey,
            prevChirp: this.props.prevChirp,
            user: this.props.user,
            type: 'default',
            text: null,
            image: null,
            link: null,
            element: null,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Handles text input box
    handleInputChange(value) {
        this.setState(() => {
            return { text: value }
        });
    }

    // Handles submit button, passes new Chirp submission to parent function for handling/rendering
    handleSubmit() {
        let submission = new Chirp(
            // 'nextKey' and 'user' to be passed down from chirpHandler, not modified
            this.props.nextKey,
            this.props.user,
            // The following chirp properties
            this.state.type,
            this.state.text,
            this.state.image,
            this.state.link,
            this.state.element
        );
        console.log(submission);
        if (submission.validCheck() === true) {
            return this.props.handleNewChirp(submission) // Callback function passed from ChirpHandler.jsx
        } else {
            console.log("error_invalid_chirp_object: ", submission);
        }
    }

    render() {
        return (
            <InputGroup>

                <Input
                    className='chirp-text-input'
                    type='text'
                    placeholder="Min. 240 characters"
                    onChange={(event) => { this.handleInputChange(event.target.value) }}
                />
                <InputGroupAddon addonType="append">
                    <Button onClick={this.handleSubmit}>chirp it.</Button>
                </InputGroupAddon>
            </InputGroup>
        );
    }
}

export default ChirpInput;