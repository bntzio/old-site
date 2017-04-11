import React from 'react';
import {
  AboutPage,
  AboutPageContainer,
  ProfileImage,
  Row,
  Column,
  AboutPageTitle,
  SectionDescription
} from './styled/';

export default class AboutSection extends React.Component {
  componentDidMount() {
    const controller = new ScrollMagic.Controller();
    const scene1 = new ScrollMagic.Scene({
      triggerElement: '#aboutPageContainer'
    })
    .setClassToggle('#aboutPageContainer', 'fade-in')
    .addTo(controller);

    const scene2 = new ScrollMagic.Scene({
      triggerElement: '#aboutPageContainer'
    })
    .setClassToggle('#heroPageContainer', 'fade-out')
    .addTo(controller);

    if (process.env.NODE_ENV !== 'production') {
      scene1.addIndicators();
      scene2.addIndicators();
    }
  }
  render() {
    return (
      <AboutPage fluid>
        <AboutPageContainer id="aboutPageContainer">
          <Row divisions={12}>
            <Column>
              <ProfileImage small />
              <AboutPageTitle pushLeft className="primaryFont">whoami</AboutPageTitle>
              <SectionDescription className="secondaryFont">
                My name is Enrique, I'm a 22 years old guy and school dropout who is self-taught at everything.
              </SectionDescription>
              <SectionDescription className="secondaryFont">
                I'm a coder, designer and growth hacker who loves making things.
              </SectionDescription>
              <SectionDescription className="secondaryFont">
                In short, I'm a digital maker.
              </SectionDescription>
              <br/>
              <SectionDescription small className="secondaryFont">
                <em>* Now you kinda know me, but you can always read more things about me or know what I'm doing right now.</em>
              </SectionDescription>
            </Column>
          </Row>
        </AboutPageContainer>
      </AboutPage>
    );
  }
}
