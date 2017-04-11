import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { IndexPage } from '../components/styled/';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';

export default class Index extends React.Component {
  render() {
    return (
      <IndexPage fluid>
        <Helmet title={config.siteTitle} meta={[{ 'name': 'description', 'content': config.siteDescription }]} />
        <Hero />
        <AboutSection />
      </IndexPage>
    );
  }
}
