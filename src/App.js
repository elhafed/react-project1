import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-social/bootstrap-social.css'
import React, { Component } from 'react'
import Main from './Components/MainComponent'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {ConfigureStore}from './redux/configureStore'

const store=ConfigureStore();
class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
            <div className="App">
          
              <Main />

            </div>
      </BrowserRouter>
      </Provider>
   );
    
  }
}



export default App;
