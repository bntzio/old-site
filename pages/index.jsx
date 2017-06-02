import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { IndexPage } from '../components/styled/';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

// place globalStyles in here for now!
require('../utils/globalStyles');

export default class Index extends React.Component {
  componentDidMount() {
    skrollr.init({ forceHeight: false });
  }

  render() {
    return (
      <IndexPage fluid
        data-0="background-color: rgb(97, 20, 204);"
        data-550="background-color: rgb(0, 156, 243);"
        data-1050="background-color: rgb(255, 191, 2);"
        data-1550="background-color: rgb(249, 97, 91);"
      >
        <Helmet title={config.siteTitle} meta={[{ 'name': 'description', 'content': config.siteDescription }]} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ContactSection />
        <Footer />
      </IndexPage>
    );
  }
}
