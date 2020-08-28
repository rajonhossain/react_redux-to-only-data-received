import React from 'react'; 
import './App.css';
import { connect} from 'react-redux'


function Second(props,{name="alsdkfjlasdkjflsdaf"}) {

 
 

  return (
    <div className="sdf">
      {props.name} <br/>
      {name}
 
    </div>
  );
}




const data = (state) => {
	return {
		name : state.name
	}
}


 
export default connect(data)(Second)
