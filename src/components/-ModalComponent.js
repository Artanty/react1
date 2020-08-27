import React, { Component } from 'react';
import { ExtDialog, ExtContainer, ExtButton } from '@sencha/ext-react-modern';

class ModalComponent extends Component {
    constructor(props) {
        super(props);
      }
    state = {
        showDialog: false
    }
    componentDidMount() {
        console.log(this.props);
        
    }

    render() {
        const { showDialog } = this.state;

        return (
            <ExtContainer>
                <ExtButton text="Show Dialog" handler={this.showDialog} ui="action raised"/>
                <ExtDialog 
                    displayed={showDialog}
                    title="Dialog"
                    closable
                    maximizable
                    closeAction="hide"
                    maskTapHandler={this.onCancel}
                    bodyPadding="20"
                    maxWidth="200"
                    defaultFocus="#ok"
                    onHide={() => this.setState({ showDialog: false })}
                    html = {`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                    commodo consequat.`}
                >
                    <ExtButton text="Cancel" handler={this.onCancel}/>
                    <ExtButton itemId="ok" text="OK" handler={this.onOk}/>
                </ExtDialog>
            </ExtContainer>
        )
    }

    showDialog = () => {
        this.setState({ showDialog: true });
    }

    onOk = () => {
        this.setState({ showDialog: false });
    }

    onCancel = () => {
        this.setState({ showDialog: false });
    }

}
export default ModalComponent;