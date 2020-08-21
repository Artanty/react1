import React, { Component } from 'react';


class BadChildComponent extends Component {

  constructor(props) {
      super(props);
    }
  
 
  render() {
    return <p>Время плохого ребенка: {this.props.date.toLocaleTimeString()}</p>;
  }

}
export default BadChildComponent;