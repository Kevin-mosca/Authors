import './App.css';
import Main from './views/Main';
import { Router } from '@reach/router';
import Detail from './views/Detail';
import Update from './views/Update';
import Create from './views/Create';

import React from 'react';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/author" />
        <Create path="/author/create" />
        <Detail path="/author/:id" />
        <Update path="/author/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
