'use strict';

import React from 'react'
import {Link} from 'react-router'

//export default class {
//  render() {
//    return (
//      <nav className="nav-mainmenu">
//        <ul>
//          <li>
//            <Link to="/">Home</Link>
//          </li>
//          <li>
//            <Link to="/info">Info</Link>
//          </li>
//          <li>
//            <Link to="/contact">Contact</Link>
//          </li>
//          <li>
//            <Link to="/company">Company</Link>
//          </li>
//        </ul>
//      </nav>
//    )
//  }
//}


var NavBar = React.createClass({
  render: function () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#navbar-collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">{this.props.brand}</a>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <NavMenu links={this.props.links}/>
          </div>
        </div>
      </nav>
    );
  }
});

var NavMenu = React.createClass({
  render: function () {
    var navLinks = this.props.links.map(function (link) {
      if (!link.dropdown) {
        return (
          <NavLink to={link.to} text={link.text}/>
        );
      }
      else {
        return (
          <NavLinkDropdown text={link.text} links={link.links}/>
        );
      }
    });
    return (
      <ul className="nav navbar-nav">
        {navLinks}
      </ul>
    );
  }
});

var NavLink = React.createClass({
  render: function () {
    return (
      <li><Link to={this.props.to}>{this.props.text}</Link></li>
    );
  }
});

var NavLinkDropdown = React.createClass({
  render: function () {
    var navLinks = this.props.links.map(function (link) {
      return (
        <NavLink to={link.to} text={link.text}/>
      );
    });
    return (
      <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
           aria-expanded="false">
          {this.props.text}
          <span className="caret"></span>
        </a>
        <ul className="dropdown-menu">
          {navLinks}
        </ul>
      </li>
    );
  }
});

module.exports = {
  NavBar: NavBar,
  NavLink: NavLink,
  NavLinkDropdown: NavLinkDropdown
};

