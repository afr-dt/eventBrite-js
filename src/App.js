import React from 'react';
import Header from './components/Header';
import ProviderCategories from './context/ContextCategories';
import Form from './components/Form';
import EventProvider from './context/ContextEvents';

function App() {
  return (
    <EventProvider>
      <ProviderCategories>
        <Header />
        <div className="uk-container">
          <Form />
        </div>
      </ProviderCategories>
    </EventProvider>
  );
}

export default App;
