import React, { Component } from 'react';
import { Form, FormGroup, Label, FormText, InputGroup, Input, Button, InputGroupAddon, InputGroupButtonDropdown, InputGroupText } from 'reactstrap';
import Chirp from '../shared/Chirp';
import MaterialIcon, {colorPalette} from 'material-icons-react';

class ChirpInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formLabel: <h4>User: {this.props.user}</h4>, // Edit later
            visible: true,
            complete: false,
            sanitized: false,
            nextKey: this.props.nextKey,    // Passed from Chirp Handler, which keeps track of all chirp keys
            user: this.props.user,          // Passed from Chirp Handler
            type: 'text',
            text: null,
            image: null,
            link: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputKeyPress = this.handleInputKeyPress.bind(this);
    }

    /*
    - Handles chirp submission from submit button and [Enter] key
    - Compiles state data into new Chirp object and validates data
    - Passes new Chirp submission to parent function for handling/rendering
    */
    handleSubmit() {
        let submission = new Chirp(
            this.props.nextKey, // not modified by ChirpInput
            this.props.user,    // not modified by ChirpInput
            this.state.type,
            this.state.text,
            this.state.image,
            this.state.link,
        );
        console.log(submission);

        // Validate and submit
        submission.validCheck() === true ? this.props.handleNewChirp(submission) // Callback function passed from ChirpHandler, returns new Chirp object back to ChirpHandler
            : console.log("error_invalid_chirp_object: ", submission);
        
    }

    // Handles text input box
    handleInputChange(value) {
        this.setState(() => {
            return { text: value };
        });
    }
    // Checks for [Enter] keypress
    handleInputKeyPress(event) {
        console.log(event);
        return (event.charCode === 13 ? this.handleSubmit() : false);
    }



    render() {
        return (
            <FormGroup>
                <Label for='chirp-text-input'>{this.state.formLabel}</Label>
                <InputGroup className='col-centered'>
                <Input
                    id='chirp-text-input'
                    type='textarea'
                    placeholder="Min. 240 characters"
                    onChange={(event) => { this.handleInputChange(event.target.value) }}
                    onKeyPress={(event) => {this.handleInputKeyPress(event)}}
                />
                <InputGroupAddon addonType="append">
                    <Button onClick={this.handleSubmit}>chirp it.</Button>
                </InputGroupAddon>
            </InputGroup>

            </FormGroup>
        )







        // return (
            // <InputGroup className='col-centered'>
            //     <Input
            //         className='chirp-text-input'
            //         type='text'
            //         placeholder="Min. 240 characters"
            //         onChange={(event) => { this.handleInputChange(event.target.value) }}
            //         onKeyPress={(event) => {this.handleInputKeyPress(event)}}
            //     />
            //     <InputGroupAddon addonType="append">
            //         <Button onClick={this.handleSubmit}>chirp it.</Button>
            //     </InputGroupAddon>
            // </InputGroup>
        // );
    }
}

export default ChirpInput;