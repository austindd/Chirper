import React, { Component, Fragment } from 'react';
import '../../index.css';
import ChirpHandler from './ChirpHandler';



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
                <div className='row'>
                    <ChirpHandler className='col-6' />
                </div>
            </Fragment>
        )
    }
}



export default AppBody;