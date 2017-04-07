import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import styleSheet from 'styled-components/lib/models/StyleSheet';

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  propTypes () {
    return {
      body: React.PropTypes.string,
    }
  },
  render () {
    const head = Helmet.rewind();

    let css;
    if (process.env.NODE_ENV === 'production') {
      const styles = styleSheet.rules().map(rule => rule.cssText).join('\n');
      css = <style dangerouslySetInnerHTML={{ __html: styles }} />;
    }

    let fonts = <script type="text/javascript" src="//fast.fonts.net/jsapi/52312399-4b05-4128-b29c-2881eca832a7.js"></script>;
    let gsap = <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js"></script>;

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {css}
          {fonts}
          {gsap}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    );
  }
});
