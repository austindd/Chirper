import React, { Component, Fragment, ReactSVG, ReactSVGElement } from 'react';
import '../../index.css';
import ChirpHandler from './ChirpHandler';
import { Row, Col, Container } from 'reactstrap';
import MaterialIcon, {colorPalette} from 'material-icons-react';




class AppBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appTheme: this.props.appTheme,

        }
    }
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                            
                            <ChirpHandler />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}



export default AppBody;