import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { rem, polyRem, media, primaryColor } from './../utils/style-utils';
import * as icons from '../helpers/icons.yaml';

export default class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  componentDidMount() {
    this.startIntroAnimation();
  }
  startOverlayAnimation() {
    const overlayIcon = document.getElementById('overlayIcon');
    TweenLite.to(overlayIcon, .6, {
      width: '200px',
      height: '200px',
      scale: 12,
      ease: Power0.easeNone,
      onStart: this.slideInMenuItems()
    });
  }
  endOverlayAnimation() {
    const overlayIcon = document.getElementById('overlayIcon');
    TweenLite.to(overlayIcon, .6, {
      scale: 0,
      ease: Power0.easeNone,
      onStart: this.slideOutMenuItems()
    });
  }
  slideInMenuItems() {
    const tl = new TimelineLite();
    const overlayContent = document.getElementById('overlayContent');
    const menuItems = document.getElementsByClassName('overlayItem');
    TweenLite.set(overlayContent, { scale: 1 });
    tl.staggerTo(menuItems, .2, {
      x: -280,
      autoAlpha: 1,
      ease: Power0.easeNone
    }, .1);
  }
  slideOutMenuItems() {
    const tl = new TimelineLite();
    const menuItems = document.getElementsByClassName('overlayItem');
    tl.staggerTo(menuItems, .2, {
      x: 160,
      autoAlpha: 0,
      ease: Power0.easeNone
    }, .1, '+=0', this.hideOverlayContent);
  }
  hideOverlayContent() {
    const overlayContent = document.getElementById('overlayContent');
    TweenLite.set(overlayContent, { scale: 0 });
  }
  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
    const html = document.querySelector('html'); // or document.body.parentNode;
    const body = document.body;
    if (this.state.showMenu === false) {
      html.classList.add('overflowHidden');
      body.classList.add('overflowHidden');
      this.startOverlayAnimation();
    } else {
      html.classList.remove('overflowHidden');
      body.classList.remove('overflowHidden');
      this.endOverlayAnimation();
    }
  }
  startMenuAnimation() {
    const navItems = document.getElementsByClassName('nav-item');
    const tl = new TimelineLite();
    tl.staggerTo(navItems, .4, {
      x: -135,
      ease: Power0.easeNone
    }, .2);
  }
  startIntroAnimation() {
    const logo = document.getElementsByClassName('logo');
    const description = document.getElementsByClassName('description');
    const subtitle = document.getElementsByClassName('subtitle');
    const message = document.getElementsByClassName('message');
    const objs = [subtitle, description];
    TweenMax.staggerFrom(objs, 1, { y: -25, ease: Power1.easeNone, autoAlpha: 0 }, .5);
    TweenMax.staggerFrom(message, 1.4, { autoAlpha: 0, delay: 2.8 });
    TweenMax.staggerFrom(logo, .7, {
      autoAlpha: 0,
      ease: Power0.easeNone,
      onComplete: this.startMenuAnimation
    });
  }
  render() {
    return (
      <HeroPage fluid>
        <HeroPageContainer id="heroPageContainer">
          <OverlayContent id="overlayContent">
            <Column>
              <OverlayMenu id="overlayMenu">
                <OverlayMenuItem className="overlayItem">
                  <Column>
                    <Link to="#">Blog</Link>
                  </Column>
                  <Column>
                    <Icon small stroke color="white" dangerouslySetInnerHTML={ { __html: icons.blog } } />
                  </Column>
                </OverlayMenuItem>
                <OverlayMenuItem className="overlayItem">
                  <Column>
                    <Link to="#">Projects</Link>
                  </Column>
                  <Column>
                    <Icon small stroke color="white" dangerouslySetInnerHTML={ { __html: icons.projects } } />
                  </Column>
                </OverlayMenuItem>
                <OverlayMenuItem className="overlayItem">
                  <Column>
                    <Link to="#">Experiments</Link>
                  </Column>
                  <Column>
                    <Icon small stroke color="white" dangerouslySetInnerHTML={ { __html: icons.experiments } } />
                  </Column>
                </OverlayMenuItem>
                <OverlayMenuItem className="overlayItem">
                  <Column>
                    <Link to="#">Courses</Link>
                  </Column>
                  <Column>
                    <Icon small stroke color="white" dangerouslySetInnerHTML={ { __html: icons.courses } } />
                  </Column>
                </OverlayMenuItem>
                <OverlayMenuItem className="overlayItem">
                  <Column>
                  </Column>
                    <Link to="#">Newsletter</Link>
                  <Column>
                    <Icon small stroke color="white" dangerouslySetInnerHTML={ { __html: icons.newsletter } } />
                  </Column>
                </OverlayMenuItem>
                <OverlayMenuItem className="overlayItem">
                  <Column>
                    <Link to="#">About</Link>
                  </Column>
                  <Column>
                    <Icon small stroke color="white" dangerouslySetInnerHTML={ { __html: icons.about } } />
                  </Column>
                </OverlayMenuItem>
              </OverlayMenu>
            </Column>
          </OverlayContent>
          <Row>
            <Column>
              <SiteTitle className="logo">Enrique Benitez</SiteTitle>
            </Column>
            <IconContainer>
              <Icon onClick={this.toggleMenu} pointer small fill color="white" dangerouslySetInnerHTML={ { __html: this.state.showMenu ? icons.close : icons.menu } } />
              <OverlayIcon id="overlayIcon" dangerouslySetInnerHTML={ { __html: icons.overlay } } />
            </IconContainer>
          </Row>
          <Row>
            <Column>
              <SiteSubtitle className="subtitle">I Make Stuff.</SiteSubtitle>
              <SiteDescription className="description">
                I'm a maker who crafts beautiful digital products.
              </SiteDescription>
              <SiteMessage className="message">
                Scroll down to learn more, or say <Link to="/goodbye/">goodbye</Link>.
              </SiteMessage>
            </Column>
            <SiteNav className="nav">
              <SiteNavItem className="nav-item"><Link to="#">Blog</Link></SiteNavItem>
              <SiteNavItem className="nav-item"><Link to="/projects/">Projects</Link></SiteNavItem>
              <SiteNavItem className="nav-item"><Link to="#">Experiments</Link></SiteNavItem>
              <SiteNavItem className="nav-item"><Link to="#">Courses</Link></SiteNavItem>
              <SiteNavItem className="nav-item"><Link to="#">Newsletter</Link></SiteNavItem>
              <SiteNavItem className="nav-item"><Link to="#">About</Link></SiteNavItem>
            </SiteNav>
          </Row>
        </HeroPageContainer>
      </HeroPage>
    );
  }
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: ${props => props.fluid ? '0' : '20px'};
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const HeroPage = styled(Column)`
  background: ${primaryColor};

  ${rem('padding-top', 10)};
  ${rem('padding-right', 20)};
  ${rem('padding-bottom', 60)};
  ${rem('padding-left', 20)};

  ${ media.tablet`
    ${polyRem('padding', 20, 40)};
  `};
  ${ media.desktop`
    ${polyRem('padding', 30, 60)};
  `};
`;

