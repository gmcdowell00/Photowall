import React, {Component}  from "react"; // Import react libraries through this variable
import  ReactDOM  from "react-dom/client"; // Import react dom to render elements on webpage
import Main from "./Components/Main";

//const tasks = ['Pick up the pieces', 'Shovel the driveway','Battle Gnarfle the Garthok']

// JSX code. Compiles as createElement method
// When Writing JSX everything must equate to a single jsx element
// const element = <div>
//                   <h1>Task List</h1>
//                   <ol>
//                     { tasks.map((task, index) => <li key={index}>{task}</li> )} 
//                   </ol>
//                 </div>
//const element = React.createElement('ol', null, tasks.map((task, index) => React.createElement('li', {key: index}, task)));
// Deprecated in React 18. Using for example
// ReactDOM.render(element, document.getElementById('root')); 
//root.render(element);

// New way to render elements to the DOM
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Main/>);

