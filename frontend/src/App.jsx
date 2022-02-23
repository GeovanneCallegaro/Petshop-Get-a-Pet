import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

/* Components */
import { Navbar } from './components/layout/Navbar.jsx'
import { Footer } from './components/layout/Footer.jsx'
import { Container } from './components/layout/Container.jsx'
import { Message } from './components/layout/Message.jsx'

/* Pages */
import { Home } from './components/pages/Home.jsx'
import { Login } from './components/pages/Auth/Login.jsx'
import { Register } from './components/pages/Auth/Register.jsx'
import { Profile } from './components/pages/User/Profile.jsx'
import { MyPets } from './components/pages/Pets/MyPets.jsx'
import { AddPet } from './components/pages/Pets/AddPets.jsx'
import { EditPet } from './components/pages/Pets/EditPet.jsx'

/* Context */
import {UserProvider} from './context/UserContext.jsx'


function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Message />
        <Container>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/user/profile">
            <Profile></Profile>
          </Route>
          <Route path="/pet/mypets">
            <MyPets></MyPets>
          </Route>
          <Route path="/pet/add">
            <AddPet></AddPet>
          </Route>
          <Route path="/pet/edit/:id">
            <EditPet></EditPet>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
        </Container>
      </UserProvider>
      <Footer />
    </Router>
  )
}

export default App;
