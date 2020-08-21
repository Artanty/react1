import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { ExtGrid, ExtColumn } from '@sencha/ext-react-modern';
const Ext = window['Ext'];
class AjaxTableComponent extends Component {
 
    render() {
        // Named Data Store
        Ext.create('Ext.data.Store', {
            fields: ['name', 'email', 'phone'],
            data: [{
                'name': 'Lisa',
                "email": "lisa@simpsons.com",
                "phone": "555-111-1224"
            }, {
                'name': 'Bart',
                "email": "bart@simpsons.com",
                "phone": "555-222-1234"
            }, {
                'name': 'Homer',
                "email": "home@simpsons.com",
                "phone": "555-222-1244"
            }, {
                'name': 'Marge',
                "email": "marge@simpsons.com",
                "phone": "555-222-1254"
            }],
            // Named Store
            storeId: 'peronsStore'
        });
 
        return (
            <ExtGrid
                title="People"
                store="peronsStore"
                height="300px"
                title="Наши данные"
                scrollable shadow>
                <ExtColumn
                    text="Имя"
                    dataIndex="name"
                    flex="1"/>
                <ExtColumn
                    text="Имеил"
                    dataIndex="email"
                    flex="1"/>
                <ExtColumn
                    text="Телефон"
                    dataIndex="phone"
                    flex="1"/>
            </ExtGrid>
        )
    }
 
}
export default AjaxTableComponent;