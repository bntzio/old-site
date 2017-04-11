import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { MainPage } from '../components/styled/';
import Hero from '../components/Hero';

export default class Index extends React.Component {
  render() {
    return (
      <MainPage fluid>
        <Helmet title={config.siteTitle} meta={[{ 'name': 'description', 'content': config.siteDescription }]} />
        <Hero />
      </MainPage>
    );
  }
}
