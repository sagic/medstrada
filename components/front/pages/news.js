'use strict';

import React from 'react'
import Layout from '../layout'
import NewsArticlesTicker from '../partials/newsArticleTeaser'

export default class extends React.Component {
  render() {
    var rows = [], i = 0, len = 10;
    while (++i <= len) rows.push(i);

    return (
      <Layout {...this.props} {...this.state}>
        <div className="page">
          <h4>News</h4>
          <ul>
            {rows.map(function (i) {
              return <NewsArticlesTicker key={i} company={i}/>;
            })}
          </ul>
        </div>
      </Layout>
    );
  }
}
