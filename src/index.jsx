import { StrictMode } from 'react';
import ReactDOM from 'react-dom'

import App from './App'
import RootStyle from './index.styles'

ReactDOM.render(
  <StrictMode>
    <RootStyle />
    <App />
  </StrictMode>,
  document.getElementById('root')
)
