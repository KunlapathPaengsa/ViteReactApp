import React,{ Component } from 'react'
import './style/aPP.css'

const str = <h1>Hello, Kunlapath.</h1>
const LoggedIn = true;

function FunctionComponent(){
  return <h1>This is a function component.</h1>
}

class ClassComponent extends Component{
  render(){
    return <h1>This is a class component.</h1>
  }
}

function ClickHandleEvent(e){
  alert('Button clicked ');
}



function App() {
  return(
    <div className='App'>
      {/* {str}<br></br>{(LoggedIn)?'Welcome':'Sign up'} */}
    {/* <label className='username'> : <input/></label> */}
    {/* <div>{username}? :</div> */}
    <FunctionComponent/>
    <ClassComponent/>
    <button onClick={ClickHandleEvent}>Click me</button>
    </div>
  );
}


export default App
