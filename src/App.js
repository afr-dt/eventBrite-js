import React from 'react';
import Header from './components/Header';
import ProviderCategories from './context/ContextCategories';
import Form from './components/Form';
import EventProvider from './context/ContextEvents';
import EventList from './components/EventList';

function App() {
  return (
    <EventProvider>
      <ProviderCategories>
        <Header />
        <div className="uk-container">
          <Form />
          <EventList />
        </div>
      </ProviderCategories>
    </EventProvider>
  );
}

export default App;
