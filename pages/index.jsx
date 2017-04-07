import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { config } from 'config';
import * as icons from '../helpers/icons.yaml';
import {
  MainPage,
  Row,
  Column,
  SiteTitle,
  SiteSubtitle,
  SiteDescription,
  IconContainer,
  Icon,
  OverlayIcon,
  OverlayContent,
  OverlayMenu,
  OverlayMenuItem
} from '../components/styled/';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.toggleMenu = this.toggleMenu.bind(this);
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
    const logo = document.getElementsByClassName('logo');
    const logoCss = logo[0].style;
    if (this.state.showMenu === false) {
      html.classList.add('overflowHidden');
      body.classList.add('overflowHidden');
      logoCss.color = 'white';
      this.startOverlayAnimation();
    } else {
      html.classList.remove('overflowHidden');
      body.classList.remove('overflowHidden');
      logoCss.color = '#ff695c';
      this.endOverlayAnimation();
    }
  }
  render() {
    return (
      <MainPage fluid>
        <Helmet title={config.siteTitle} meta={[{ 'name': 'description', 'content': config.siteDescription }]} />
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
        <Row>
          <Column>
            <SiteSubtitle>I Make Stuff.</SiteSubtitle>
            <SiteDescription>My name is Enrique, I make beautiful digital products.</SiteDescription>
          </Column>
        </Row>
      </MainPage>
    );
  }
}
