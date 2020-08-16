import React from 'react';
import '../css/App.css';
import AddTodo from '../containers/AddTodo';
import Filters from './Filters';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <Filters />
    </div>
  );
}

export default App;
