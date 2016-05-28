//import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import './style.css'

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


setTimeout(function() {
  var script = document.createElement('script');
  script.innerHTML = document.getElementById('ga').innerHTML;
  document.body.appendChild(script);
}, 1000);
