import React, { Component } from 'react';
import axios from 'axios';
import { API_KEY } from '../services';
import { base_url } from '../services';

// Create context
const ContextCategories = React.createContext();
export const ConsumerCategories = ContextCategories.Consumer;

class ProviderCategories extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    let url = `${base_url}categories/?token=${API_KEY}&locale=es_ES`;
    let categories = await axios.get(url);

    this.setState({
      categories: categories.data.categories
    });
  };

  render() {
    return (
      <ContextCategories.Provider
        value={{
          categories: this.state.categories
        }}
      >
        {this.props.children}
      </ContextCategories.Provider>
    );
  }
}
export default ProviderCategories;
