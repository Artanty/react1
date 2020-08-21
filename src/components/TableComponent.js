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
    // var data=[
    //   { id: 1, name: 'Kolya',val3: .25 },
    //   { id: 2, name: 'Vsevolod',val3: .35 },
    //   { id: 3, name: 'Dima',val3: .45 },
    //   { id: 4, name: 'Anton',val3: .45 }
    // ]
    // this.store = Ext.create('Ext.data.Store', {data: data});
    //this.store = {xtype: 'store',data: data}

    Ext.define('User', {
         extend: 'Ext.data.Model',
         fields: [
             {name: 'id',    type: 'int'},
             {name: 'name',  type: 'string'},
             {name: 'val3',  type: 'float'}
         ]
     });

    this.store = Ext.create('Ext.data.Store', {
        model: 'User',
        proxy: {
            type: 'ajax',
            url: 'https://run.mocky.io/v3/c1e16bd6-51bb-41d8-a1ad-efe3702f2801',
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        },
        // autoLoad: true
    });

    // this.output = this.output.bind(this); //не понимаю, зачем
  }

  output() {
          // console.log("With love from parent P land :)");
          // this.loadItemsToStore();
          
      }

  loadItemsToStore(){
    this.store.load({
        params: {
            group: 3,
            type: 'user'
        },
        callback: function(records, operation, success) {
            // do something after the load finishes
        },
        scope: this
    });
  }

  
  componentDidMount() { 
    this.loadItemsToStore();

    fetch("https://run.mocky.io/v3/c1e16bd6-51bb-41d8-a1ad-efe3702f2801")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
          // console.log(this.store);
          // console.log(result.items);
          // console.log(this.state);
          // this.data = result.items;
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
  //new

  extReactDidMount = detail => {
    // console.log('extReactDidMount')
    // this.grid.cmp.setStore(this.store);
    // this.store.add({some: 'data'}, {some: 'other data'});
  }

  renderSign = (format, value) => (
    <span style={{ color: value > 0 ? 'green' : value < 0 ? 'red' : ''}}>
        {Ext.util.Format.number(value, format)}
    </span>
  )

  render() {
    return (
     <React.Fragment>
      <ButtonComponent func={this.output}/>
      <ExtGrid
        viewport={ true }
        ref={ grid => this.grid = grid }
        title="Табличка"
        store={ this.store }
        onReady={ this.extReactDidMount }
      >
        <ExtColumn text="id" dataIndex="id"></ExtColumn>
        <ExtColumn text="name" dataIndex="name" width="150"></ExtColumn>
        <ExtColumn
          text="val3"
          dataIndex="val3"
          align="right"
          renderer={ this.renderSign.bind(this, '0.00') }
        />
      </ExtGrid>
     </React.Fragment>
    )
  }

}
export default TableComponent;