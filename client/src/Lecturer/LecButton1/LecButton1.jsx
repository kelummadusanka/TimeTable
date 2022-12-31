import React from "react";
import './LecButton1.css';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';

function LecButton1() {
    return (
     
  /*<button class="btn-bd-primary" type="button">Button</button>*/
  

<Wrap align='right'>
  <WrapItem>
    
    <Button colorScheme='teal'><p className="lecbut1">Edit Daily Schedule</p></Button>
    
  </WrapItem>
</Wrap>
    )
}
export default LecButton1

/*class App extends React.Component {
    render() {
      return (
        <div style={{ display: "flex" }}>
          <button
            style={{ marginLeft: "auto" }}
          >
            Click
          </button>
        </div>
      );
    }
  }*/

//<Button variant="contained" style={{display: 'flex', justifyContent: 'right'}} color="primary" className="float-right" onClick={this.onSend}>