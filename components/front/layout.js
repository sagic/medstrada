'use strict';

import React from 'react'
//import SiteLogo from './partials/siteLogo'
import RecentCompanies from './partials/recentCompanies'
import NewsArticlesTicker from './partials/newsArticlesTicker'
import CompaniesFilter from './partials/companiesFilter'

import {NavBar} from './partials/nav'
import {MAIN_NAV_LINKS} from './consts'

export default class {

  render() {
    return (
      <div ref="siteLayout" className="site-layout">
        <header>
          <NavBar links={MAIN_NAV_LINKS} brand="MEDSTRADA" />
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
