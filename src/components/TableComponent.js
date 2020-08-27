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


  extReactDidMount = detail => {
    console.log(detail);
  }

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
        
        <ExtColumn text="link" dataIndex="id" width="140" renderer={function(v) {return <ButtonComponent id={v}/>;}}></ExtColumn>
        <ExtColumn flex={1} text="Имя" dataIndex="name" width="150"></ExtColumn>
        <ExtColumn flex={1} text="Почта" dataIndex="email" width="150"></ExtColumn>
        <ExtColumn flex={1} text="Телефон" dataIndex="phone" width="150"></ExtColumn>
        
        
        <ExtColumn flex={1} text="Имя родителя" dataIndex="parent_name" width="150"></ExtColumn>
        <ExtColumn flex={1} text="Тел. родителя" dataIndex="parent_phone" width="150"></ExtColumn>
        <ExtColumn flex={1} text="Почта родителя" dataIndex="parent_email" width="150"></ExtColumn>
        <ExtColumn flex={1} text="Зарегистрирован как" dataIndex="registered_as" width="150"></ExtColumn>
        <ExtColumn flex={1} text="Возраст" dataIndex="age" width="150"></ExtColumn>
        <ExtColumn flex={1} text="Пол" dataIndex="gender" width="150"></ExtColumn>
      </ExtGrid>
    </React.Fragment>
    )
  }

}
export default TableComponent;