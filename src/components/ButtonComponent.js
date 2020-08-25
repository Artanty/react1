// import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { ExtContainer, ExtButton } from '@sencha/ext-react-modern';
const Ext = window['Ext'];

class ButtonComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
              message: null,
              error: null,
              isLoaded: false,
              items: []
            };

    }
    onButtonTap() {
        
        this.apiRequest(this.props.id);
        
    }
    apiRequest(id) {
        fetch("https://run.mocky.io/v3/a0b277c9-d52f-4519-9982-64933c5052eb")
            .then(res => res.json())
            .then(
            (result) => {

              this.setState({
                isLoaded: true,
                items: result.items
              });
            
            const oneUser = result.items.filter(item => item.id === id);
            
            this.createDialogBox(oneUser[0]);
            
            },
            // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
            // чтобы не перехватывать исключения из ошибок в самих компонентах.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
        )
    }

    makeDialogContent(obj) {
        const ru = {id:'id',
                    name:'Имя',
                    email:'Почта',
                    phone: 'Телефон',
                    password:'Пароль',
                    role_id:'Роль',
                    parent_name:'Имя родителя',
                    parent_phone:'Тел. родителя',
                    parent_email:'Почта родителя',
                    registered_as:'Зарегистрирован как',
                    age:'Возраст',
                    gender:'Пол'
                }

        var result = "";
        for (var prop in obj) {
          if (obj.hasOwnProperty(prop) && prop !== 'id') {
              
              result += "<li>" + ru[prop] + " = " + obj[prop] + "</li>\n";
              
          }
        }
        return '<ul>' + result + '</ul>';
    }

    
    createDialogBox(val){
        var dialog = Ext.create({
             xtype: 'dialog',
             title: 'Карточка пользователя '+ val.name,

             maximizable: true,
             
             html: this.makeDialogContent(val),//делаем верстку

             buttons: {
                 ok: function () {  // standard button (see below)
                     dialog.destroy();
                 }
             }
         });
        dialog.show();
    }

    render() {
        
        return (
            <ExtContainer padding="10">
                <ExtButton
                    text="Открыть"
                    handler={this.onButtonTap.bind(this)}
                    ui="action raised" />
                
            </ExtContainer>
        )
    }

    
    componentDidMount() {
        console.log(this.props);
        
    }

    
      


    
    
}

export default ButtonComponent;