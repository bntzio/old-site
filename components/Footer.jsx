import React from 'react';
import styled from 'styled-components';
import { Row, Column } from '../utils/grid';
import { rem, polyRem, media } from '../utils/styleUtils';
import * as icons from '../helpers/icons.yaml';

export default class Footer extends React.Component {
  componentDidMount() {
    const controller = new ScrollMagic.Controller();
    const scene1 = new ScrollMagic.Scene({
      triggerElement: '#contactList'
    })
    .setClassToggle('#footerPageContainer', 'jump-in-up')
    .addTo(controller);

    if (process.env.NODE_ENV !== 'production') {
      scene1.addIndicators();
    }
  }
  render() {
    return (
      <FooterSection fluid>
        <FooterContainer id="footerPageContainer">
          <FooterInnerContainer>
            <FooterInnerContainerSocial>
              <FooterTitle className="logo">Enrique Benitez</FooterTitle>
              <FooterDescription className="primaryFont">
                Full-stack developer and maker
              </FooterDescription>
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
            </FooterInnerContainerSocial>
            <FooterInnerContainerLinks>
              <MainFooterLinkContainer>
                <FooterLinkContainer className="nav nav-main">
                  <FooterLink href="#">Blog</FooterLink>
                  <FooterLink href="#">Projects</FooterLink>
                  <FooterLink href="#">Experiments</FooterLink>
                  <FooterLink href="#">Courses</FooterLink>
                  <FooterLink href="#">Newsletter</FooterLink>
                  <FooterLink href="#">About</FooterLink>
                </FooterLinkContainer>
                <FooterLinkContainer className="nav nav-secondary">
                  <FooterLink href="#">Now</FooterLink>
                  <FooterLink href="#">Public journal</FooterLink>
                  <FooterLink href="#">Book reviews</FooterLink>
                  <FooterLink href="#">Best articles</FooterLink>
                  <FooterLink href="#">Tools</FooterLink>
                </FooterLinkContainer>
              </MainFooterLinkContainer>
            </FooterInnerContainerLinks>
          </FooterInnerContainer>
        </FooterContainer>
      </FooterSection>
    );
  }
}

const FooterSection = styled(Column)`
  background: #252525;
  transition: all 1s ease-out;
  text-align: center;
  ${rem('padding', 20)};

  ${ media.tablet`
    ${polyRem('padding', 20, 40)};
  ` }

  ${ media.desktop`
    ${rem('padding', 30, 60)};
  ` }
`;

const FooterContainer = styled.div`
  opacity: 0;
  transition: .7s ease-out all;
  position: relative;
  transform: translateY(100px);
  ${polyRem('padding', 0, 50)};
`;

const FooterInnerContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${ media.desktop`
    flex-direction: row;
    justifyContent: space-around;
  ` }
`;

const FooterTitle = styled.h2`
  margin: 0;
  ${rem('font-size', 32)};
  ${rem('margin-bottom', 6)};
  color: white;
  display: inline-block;
`;

const FooterDescription = styled.p`
  margin: 0;
  color: white;
  ${rem('margin-bottom', 20)};
  font-size: ${props => props.small ? '14px' : '18px'};
`;

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SocialMediaList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const SocialMediaListItem = styled.li`
`;

const SocialMediaLink = styled.a`
`;

const SocialMediaIcon = styled.span`
  svg {
    ${rem('width', 20)};
    ${rem('height', 20)};

    &:hover {
      path, polygon, polyline, rect, line, circle {
        fill: ${ props => props.fill };
      }
    }

    path, polygon, polyline, rect, line, circle {
      transition: .5s all;
      fill: white;
    }
  }
`;

const MainFooterLinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  ${rem('margin-top', 25)};
`;

const FooterLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FooterLink = styled.a`
  ${rem('font-size', 18)};
  ${rem('margin-bottom', 15)};
  color: white;
  text-decoration: none;

  &:hover, &:visited, &:focus {
    color: white;
    text-decoration: none;
  }
`;

const FooterInnerContainerSocial = styled(Column)`
  width: 100%;

  ${ media.desktop`
    width: 33%;
  ` }
`;

const FooterInnerContainerLinks = styled(Column)`
width: 100%;

${ media.desktop`
  width: 67%;
` }
`;
