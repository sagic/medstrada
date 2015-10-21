'use strict';

import React from 'react'
import Layout from '../layout'

import LocationIndicator from '../partials/locationIndicator'
import CompaniesList from '../partials/companiesList'

export default class extends React.Component {
  render() {
    return (
      <Layout {...this.props} {...this.state}>
        <div className="page">
          <LocationIndicator />
          <CompaniesList />
        </div>
      </Layout>
    );
  }
}
