import React, { Component } from 'react';
import { ConsumerCategories } from '../context/ContextCategories';

class Form extends Component {
  state = {
    name: '',
    category: ''
  };

  handlegetEvent = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form>
        <fieldset className="uk-fieldset uk-margin">
          <legend className="uk-legend uk-text-center">
            Busca tu evento por nombre o categoría
          </legend>
        </fieldset>
        <div className="uk-column-1-3@m uk-margin">
          <div className="uk-margin" uk-margin="true">
            <input
              name="name"
              className="uk-input"
              type="text"
              placeholder="Nombre evento o Ciudad"
              onChange={this.handlegetEvent}
            />
          </div>

          <div className="uk-margin" uk-margin="true">
            <select
              className="uk-select"
              name="category"
              onChange={this.handlegetEvent}
            >
              <option value="">Seleciona categoría</option>
              <ConsumerCategories>
                {value => {
                  return value.categories.map(category => (
                    <option
                      value={category.id}
                      key={category.id}
                      data-uk-form-select
                    >
                      {category.name_localized}
                    </option>
                  ));
                }}
              </ConsumerCategories>
            </select>
          </div>

          <div>
            <input
              type="submit"
              className="uk-button uk-button-danger"
              value="Buscar Eventos"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
