import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

/* Pages */
import { Home } from './components/pages/Home.jsx'
import { Login } from './components/pages/Auth/Login.jsx'
import { Register } from './components/pages/Auth/Register.jsx'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
