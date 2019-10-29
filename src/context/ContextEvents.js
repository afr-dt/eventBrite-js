import React, { Component } from 'react';
import axios from 'axios';
import { API_KEY } from '../services';
import { base_url } from '../services';

const EventContext = React.createContext();
export const EventConsumer = EventContext.Consumer;

class EventProvider extends Component {
  state = {
    events: []
  };

  getEvents = async search => {
    let url = `${base_url}events/search/?q=${search.name}&categories=${search.category}&sort_by=date&token=${API_KEY}&locale=es_ES`;

    // request API
    const events = await axios.get(url);
    this.setState({
      events: events.data.events
    });
  };

  render() {
    return (
      <EventContext.Provider
        value={{
          events: this.state.events,
          getEvents: this.getEvents
        }}
      >
        {this.props.children}
      </EventContext.Provider>
    );
  }
}

export default EventProvider;
