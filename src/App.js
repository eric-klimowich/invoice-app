import React from 'react';
import './App.css';

import InvoiceList from './InvoiceList'
import InvoiceList2 from './InvoiceList2'
import InvoiceList3 from './InvoiceList3'

function App() {
  return (
    <div className="App">
      <InvoiceList />
      <InvoiceList2 />
      <InvoiceList3 />
    </div>
  );
}

export default App;
