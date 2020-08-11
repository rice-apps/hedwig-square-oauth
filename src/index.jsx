import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import RootStyle from './index.styles'

ReactDOM.render(
  <React.StrictMode>
    <RootStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
