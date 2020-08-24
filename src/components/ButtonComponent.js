// import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { ExtContainer, ExtButton } from '@sencha/ext-react-modern';
const Ext = window['Ext'];

class ButtonComponent extends Component {
    constructor(props) {
        super(props);

        this.state = { message: null };


        // =====
        var dialog = Ext.create({
             xtype: 'dialog',
             title: 'Dialog',

             maximizable: true,
             html: 'Content<br>goes<br>here',

             buttons: {
                 ok: function () {  // standard button (see below)
                     dialog.destroy();
                 }
             }
         });
        dialog.show();
    
         
    }

    render() {
        
        // onClick={this.props.func}
        // handler={this.props.func}
        return (
            <ExtContainer padding="10">
                <ExtButton
                    text="My Button"
                    
                    handler={this.onButtonTap.bind(this)}
                    ui="action raised" />
                <div>
                    {this.state.message}
                </div>
            </ExtContainer>
        )
    }

    onButtonTap() {
        // this.setState({ message: 'Tapped!' });
        // this.props.func
        
        // this.props.dialog.show();
    }
    componentDidMount() {
        console.log(this.props);
      } 


    
    
}


// const Ext = window['Ext'];
// Ext.onReady(() => {
//   ReactDOM.render(<App />, document.getElementById('my-div-id'));
// });
export default ButtonComponent;