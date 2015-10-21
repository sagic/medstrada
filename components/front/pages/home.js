'use strict';

import React from 'react'
import Layout from '../layout'

export default class extends React.Component {
  render() {
    return (
      <Layout {...this.props} {...this.state}>
        <div className="page">
          <h2>Lobby</h2>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget suscipit nunc. Vivamus vitae odio
            accumsan, commodo lacus eget, interdum leo. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Morbi quis venenatis purus, in ornare ipsum. Pellentesque in lobortis diam. Proin ut tristique urna, id
            tempor sem. Vestibulum tempor nibh vel sodales rutrum. Suspendisse eleifend elementum nisi, luctus vulputate
            tortor scelerisque non.</p>

          <p>Nulla a aliquam neque, vel consectetur tortor. Suspendisse luctus, elit ut auctor condimentum, dui tortor
            lacinia massa, vel dictum sapien lectus at risus. Sed at nisl accumsan, sollicitudin nibh id, tristique ex.
            Vestibulum venenatis vulputate ullamcorper. In luctus eget dolor a finibus. Nullam dignissim mattis tellus,
            vel placerat mi consequat molestie. Aliquam rutrum, lorem ac tincidunt auctor, dui arcu volutpat risus, eu
            sagittis mauris est eu diam. Cras sit amet nulla nibh. Curabitur ac lacinia leo. Aenean consequat odio
            egestas erat porta convallis. Sed tristique facilisis gravida. Donec pharetra felis sed justo maximus
            ultrices.</p>

          <p>Sed lobortis porta tristique. Sed sit amet ante vehicula, vehicula ligula at, faucibus dolor. Duis posuere
            lectus eget accumsan pharetra. Vivamus vehicula eleifend sem, nec tristique eros. Aliquam iaculis est in
            tortor posuere tempus. Suspendisse vehicula est libero, eget feugiat quam bibendum tincidunt. Vestibulum
            eleifend nunc et nulla iaculis, at dictum turpis malesuada.</p>

          <p>Praesent mi enim, maximus non ligula non, dictum aliquam leo. Suspendisse porttitor justo nulla, nec
            euismod libero faucibus vel. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Pellentesque a augue viverra, vulputate sem pharetra, interdum ligula. Quisque condimentum
            mauris eget erat venenatis lobortis. Nulla condimentum magna sit amet dapibus posuere. Aliquam sed iaculis
            magna. Curabitur dictum sollicitudin ligula ac tempus. Praesent ac cursus velit. Etiam at venenatis mauris,
            ut varius erat.</p>

          <p>Proin facilisis, tortor ac tempus aliquet, justo ligula pharetra ex, ac elementum velit turpis vitae risus.
            Nam iaculis convallis libero vel feugiat. Mauris scelerisque commodo libero, id dignissim dui gravida vitae.
            Pellentesque mollis eleifend congue. Maecenas faucibus interdum sagittis. Nullam lobortis nisi at gravida
            mattis. Integer eu suscipit mi. Proin sed sodales orci. Ut quis hendrerit nibh, eget convallis nulla.</p>
        </div>
      </Layout>
    );
  }
}
