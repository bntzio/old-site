import React from 'react';
import * as skills from '../helpers/skills.yaml';
import {
  SectionPage,
  SectionPageContainer,
  Row,
  Column,
  SkillsSectionTitle,
  SkillsListContainer,
  SkillsList,
  SkillsListItem,
  SkillIcon,
  PrimaryButtonContainer,
  PrimaryButton
} from './styled/';

export default class AboutSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMoreSkills: false };
    this.handleShowMoreSkills = this.handleShowMoreSkills.bind(this);
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
  handleShowMoreSkills() {
    this.setState({ showMoreSkills: !this.state.showMoreSkills });
  }

  render() {
    const renderAllSkills = () => {
      if (this.state.showMoreSkills === true) {
        return (
          <Row>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.heroku } } />
                <SkillsListItem>Heroku</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.postgresql } } />
                <SkillsListItem>PostgreSQL</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.mysql } } />
                <SkillsListItem>MySQL</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.mongodb } } />
                <SkillsListItem>MongoDB</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.haml } } />
                <SkillsListItem>Haml</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.pug } } />
                <SkillsListItem>Pug</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.graphql } } />
                <SkillsListItem>GraphQL</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.firebase } } />
                <SkillsListItem>Firebase</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.redis } } />
                <SkillsListItem>Redis</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.vim } } />
                <SkillsListItem>Vim</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon stroke="white" dangerouslySetInnerHTML={ { __html: skills.json } } />
                <SkillsListItem>JSON</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.c } } />
                <SkillsListItem>C</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.chai } } />
                <SkillsListItem>Chai</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.sidekiq } } />
                <SkillsListItem>Sidekiq</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.electron } } />
                <SkillsListItem>Electron</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.eslint } } />
                <SkillsListItem>ESLint</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.expo } } />
                <SkillsListItem>Expo</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon fill="white" stroke="white" dangerouslySetInnerHTML={ { __html: skills.express } } />
                <SkillsListItem>Express</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.jekyll } } />
                <SkillsListItem>Jekyll</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillsListItem>Gatsby</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.karma } } />
                <SkillsListItem>Karma</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon stroke="white" fill="white" dangerouslySetInnerHTML={ { __html: skills.mixpanel } } />
                <SkillsListItem>Mixpanel</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon fill="white" stroke="white" dangerouslySetInnerHTML={ { __html: skills.markdown } } />
                <SkillsListItem>Markdown</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.middleman } } />
                <SkillsListItem>Middleman</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.meteor } } />
                <SkillsListItem>Meteor</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.mocha } } />
                <SkillsListItem>Mocha</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillsListItem>Hugo</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.ember } } />
                <SkillsListItem>Ember</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.og } } />
                <SkillsListItem>Open Graph</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.oauth } } />
                <SkillsListItem>OAuth</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillsListItem>Elixir</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.phoenix } } />
                <SkillsListItem>Phoenix</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.preact } } />
                <SkillsListItem>Preact</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.rails } } />
                <SkillsListItem>Rails</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.reactRouter } } />
                <SkillsListItem>React Router</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillsListItem>React Native</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.segment } } />
                <SkillsListItem>Segment</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.mandrill } } />
                <SkillsListItem>Mandrill</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.socketio } } />
                <SkillsListItem>Socket.io</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillsListItem>Next</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.travis } } />
                <SkillsListItem>Travis CI</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.jenkins } } />
                <SkillsListItem>Jenkins</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.rubygems } } />
                <SkillsListItem>RubyGems</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.docker } } />
                <SkillsListItem>Docker</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.digitalocean } } />
                <SkillsListItem>Digital Ocean</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.vagrant } } />
                <SkillsListItem>Vagrant</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.stripe } } />
                <SkillsListItem>Stripe</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.parse } } />
                <SkillsListItem>Parse</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.twilio } } />
                <SkillsListItem>Twilio</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillsListItem>RSpec</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillsListItem>Capybara</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillsListItem>Factory Girl</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillsListItem>Ava</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.cucumber } } />
                <SkillsListItem>Cucumber</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillsListItem>APIs</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.wordpress } } />
                <SkillsListItem>Wordpress</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillsListItem>Flexbox</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.unity } } />
                <SkillsListItem>Unity3D</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillsListItem>C#</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.swift } } />
                <SkillsListItem>Swift</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillsListItem>XCode</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillsListItem>Processing</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.sketch } } />
                <SkillsListItem>Sketch</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.yarn } } />
                <SkillsListItem>Yarn</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.flux } } />
                <SkillsListItem>Flux</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.ansible } } />
                <SkillsListItem>Ansible</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.aws } } />
                <SkillsListItem>AWS</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.atom } } />
                <SkillsListItem>Atom</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.capistrano } } />
                <SkillsListItem>Capistrano</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.chrome } } />
                <SkillsListItem>Chrome</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.codeclimate } } />
                <SkillsListItem>Code Climate</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.codeship } } />
                <SkillsListItem>CodeShip</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.jasmine } } />
                <SkillsListItem>Jasmine</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.jest } } />
                <SkillsListItem>Jest</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.neat } } />
                <SkillsListItem>Neat</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.ruby } } />
                <SkillsListItem>Ruby</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.terminal } } />
                <SkillsListItem>Terminal</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillsListItem>Unix</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillsListItem>Responsive Design</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillsListItem>Mobile First</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillsListItem>Growth Hacking</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillsListItem>GSAP</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillsListItem>ScrollMagic</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillsListItem>Web Animations</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
          </Row>
        );
      }
    };

    return (
      <SectionPage fluid>
        <SectionPageContainer id="skillsPageContainer">
          <Row divisions={12}>
            <Column className="textCenter noPadding">
              <SkillsSectionTitle className="primaryFont">What I know</SkillsSectionTitle>
            </Column>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold" id="skill1">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.javascript } } />
                <SkillsListItem>Javascript</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold" id="skill2">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.react } } />
                <SkillsListItem>React</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold" id="skill3">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.vue } } />
                <SkillsListItem>Vue</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold" id="skill4">
              <SkillsList className="skillItem animated">
                <SkillIcon stroke="white" fill="white" dangerouslySetInnerHTML={ { __html: skills.jquery } } />
                <SkillsListItem>jQuery</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold" id="skill5">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.redux } } />
                <SkillsListItem>Redux</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.webpack } } />
                <SkillsListItem>Webpack</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.gulp } } />
                <SkillsListItem>Gulp</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.babel } } />
                <SkillsListItem>Babel</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.browserify } } />
                <SkillsListItem>Browserify</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.yeoman } } />
                <SkillsListItem>Yeoman</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.bower } } />
                <SkillsListItem>Bower</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.grunt } } />
                <SkillsListItem>Grunt</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.flow } } />
                <SkillsListItem>Flow</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.nodejs } } />
                <SkillsListItem>NodeJS</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.html5 } } />
                <SkillsListItem>HTML</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.css3 } } />
                <SkillsListItem>CSS</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.foundation } } />
                <SkillsListItem>Foundation</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.bootstrap } } />
                <SkillsListItem>Bootstrap</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.materialize } } />
                <SkillsListItem>Materialize</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.postcss } } />
                <SkillsListItem>PostCSS</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon stroke="white" fill="white" dangerouslySetInnerHTML={ { __html: skills.cssnext } } />
                <SkillsListItem>CSSNext</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.autoprefixer } } />
                <SkillsListItem>Autoprefixer</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon stroke="white" fill="white" dangerouslySetInnerHTML={ { __html: skills.bem } } />
                <SkillsListItem>BEM</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.sass } } />
                <SkillsListItem>Sass</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon stroke="white" fill="white" dangerouslySetInnerHTML={ { __html: skills.stylus } } />
                <SkillsListItem>Stylus</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.bourbon } } />
                <SkillsListItem>Bourbon</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.coffeescript } } />
                <SkillsListItem>CoffeeScript</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-end" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.git } } />
                <SkillsListItem>Git</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="center" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.github } } />
                <SkillsListItem>Github</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>
            <SkillsListContainer justifyContent="flex-start" className="secondaryFont bold">
              <SkillsList className="skillItem animated">
                <SkillIcon dangerouslySetInnerHTML={ { __html: skills.gitlab } } />
                <SkillsListItem>Gitlab</SkillsListItem>
              </SkillsList>
            </SkillsListContainer>

            {renderAllSkills()}

            <PrimaryButtonContainer>
              <PrimaryButton onClick={this.handleShowMoreSkills}>
                { this.state.showMoreSkills === true ? 'Show 84 Less' : 'Show 84 More' }
              </PrimaryButton>
            </PrimaryButtonContainer>
          </Row>
        </SectionPageContainer>
      </SectionPage>
    );
  }
}
