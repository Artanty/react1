import React, { Component } from 'react';

// import ClockComponent from './../components/ClockComponent';
// import ButtonComponent from './../components/ButtonComponent';
import TableComponent from './../components/TableComponent';
// import AjaxTableComponent from './../components/AjaxTableComponent';

// import AjaxComponent1 from './../components/AjaxComponent1';



class TemplateComponent extends Component {


  
  data = "Компонент-батя с версткой";
  
  // <TableComponent />
  // <h2>Это {this.data}</h2>
  // <ButtonComponent />
  // <ClockComponent />
  // <AjaxComponent1 />

  
  render() {
    return (
    	<React.Fragment>
      
        
    		<TableComponent />
        
    	</React.Fragment>
    	);
  }

}
export default TemplateComponent;