const HeroPageContainer = styled.div`
  transition: .7s ease-out all;
`;

const OverlayContent = styled.div`
  position: absolute;
  z-index: 99;
  top: 150px;
  transform: scale(0);
  ${rem('top', 150)};
  ${rem('right', -270)};
`;

const OverlayMenu = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-right: 7.3%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${ media.desktop`
    display: none;
  ` }
`;

const OverlayMenuItem = styled.li`
  ${rem('font-size', 24)}
  ${rem('margin-bottom', 20)}
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  div:first-child {
    display: flex;
    justify-content: flex-end;
    padding: 0;
  }
  div:last-child {
    display: flex;
    justify-content: flex-start;
    padding: 0;
  }

  a {
    ${rem('margin-right', 10)}
    color: white;
    text-decoration: none;

    &:hover, &:visited, &:focus {
      color: white;
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Icon = styled.div`
  color: ${props => props.color};
  z-index: 99;

  svg {
    width: ${props => props.small ? '20px' : '30px'};
    cursor: ${props => props.pointer ? 'pointer' : 'auto'};
    path, polygon, polyline, rect, line, circle {
      fill: ${props => props.fill ? 'currentColor' : 'none'};
      stroke: ${props => props.stroke ? 'currentColor' : 'none'};
    }
  }
`;

const SiteTitle = styled.h1`
  ${rem('font-size', 22)}
  color: white;
  position: relative;
  z-index: 100;
  transition: .8s ease color;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${rem('padding', 20)};

  ${ media.desktop`
    display: none;
  ` }
`;

const OverlayIcon = styled.div`
  position: absolute;
  z-index: 98;
`;

export const SiteSubtitle = styled.h2`
  ${rem('font-size', 44)}
  ${rem('margin-bottom', -6)};
  width: 100%;
  color: white;
  text-align: center;

  ${ media.desktop`
    text-align: left;
  ` }
`;

export const SiteDescription = styled.p`
  ${rem('font-size', 18)};
  color: white;
  text-align: center;

  ${ media.desktop`
    text-align: left;
  ` }
`;

export const SiteMessage = styled.p`
  display: none;
  color: white;
  text-shadow: 1px 1px 7px rgba(23, 23, 23, .7);
  ${rem('margin-top', 10)}
  ${rem('font-size', 13)}

  ${ media.desktop`
    display: flex;
  ` };

  a {
    ${rem('margin-left', 3.2)};
    color: white;
    text-decoration: underline;

    &:hover, &:focus, &:visited {
      color: white;
    }
  }
`;

const SiteNav = styled.ul`
  display: none;
  flex-direction: column;
  align-items: flex-end;
  list-style-type: none;
  margin-left: 0;
  ${rem('padding', 20)};

  ${ media.desktop`
    display: flex;
  ` }
`;

const SiteNavItem = styled.li`
  right: -160px;
  position: relative;
  ${rem('font-size', 18)}
  ${rem('margin-bottom', 10)}

  ${ media.desktop`
    ${rem('right', -190)};
  ` }

  a {
    color: white;
    text-decoration: none;

    &:visited, &:focus {
      color: white;
    }
    &:hover {
      border-bottom: 2px solid white;
    }
  }
`;
