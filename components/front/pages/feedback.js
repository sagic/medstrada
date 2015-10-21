'use strict';

import React from 'react'
import Layout from '../layout'

export default class extends React.Component {
  render() {
    return (
      <Layout {...this.props} {...this.state}>
        <div className="page">
          FEEDBACK
        </div>
      </Layout>
    );
  }
}
