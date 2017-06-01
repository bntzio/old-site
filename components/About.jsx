import React from 'react';
import styled from 'styled-components';
import { Row, Column } from '../utils/grid';
import { rem, polyRem, media, bgColorB } from '../utils/styleUtils';

export default class About extends React.Component {
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
      <AboutSection fluid>
        <AboutContainer id="aboutPageContainer">
          <Row>
            <Column>
              <AboutTitle className="primaryFont">About Me</AboutTitle>
              <AboutDescription className="secondaryFont">
                My name is Enrique, I'm a 22 years old guy and school dropout who is self-taught at everything.
              </AboutDescription>
              <AboutDescription className="secondaryFont">
                I'm a coder, designer and growth hacker who loves making things.
              </AboutDescription>
              <AboutDescription className="secondaryFont">
                In short, I'm a digital maker.
              </AboutDescription>
              <br/>
              <AboutDescription small className="secondaryFont">
                <em>* Now you kinda know me, but you can always read more things about me or know what I'm doing right now.</em>
              </AboutDescription>
            </Column>
          </Row>
        </AboutContainer>
      </AboutSection>
    );
  }
}

const AboutSection = styled(Column)`
  background-color: ${bgColorB};
  transition: all 1s ease-out;
  ${polyRem('padding', 10, 20)};

  ${ media.tablet`
    padding: 20px 40px;
  ` };

  ${ media.desktop`
    padding: 30px 60px;
  ` };
`;

const AboutContainer = styled.div`
  opacity: 0;
  transition: .7s ease-out all;
  position: relative;
`;


const AboutTitle = styled.h4`
  margin: 0;
  ${rem('font-size', 32)};
  ${rem('margin-bottom', 35)};
  color: white;
  display: inline-block;
  text-align: center;

  ${ media.desktop`
    text-align: left;
  ` };
`;

const AboutDescription = styled.p`
  margin: 0;
  color: white;
  ${rem('margin-bottom', 12.5)};
  font-size: ${props => props.small ? '14px' : '18px'};
`;
