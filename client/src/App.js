import React from 'react';
import Homepage from './screens/homePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import items from './screens/items';
import analysis from './screens/analysis';



function App() {
  document.body.style = 'background: #A194D8';
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/items" exact component={items} />
      <Route path="/analysis" exact component={analysis} />
      </Switch>
    </Router>
  );
}

export default App;
