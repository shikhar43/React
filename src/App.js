import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
//
function App() {
  return (
    <div className="App">
      <UserGreeting/>
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <Greet name = "Thor" heroName = "Thor"/> */}
      {/* <Greet name = "Tony" heroName = "Iron Man"/>
      <Greet name = "Steve" heroName = "Captain America"/>
      <Welcome name = "Thor" heroName = "Thor"/>
      <Welcome name = "Tony" heroName = "Iron Man"/>
      <Welcome name = "Steve" heroName = "Captain America"/> */}
      {/* <Welcome/> */}
      {/* <Hello/> */}

    </div>
  );
}

export default App;
