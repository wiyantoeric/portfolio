import React, { Component } from 'react';
import Head from 'next/head';
import Links from './Links';

class Container extends Component {
  render() {
    return (
      <>
        <Head>
          <title>{this.props.title ? this.props.title : 'eric wiyanto'}</title>
        </Head>
        <main>
          <div className="absolute top-1/4 left-1/2 -translate-y-1/4 -translate-x-1/2">
            <Links />
            {this.props.children}
          </div>
        </main>
      </>
    );
  }
}

export default Container;
