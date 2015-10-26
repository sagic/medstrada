'use strict';

import React from 'react'
import Layout from '../layout'

export default class extends React.Component {
  render() {
    return (
      <Layout {...this.props} {...this.state}>
        <div className="page">
          <h4>About Medstrada</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget suscipit nunc. Vivamus vitae odio
            accumsan, commodo lacus eget, interdum leo. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Morbi quis venenatis purus, in ornare ipsum. Pellentesque in lobortis diam. Proin ut tristique urna, id
            tempor sem. Vestibulum tempor nibh vel sodales rutrum. Suspendisse eleifend elementum nisi, luctus vulputate
            tortor scelerisque non.</p>
        </div>
      </Layout>
    );
  }
}
