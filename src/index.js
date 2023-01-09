import React, {Component}  from 'react' // Import react libraries through this variable
import  ReactDOM  from 'react-dom/client' // Import react dom to render elements on webpage
import Main from './Components/Main'
import './styles/stylesheet.css'
import { BrowserRouter } from 'react-router-dom'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<BrowserRouter><Main/></BrowserRouter> );

