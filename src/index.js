import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

// This is only needed if you want to use semantic ui https://react.semantic-ui.com/
import 'semantic-ui-css/semantic.min.css'
import './styles/App.scss'

render(
  <App />,
  document.getElementById('app')
)