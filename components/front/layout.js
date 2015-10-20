"use strict";

import React from 'react'
import Nav from './partials/nav'
import SiteLogo from './partials/siteLogo'
import RecentCompanies from './partials/recentCompanies'
import NewsArticlesTicker from './partials/newsArticlesTicker'
import CompaniesFilter from './partials/companiesFilter'

export default class {
  render() {
    return (
      <div ref="siteLayout" className="site-layout">
        <header>
          <SiteLogo />
          <Nav {...this.props} />
        </header>
        <section>{this.props.children}</section>
        <CompaniesFilter />
        <footer>
          <RecentCompanies />
          <NewsArticlesTicker />
        </footer>
      </div>
    )
  }
}
