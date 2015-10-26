'use strict';

import React from 'react'
import Layout from '../layout'

export default class extends React.Component {
  render() {
    return (
      <Layout {...this.props} {...this.state}>
        <div className="page">
          <h4>Legal notes</h4>
          <p>Nulla a aliquam neque, vel consectetur tortor. Suspendisse luctus, elit ut auctor condimentum, dui tortor
            lacinia massa, vel dictum sapien lectus at risus. Sed at nisl accumsan, sollicitudin nibh id, tristique ex.
            Vestibulum venenatis vulputate ullamcorper. In luctus eget dolor a finibus. Nullam dignissim mattis tellus,
            vel placerat mi consequat molestie. Aliquam rutrum, lorem ac tincidunt auctor, dui arcu volutpat risus, eu
            sagittis mauris est eu diam. Cras sit amet nulla nibh. Curabitur ac lacinia leo. Aenean consequat odio
            egestas erat porta convallis. Sed tristique facilisis gravida. Donec pharetra felis sed justo maximus
            ultrices.</p>

        </div>
      </Layout>
    );
  }
}
