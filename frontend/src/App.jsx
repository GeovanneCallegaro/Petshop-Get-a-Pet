import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

/* Components */
import { Navbar } from './components/layout/Navbar.jsx'
import { Footer } from './components/layout/Footer.jsx'
import { Container } from './components/layout/Container.jsx'

/* Pages */
import { Home } from './components/pages/Home.jsx'
import { Login } from './components/pages/Auth/Login.jsx'
import { Register } from './components/pages/Auth/Register.jsx'


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Container>
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
      </Container>
      <Footer></Footer>
    </Router>
  )
}

export default App;
