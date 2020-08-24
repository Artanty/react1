import React, { Component } from 'react';

import { ExtGrid } from "@sencha/ext-react-modern";
import { ExtColumn } from "@sencha/ext-react-modern";
import ButtonComponent from './ButtonComponent';

const Ext = window['Ext'];


class TableComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
    
    Ext.define('User', {
         extend: 'Ext.data.Model',
         fields: [
             {name: 'id',    type: 'int'},
             {name: 'name',  type: 'string'},
             {name: 'email',  type: 'string'},
             {name: 'phone', type: 'string'}, 
             {name: 'password', type: 'string'},
             {name: 'role_id', type: 'string'},
             {name: 'parent_name', type: 'string'},
             {name: 'parent_phone', type: 'string'},
             {name: 'parent_email', type: 'string'},
             {name: 'registered_as', type: 'string'},
             {name: 'age', type: 'string'},
             {name: 'gender', type: 'string'}
         ]
     });

    this.store = Ext.create('Ext.data.Store', {
        pageSize: 3,
        model: 'User',
        proxy: {
            type: 'ajax',
            url: 'https://run.mocky.io/v3/a0b277c9-d52f-4519-9982-64933c5052eb',
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        },
        
        autoLoad: true
    });

    Ext.require('Ext.grid.plugin.PagingToolbar');
 
  }



  output(){
    // console.log("gg");
  }
  extReactDidMount = detail => {
    // console.log(detail)
    // this.grid.cmp.setStore(this.store);
    // this.store.add({ "id": 12, "name": "Kolya", "email": "artyom@mail.ru", "phone":"89111950123","password":"123","role_id":"user","parent_name":"Artyom","parent_phone":"89110011222","parent_email":"papa@mail.ru","registered_as":"parent","age":"21","gender":"male"});

  }


  renderSign = (format, value) => (  
    <span style={{ color: value > 0 ? 'green' : value < 0 ? 'red' : ''}}>
        {Ext.util.Format.number(value, format)}
    </span>
  )



  render() {
    return (
     <React.Fragment>
      
      <ExtGrid
        viewport={ true }
        ref={ grid => this.grid = grid }
        title="Пользователи"
        store={ this.store }
        onReady={ this.extReactDidMount }
        plugins={['pagingtoolbar']}


      >
        
        <ExtColumn text="link" dataIndex="id" encodeHtml="false" 
        // renderer={function(v) {return <a href="https://edu.advance24.online/user/id='+ v.toString() +'">Ссылка</a>;}}       
        renderer={function(v) {return <ButtonComponent func={v}/>;}}

        

        
        ></ExtColumn>
        <ExtColumn flex={1} text="name" dataIndex="name" width="150"></ExtColumn>
        <ExtColumn flex={1} text="email" dataIndex="email" width="150"></ExtColumn>
        <ExtColumn flex={1} text="phone" dataIndex="phone" width="150"></ExtColumn>
        <ExtColumn flex={1} text="password" dataIndex="password" width="150"></ExtColumn>
        <ExtColumn flex={1} text="role_id" dataIndex="role_id" width="150"></ExtColumn>
        <ExtColumn flex={1} text="parent_name" dataIndex="parent_name" width="150"></ExtColumn>
        <ExtColumn flex={1} text="parent_phone" dataIndex="parent_phone" width="150"></ExtColumn>
        <ExtColumn flex={1} text="parent_email" dataIndex="parent_email" width="150"></ExtColumn>
        <ExtColumn flex={1} text="registered_as" dataIndex="registered_as" width="150"></ExtColumn>
        <ExtColumn flex={1} text="age" dataIndex="age" width="150"></ExtColumn>
        <ExtColumn flex={1} text="gender" dataIndex="gender" width="150"></ExtColumn>
      </ExtGrid>
    </React.Fragment>
    )
  }

}
export default TableComponent;