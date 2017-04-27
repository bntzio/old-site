import React from 'react';
import * as icons from '../helpers/icons.yaml';
import {
  SectionPage,
  SectionPageContainer,
  Row,
  Column,
  SectionTitle,
  SectionDescription,
  ContactContainer,
  ContactList,
  ContactListItem,
  ContactSocialIcon,
  ContactSocialName
} from './styled/';

export default class ContactSection extends React.Component {
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
      <SectionPage fluid>
        <SectionPageContainer id="contactPageContainer">
          <Row divisions={12}>
            <Column>
              <SectionTitle className="primaryFont">Contact</SectionTitle>
              <SectionDescription className="secondaryFont">
                You can connect with me on any of these networks! I love to talk! 😄
              </SectionDescription>
              <ContactContainer>
                <ContactList className="secondaryFont" id="contactList">
                  <ContactListItem href="https://twitter.com/bntzio" target="_blank" data-social-item="twitter">
                    <ContactSocialIcon fill="white" dangerouslySetInnerHTML={ { __html: icons.twitter } } />
                    <ContactSocialName>Twitter</ContactSocialName>
                  </ContactListItem>
                  <ContactListItem href="https://facebook.com/bntzio" target="_blank" data-social-item="facebook">
                    <ContactSocialIcon fill="white" dangerouslySetInnerHTML={ { __html: icons.facebook } } />
                    <ContactSocialName>Facebook</ContactSocialName>
                  </ContactListItem>
                  <ContactListItem href="https://instagram.com/bntzio" target="_blank" data-social-item="instagram">
                    <ContactSocialIcon fill="white" dangerouslySetInnerHTML={ { __html: icons.instagram } } />
                    <ContactSocialName>Instagram</ContactSocialName>
                  </ContactListItem>
                  <ContactListItem href="https://www.snapchat.com/add/bntz.io" target="_blank" data-social-item="snapchat">
                    <ContactSocialIcon fill="white" dangerouslySetInnerHTML={ { __html: icons.snapchat } } />
                    <ContactSocialName>Snapchat</ContactSocialName>
                  </ContactListItem>
                  <ContactListItem href="mailto:hello@bntz.io?Subject=Hey%20there!" target="_top" data-social-item="email">
                    <ContactSocialIcon fill="white" dangerouslySetInnerHTML={ { __html: icons.envelope } } />
                    <ContactSocialName>Email</ContactSocialName>
                  </ContactListItem>
                </ContactList>
              </ContactContainer>
            </Column>
          </Row>
        </SectionPageContainer>
      </SectionPage>
    );
  }
}
