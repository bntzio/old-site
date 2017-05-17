import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { IndexPage } from '../components/styled/';
import MainHero from '../components/MainHero';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default class Index extends React.Component {
  render() {
    return (
      <IndexPage fluid>
        <Helmet title={config.siteTitle} meta={[{ 'name': 'description', 'content': config.siteDescription }]} />
        <MainHero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </IndexPage>
    );
  }
}
