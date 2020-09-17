import React from 'react';
import Header from './components/Header';
import Books from './components/Books';
import OptionBar from './components/OptionBar';

function App() {
  return (
    <div id="content">
      <Header />
      <OptionBar />
      <Books />
    </div>
  );
};

export default App;