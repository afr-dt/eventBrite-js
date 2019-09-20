import React from 'react';
import Header from './components/Header';
import ProviderCategories from './context/ContextCategories';
import Form from './components/Form';

function App() {
  return (
    <ProviderCategories>
      <Header />
      <div className="uk-container">
        <Form />
      </div>
    </ProviderCategories>
  );
}

export default App;
