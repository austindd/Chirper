import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';

class AppMenuButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseOver: '',
            mouseDown: '',
            mouseUp: '',
            click: '',
        }
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleMouseOver() {
        this.setState({mouseOver: 'icon-mouse-over'});
    };
    handleMouseDown() {
        this.setState({mouseDown: 'icon-mouse-down', mouseUp: ''});
    };
    handleMouseUp() {
        this.setState({mouseUp: 'icon-mouse-up', mouseDown: ''});
    };
    handleClick() {
        this.setState({click: 'icon-click'});
    };

    render() {
        return (
            <div
                className={'header-menu-button-wrapper col-centered' + this.state.mouseOver + this.state.mouseDown + this.state.mouseUp + this.state.click}
                onMouseOver={(event) => { this.handleMouseOver(event.target) }}
                onMouseDown={(event) => { this.handleMouseDown(event.target) }}
                onMouseUp={(event) => { this.handleMouseUp(event.target) }}
                onClick={(event) => { this.handleClick(event.target) }}
            >
                <MaterialIcon id='menu-button-icon' icon='dehaze' color='#FEFEFE' size={55} />
            </div >
        )
    }
}

export default AppMenuButton;