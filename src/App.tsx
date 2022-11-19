import React from 'react';
import './App.css';
import PageView from './views';
import Header from './components/Header';

function App(): React.ReactElement {
  return (
    <div className="App">
      <Header />
      <PageView />
    </div>
  );
}

export default App;
