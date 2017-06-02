import React from 'react';
import styled from 'styled-components';
import { rem, polyRem, media } from '../utils/styleUtils';
import { Column } from '../utils/grid';
import * as skills from '../helpers/skills.yaml';

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const controller = new ScrollMagic.Controller();

    const scene1 = new ScrollMagic.Scene({
      triggerElement: '#skillsPageContainer'
    })
    .setClassToggle('#skillsPageContainer', 'fade-in')
    .addTo(controller);

    const scene2 = new ScrollMagic.Scene({
      triggerElement: '#skillsPageContainer'
    })
    .setClassToggle('.skillItem', 'bounceIn')
    .addTo(controller);

    const scene3 = new ScrollMagic.Scene({
      triggerElement: '#skillsPageContainer'
    })
    .setClassToggle('#aboutPageContainer', 'fade-out')
    .addTo(controller);

    if (process.env.NODE_ENV !== 'production') {
      scene1.addIndicators();
      scene2.addIndicators();
      scene3.addIndicators();
    }
  }

  render() {
    return (
      <SkillsPage fluid>
        <SkillsContainer id="skillsPageContainer">
          <Column>
            <SkillsTitle className="primaryFont">Tools of the trade</SkillsTitle>
            <SkillsSubtitle>I mainly use the tools below to get the work done, among others.</SkillsSubtitle>
          </Column>
          <SkillsIcon dangerouslySetInnerHTML={ { __html: skills.ruby } } />
          <SkillsIcon dangerouslySetInnerHTML={ { __html: skills.rails } } />
          <SkillsIcon dangerouslySetInnerHTML={ { __html: skills.javascript } } />
          <SkillsIcon dangerouslySetInnerHTML={ { __html: skills.jquery } } />
          <SkillsIcon dangerouslySetInnerHTML={ { __html: skills.react } } />
          <SkillsIcon dangerouslySetInnerHTML={ { __html: skills.redux } } />
          <SkillsIcon dangerouslySetInnerHTML={ { __html: skills.nodejs } } />
          <SkillsIcon dangerouslySetInnerHTML={ { __html: skills.express } } />
          <SkillsIcon dangerouslySetInnerHTML={ { __html: skills.meteor } } />
          <SkillsIcon dangerouslySetInnerHTML={ { __html: skills.webpack } } />
          <SkillsIcon dangerouslySetInnerHTML={ { __html: skills.gulp } } />
          <SkillsIcon dangerouslySetInnerHTML={ { __html: skills.babel } } />
          <SkillsIcon dangerouslySetInnerHTML={ { __html: skills.browserify } } />
          <SkillsIcon dangerouslySetInnerHTML={ { __html: skills.html5 } } />
          <SkillsIcon dangerouslySetInnerHTML={ { __html: skills.css3 } } />
          <SkillsIcon dangerouslySetInnerHTML={ { __html: skills.foundation } } />
          <SkillsIcon dangerouslySetInnerHTML={ { __html: skills.bootstrap } } />
          <SkillsIcon dangerouslySetInnerHTML={ { __html: skills.postcss } } />
          <SkillsIcon dangerouslySetInnerHTML={ { __html: skills.sass } } />
          <SkillsIcon dangerouslySetInnerHTML={ { __html: skills.git } } />
          <SkillsIcon dangerouslySetInnerHTML={ { __html: skills.github } } />
          <SkillsIcon dangerouslySetInnerHTML={ { __html: skills.heroku } } />
          <SkillsIcon dangerouslySetInnerHTML={ { __html: skills.postgresql } } />
          <SkillsIcon dangerouslySetInnerHTML={ { __html: skills.digitalocean } } />
          <SkillsIcon dangerouslySetInnerHTML={ { __html: skills.mongodb } } />
          {/* <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.yeoman } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.bower } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.grunt } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.materialize } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.autoprefixer } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.bem } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.stylus } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.bourbon } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.gitlab } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.mysql } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.haml } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.pug } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.firebase } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.redis } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.vim } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.chai } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.sidekiq } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.eslint } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.expo } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.jekyll } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.karma } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.mixpanel } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.markdown } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.middleman } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.mocha } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.og } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.oauth } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.reactRouter } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.segment } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.mandrill } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.travis } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.rubygems } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.stripe } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.parse } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.twilio } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.cucumber } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.wordpress } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.yarn } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.atom } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.capistrano } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.chrome } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.neat } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.terminal } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.vue } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.flow } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.cssnext } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.coffeescript } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.graphql } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.json } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.c } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.electron } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.ember } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.phoenix } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.preact } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.socketio } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.jenkins } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.docker } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.vagrant } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.unity } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.swift } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.sketch } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.flux } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.ansible } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.aws } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.codeclimate } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.codeship } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.jasmine } } />
          <SkillsIcon hidden dangerouslySetInnerHTML={ { __html: skills.jest } } /> */}
        </SkillsContainer>
      </SkillsPage>
    );
  }
}

const SkillsPage = styled.section`
  transition: all 1s ease-out;

  ${polyRem('padding', 10, 20)};

  ${ media.tablet`
    ${polyRem('padding', 20, 40)};
  ` }

  ${ media.desktop`
    ${polyRem('padding', 30, 60)};
  ` }
`;

const SkillsTitle = styled.h4`
  margin: 0;
  ${rem('font-size', 32)};
  ${rem('margin-bottom', 35)};
  color: white;
  display: inline-block;
  text-align: center;
`;

const SkillsSubtitle = styled.p`
  margin: 0;
  color: white;
  ${rem('margin-bottom', 30)};
  font-size: ${props => props.small ? '14px' : '18px'};
`;

const SkillsContainer = styled.div`
  opacity: 0;
  transition: .7s ease-out all;
  position: relative;
  text-align: center;
  ${rem('margin-bottom', 30)};
`;

const SkillsIcon = styled.span`
  display: ${props => props.hidden ? 'none' : 'inline'};
  ${rem('margin', 2.5)};

  svg {
    ${rem('width', 40)};
    ${rem('height', 40)};
  }
`;
