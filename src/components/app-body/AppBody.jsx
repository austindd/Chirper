import React, { Component } from 'react';
import '../../index.css';
import ChirpHandler from './ChirpHandler';
import { Row, Col, Container } from 'reactstrap';

class AppBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appTheme: this.props.appTheme,

        }
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <ChirpHandler />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AppBody;