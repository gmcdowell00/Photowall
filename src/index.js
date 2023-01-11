import React, {Component}  from 'react' // Import react libraries through this variable
import  ReactDOM  from 'react-dom/client' // Import react dom to render elements on webpage

import './styles/stylesheet.css'
import { BrowserRouter } from 'react-router-dom'
import {createStore} from 'redux'
import rootreducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from './Components/App'


const store = createStore(rootreducer)
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>);

