import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"
import Navbar from './containers/Navbar'
import Home from "./views/home";
import Presentation from "./views/presentation";
import Demarche from "./views/demarche";
import Equipe from "./views/equipe";
import Actions from "./views/actions";
import Partenaires from "./views/partenaires";
import Dons from "./views/dons";
import Contact from "./views/contact";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/presentation' component={ Presentation } />
          <Route path='/demarche' component={ Demarche } />
          <Route path='/equipe' component={ Equipe } />
          <Route path='/actions' component={ Actions } />
          <Route path='/partenaires' component={ Partenaires } />
          <Route path='/dons' component={ Dons } />
          <Route path='/contact' component={ Contact } />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
