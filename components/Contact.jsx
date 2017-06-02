import React from 'react';
import styled from 'styled-components';
import { Row, Column } from '../utils/grid';
import { rem, polyRem, media } from '../utils/styleUtils';
import * as icons from '../helpers/icons.yaml';

export default class Contact extends React.Component {
  componentDidMount() {
    const controller = new ScrollMagic.Controller();
    const scene1 = new ScrollMagic.Scene({
      triggerElement: '#contactPageContainer'
    })
    .setClassToggle('#contactPageContainer', 'fade-in')
    .addTo(controller);

    const scene2 = new ScrollMagic.Scene({
      triggerElement: '#contactPageContainer'
    })
    .setClassToggle('#projectsPageContainer', 'fade-out')
    .addTo(controller);

    if (process.env.NODE_ENV !== 'production') {
      scene1.addIndicators();
      scene2.addIndicators();
    }
  }
  render() {
    return (
      <ContactSection fluid>
        <ContactSectionContainer id="contactPageContainer">
          <Row>
            <Column>
              <ContactTitle className="primaryFont">Contact</ContactTitle>
              <ContactDescription className="secondaryFont">
                You can connect with me on any of these networks! I love to talk! 😄
              </ContactDescription>
              <ContactContainer>
                <ContactList className="secondaryFont" id="contactList">
                  <ContactListItem href="https://twitter.com/bntzio" target="_blank">
                    <ContactSocialIcon fill="white" dangerouslySetInnerHTML={ { __html: icons.twitter } } />
                    <ContactSocialName>Twitter</ContactSocialName>
                  </ContactListItem>
                  <ContactListItem href="https://facebook.com/bntzio" target="_blank">
                    <ContactSocialIcon fill="white" dangerouslySetInnerHTML={ { __html: icons.facebook } } />
                    <ContactSocialName>Facebook</ContactSocialName>
                  </ContactListItem>
                  <ContactListItem href="https://instagram.com/bntzio" target="_blank">
                    <ContactSocialIcon fill="white" dangerouslySetInnerHTML={ { __html: icons.instagram } } />
                    <ContactSocialName>Instagram</ContactSocialName>
                  </ContactListItem>
                  <ContactListItem href="https://www.snapchat.com/add/bntz.io" target="_blank">
                    <ContactSocialIcon fill="white" dangerouslySetInnerHTML={ { __html: icons.snapchat } } />
                    <ContactSocialName>Snapchat</ContactSocialName>
                  </ContactListItem>
                  <ContactListItem href="mailto:hello@bntz.io?Subject=Hey%20there!" target="_top">
                    <ContactSocialIcon fill="white" dangerouslySetInnerHTML={ { __html: icons.envelope } } />
                    <ContactSocialName>Email</ContactSocialName>
                  </ContactListItem>
                </ContactList>
              </ContactContainer>
            </Column>
          </Row>
        </ContactSectionContainer>
      </ContactSection>
    );
  }
}

const ContactSection = styled(Column)`
  transition: all 1s ease-out;
  ${polyRem('padding', 10, 20)};

  ${ media.tablet`
    ${polyRem('padding', 20, 40)};
  ` }

  ${ media.desktop`
    ${polyRem('padding', 30, 60)};
  ` }
`;

const ContactSectionContainer = styled.div`
  opacity: 0;
  transition: .7s ease-out all;
  position: relative;
`;

const ContactTitle = styled.h3`
  margin: 0;
  ${rem('font-size', 32)};
  ${rem('margin-bottom', 35)};
  color: white;
  display: inline-block;
`;

const ContactDescription = styled.p`
  margin: 0;
  color: white;
  ${rem('margin-bottom', 12.5)};
  font-size: ${props => props.small ? '14px' : '18px'};
`;

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  ${rem('margin-top', 35)};
  ${rem('margin-bottom', 35)};
`;

const ContactList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;

  ${ media.desktop`
    flex-direction: row;
  ` }
`;

const ContactListItem = styled.a`
  ${rem('margin-bottom', 20)};
  display: flex;
  cursor: pointer;
  color: white;
  text-decoration: none;
  transition: .7s all;

  ${ media.desktop`
    ${rem('margin-bottom', 0)};
    ${rem('margin-right', 20)};
  ` }

  &:hover, &:focus, &:visited {
    color: white;
    text-decoration: none;
  }
`;

const ContactSocialIcon = styled.div`
  display: flex;

  svg {
    ${rem('width', 16)};
    ${rem('height', 16)};

    path, polygon, polyline, rect, line, circle {
      transition: .7s all;
      fill: ${props => props.fill};
      stroke: ${props => props.stroke};
    }
  }
`;

const ContactSocialName = styled.div`
  display: flex;
  ${rem('margin-left', 5)};
`;
