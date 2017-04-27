import React from 'react';
import * as icons from '../helpers/icons.yaml';
import {
  FooterSectionPage,
  FooterPageContainer,
  Row,
  Column,
  SectionTitle,
  SectionDescription,
  SocialMediaContainer,
  SocialMediaList,
  SocialMediaListItem,
  SocialMediaLink,
  SocialMediaIcon,
  FooterLinkContainer,
  FooterLink
} from './styled/';

export default class ContactSection extends React.Component {
  componentDidMount() {
    const controller = new ScrollMagic.Controller();
    const scene1 = new ScrollMagic.Scene({
      triggerElement: '#contactList'
    })
    .setClassToggle('#footerPageContainer', 'jump-in-up')
    .addTo(controller);

    if (process.env.NODE_ENV !== 'production') {
      scene1.addIndicators();
      scene2.addIndicators();
    }
  }
  render() {
    return (
      <FooterSectionPage fluid>
        <FooterPageContainer id="footerPageContainer">
          <Row divisions={12}>
            <Column xs={12} lg={4}>
              <SectionTitle className="logo footer-logo">Enrique Benitez</SectionTitle>
              <SectionDescription className="primaryFont">
                Full-stack developer and maker
              </SectionDescription>
              <SocialMediaContainer>
                <SocialMediaList>
                  <SocialMediaListItem>
                    <SocialMediaLink href="https://facebook.com/bntzio" target="_blank">
                      <SocialMediaIcon dangerouslySetInnerHTML={ { __html: icons.facebook } } fill="#3b5998" />
                    </SocialMediaLink>
                  </SocialMediaListItem>
                </SocialMediaList>
                <SocialMediaList>
                  <SocialMediaListItem>
                    <SocialMediaLink href="https://twitter.com/bntzio" target="_blank">
                      <SocialMediaIcon dangerouslySetInnerHTML={ { __html: icons.twitter } } fill="#1da1f2" />
                    </SocialMediaLink>
                  </SocialMediaListItem>
                </SocialMediaList>
                <SocialMediaList>
                  <SocialMediaListItem>
                    <SocialMediaLink href="https://instagram.com/bntzio" target="_blank">
                      <SocialMediaIcon dangerouslySetInnerHTML={ { __html: icons.instagram } } fill="#e1306c" />
                    </SocialMediaLink>
                  </SocialMediaListItem>
                </SocialMediaList>
                <SocialMediaList>
                  <SocialMediaListItem>
                    <SocialMediaLink href="https://snapchat.com/add/bntz.io" target="_blank">
                      <SocialMediaIcon dangerouslySetInnerHTML={ { __html: icons.snapchat } } fill="#fffc00" />
                    </SocialMediaLink>
                  </SocialMediaListItem>
                </SocialMediaList>
                <SocialMediaList>
                  <SocialMediaListItem>
                    <SocialMediaLink href="https://codepen.io/bntzio" target="_blank">
                      <SocialMediaIcon dangerouslySetInnerHTML={ { __html: icons.codepen } } fill="#ae63e4" />
                    </SocialMediaLink>
                  </SocialMediaListItem>
                </SocialMediaList>
                <SocialMediaList>
                  <SocialMediaListItem>
                    <SocialMediaLink href="https://dribbble.com/bntzio" target="_blank">
                      <SocialMediaIcon dangerouslySetInnerHTML={ { __html: icons.dribbble } } fill="#ea4c89" />
                    </SocialMediaLink>
                  </SocialMediaListItem>
                </SocialMediaList>
              </SocialMediaContainer>
              <SocialMediaContainer className="pullUp">
                <SocialMediaList>
                  <SocialMediaListItem>
                    <SocialMediaLink href="https://medium.com/@bntzio" target="_blank">
                      <SocialMediaIcon dangerouslySetInnerHTML={ { __html: icons.medium } } fill="#00ab6c" />
                    </SocialMediaLink>
                  </SocialMediaListItem>
                </SocialMediaList>
                <SocialMediaList>
                  <SocialMediaListItem>
                    <SocialMediaLink href="https://producthunt.com/@bntzio" target="_blank">
                      <SocialMediaIcon dangerouslySetInnerHTML={ { __html: icons.producthunt } } fill="#da552f" />
                    </SocialMediaLink>
                  </SocialMediaListItem>
                </SocialMediaList>
                <SocialMediaList>
                  <SocialMediaListItem>
                    <SocialMediaLink href="https://quora.com/profile/Enrique-Benitez-3" target="_blank">
                      <SocialMediaIcon dangerouslySetInnerHTML={ { __html: icons.quora } } fill="#a82400" />
                    </SocialMediaLink>
                  </SocialMediaListItem>
                </SocialMediaList>
                <SocialMediaList>
                  <SocialMediaListItem>
                    <SocialMediaLink href="https://reddit.com/user/bntzio" target="_blank">
                      <SocialMediaIcon dangerouslySetInnerHTML={ { __html: icons.reddit } } fill="#ff4500" />
                    </SocialMediaLink>
                  </SocialMediaListItem>
                </SocialMediaList>
                <SocialMediaList>
                  <SocialMediaListItem>
                    <SocialMediaLink href="http://stackoverflow.com/story/bntzio" target="_blank">
                      <SocialMediaIcon dangerouslySetInnerHTML={ { __html: icons.stackoverflow } } fill="#f48024" />
                    </SocialMediaLink>
                  </SocialMediaListItem>
                </SocialMediaList>
                <SocialMediaList>
                  <SocialMediaListItem>
                    <SocialMediaLink href="#" target="_blank">
                      <SocialMediaIcon dangerouslySetInnerHTML={ { __html: icons.youtube } } fill="#cd201f" />
                    </SocialMediaLink>
                  </SocialMediaListItem>
                </SocialMediaList>
              </SocialMediaContainer>
            </Column>
            <Column xs={12} lg={4}>
              <FooterLinkContainer className="nav">
                <FooterLink href="#">Blog</FooterLink>
                <FooterLink href="#">Projects</FooterLink>
                <FooterLink href="#">Experiments</FooterLink>
                <FooterLink href="#">Courses</FooterLink>
                <FooterLink href="#">Newsletter</FooterLink>
                <FooterLink href="#">About</FooterLink>
              </FooterLinkContainer>
            </Column>
            <Column xs={12} lg={4}>
              <FooterLinkContainer className="nav">
                <FooterLink href="#">Now</FooterLink>
                <FooterLink href="#">Public journal</FooterLink>
                <FooterLink href="#">Book reviews</FooterLink>
                <FooterLink href="#">Best articles</FooterLink>
                <FooterLink href="#">Tools</FooterLink>
              </FooterLinkContainer>
            </Column>
          </Row>
        </FooterPageContainer>
      </FooterSectionPage>
    );
  }
}
