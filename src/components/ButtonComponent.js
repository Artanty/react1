// import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { ExtContainer, ExtButton } from '@sencha/ext-react-modern';


class ButtonComponent extends Component {
    constructor(props) {
        super(props);

        this.state = { message: null };
    }

    render() {
        // handler={this.onButtonTap.bind(this)}
        // onClick={this.props.func}
        return (
            <ExtContainer padding="10">
                <ExtButton
                    text="My Button"
                    handler={this.props.func}
                    ui="action raised" />
                <div>
                    {this.state.message}
                </div>
            </ExtContainer>
        )
    }

    onButtonTap() {
        // this.setState({ message: 'Tapped!' });
        // this.props.func;
    }
    
}

// const Ext = window['Ext'];
// Ext.onReady(() => {
//   ReactDOM.render(<App />, document.getElementById('my-div-id'));
// });
export default ButtonComponent;