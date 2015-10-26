'use strict';

import React from 'react'
import Layout from '../layout'

export default class extends React.Component {
  render() {
    return (
      <Layout {...this.props} {...this.state}>
        <div className="page">
          <h4>Register a new company</h4>
          <br/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget suscipit nunc. Vivamus vitae odio
            accumsan, commodo lacus eget, interdum leo. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Morbi quis venenatis purus, in ornare ipsum. Pellentesque in lobortis diam.
            Proin ut tristique urna, id
            tempor sem.</p>
          <form>
            <label for="name">Company name</label>
            <div className="input-group">
              <input type="text" className="form-control" id="name"></input>
            </div>
            <br/>
            <label for="email">Email</label>
            <div className="input-group">
              <input type="text" className="form-control" id="email"></input>
            </div>
            <br/>
            <label for="description">Description</label>
            <div className="input-group">
              <textarea className="form-control" id="description"></textarea>
            </div>
            <br/>
            <button type="submit">Send request</button>
          </form>
        </div>
      </Layout>
    );
  }
}
