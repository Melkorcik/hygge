import React, {useState} from 'react';
import './App.css';
const Header = React.lazy(()=>import('./Header/Header'));
const ComponentOne = React.lazy(()=>import('./ComponentOne/ComponentOne'));
const ComponentTwo = React.lazy(()=>import('./ComponentTwo/ComponentTwo'));
const ComponentThree = React.lazy(()=>import('./ComponentThree/ComponentThree'));
const ComponentFourMain = React.lazy(()=>import('./ComponentFour/ComponetFourMain'));
const ComponentFive = React.lazy(()=>import('./ComponentFive/ComponentFive'));
function App() {  
  return (
    <div onWheel={e=> localStorage.setItem("coordY", e.deltaY.toString())} style={{position:'relative'}} className="App">
        <Header/>
        <ComponentOne/>
        <ComponentTwo/>
        <ComponentThree/>
        <ComponentFourMain/>
        <ComponentFive/>
    </div>
  );
}
window.onbeforeunload = function(e) {
  localStorage.clear();
};
export default App;
