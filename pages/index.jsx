import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { IndexPage } from '../components/styled/';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default class Index extends React.Component {
  render() {
    return (
      <IndexPage fluid>
        <Helmet title={config.siteTitle} meta={[{ 'name': 'description', 'content': config.siteDescription }]} />
        <Hero />
        <About />
        <Skills />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </IndexPage>
    );
  }
}
