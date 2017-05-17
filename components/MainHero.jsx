import React from 'react';
import { Link } from 'react-router';
import * as icons from '../helpers/icons.yaml';
import {
  HeroPage,
  HeroPageContainer,
  Row,
  Column,
  SiteTitle,
  SiteSubtitle,
  SiteDescription,
  SiteMessage,
  SiteNav,
  SiteNavItem,
  IconContainer,
  Icon,
  OverlayIcon,
  OverlayContent,
  OverlayMenu,
  OverlayMenuItem
} from './styled/';

export default class OldHero extends React.Component {
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
          <Row divisions={12}>
            <Column xs={10}>
              <SiteTitle className="logo">Enrique Benitez</SiteTitle>
            </Column>
            <IconContainer xs={2}>
              <Icon onClick={this.toggleMenu} pointer small fill color="white" dangerouslySetInnerHTML={ { __html: this.state.showMenu ? icons.close : icons.menu } } />
              <OverlayIcon id="overlayIcon" dangerouslySetInnerHTML={ { __html: icons.overlay } } />
            </IconContainer>
          </Row>
          <Row divisions={12}>
            <Column xs={11} md={6}>
              <SiteSubtitle className="subtitle">I Make Stuff.</SiteSubtitle>
              <SiteDescription className="description">
                I'm a maker who crafts beautiful digital products.
              </SiteDescription>
              <SiteMessage className="message">
                Scroll down to learn more, or say <Link to="/goodbye/">goodbye</Link>.
              </SiteMessage>
            </Column>
            <Column xs={1} md={6}>
              <SiteNav className="nav">
                <SiteNavItem className="nav-item"><Link to="#">Blog</Link></SiteNavItem>
                <SiteNavItem className="nav-item"><Link to="/projects/">Projects</Link></SiteNavItem>
                <SiteNavItem className="nav-item"><Link to="#">Experiments</Link></SiteNavItem>
                <SiteNavItem className="nav-item"><Link to="#">Courses</Link></SiteNavItem>
                <SiteNavItem className="nav-item"><Link to="#">Newsletter</Link></SiteNavItem>
                <SiteNavItem className="nav-item"><Link to="#">About</Link></SiteNavItem>
              </SiteNav>
            </Column>
          </Row>
        </HeroPageContainer>
      </HeroPage>
    );
  }
}
