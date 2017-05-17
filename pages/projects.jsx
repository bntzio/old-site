import React from 'react';
import Helmet from 'react-helmet';
import styled, { injectGlobal } from 'styled-components';
import { config } from 'config';

import Header from '../components/Header';
import ProjectsHero from '../components/ProjectsHero';
import Wrapper from '../components/Wrapper';
import About from '../components/About';
import Repository from '../components/Repository';

export default class Projects extends React.Component {
  render() {
    return (
      <MainContainer>
        <Helmet title={config.siteTitle} meta={[{ 'name': 'description', 'content': config.siteDescription }]} />
        <Header background="black" />
        <ProjectsHero />
        <Wrapper>
          <About />
          <Repository />
        </Wrapper>
      </MainContainer>
    );
  }
}

injectGlobal`
  .overflowHidden {
    position: relative;
    overflow: hidden;
    height: 100%;
  }
`;

const MainContainer = styled.div`
  display: block;
  background: black;
`;
