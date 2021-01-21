import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import OAuthLink from './OAuthLink'
import ReceiveOAuth from './ReceiveOAuth'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/onboard'>
          <OAuthLink />
        </Route>
        <Route path='/receive'>
          <ReceiveOAuth />
        </Route>
        <Route path='/'>
          <Redirect to='/onboard' />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
