import React, { Component } from 'react';
import Head from 'next/head';
import Links from './Links';

class Container extends Component {
  render() {
    return (
      <>
        <Head>
          <title>{this.props.title ? `eric wiyanto - ${this.props.title}` : 'eric wiyanto'}</title>
        </Head>
        <main>
          <div className="flex flex-col items-center gap-y-8 py-12">
            <Links />
            {this.props.children}
          </div>
        </main>
      </>
    );
  }
}

export default Container;
