import React, { Component } from 'react';
// import { ExtGrid } from "@sencha/ext-react-modern";
// import { ExtColumn } from "@sencha/ext-react-modern";

import BadChildComponent from './BadChildComponent';


// const Ext = window['Ext'];

// дочерний компонент - так тоже можно создавать
function FormattedDate(props) {
    var options = { timeZone: 'UTC', timeZoneName: 'short' };
    return <div>преобразованное время: {props.date.toLocaleTimeString('en-US', options)}</div>
  }
// дочерний компонент конец
class ClockComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() { 
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }


  render() {
    return (
      <React.Fragment>
      <div>
        <h2>компонент Clock формирует время и предает детям</h2>
        Сейчас {this.state.date.toLocaleTimeString()}
      </div>
      <div>
        <h2>Функциональный компонент в этом же файле принимает пропс:</h2>
        <FormattedDate date={this.state.date} />
      </div>
      <div>
        <h2>Классовый компонент из другого файла принимает пропс:</h2>
        <BadChildComponent date={this.state.date} />
      </div>

      </React.Fragment>
    );
  }


  

  

}
export default ClockComponent;