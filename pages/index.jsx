import React from 'react';
import Helmet from 'react-helmet';
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
  OverlayIcon
} from '../components/styled/';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
    const body = document.getElementsByTagName('body');
    const css = body[0].style;
    if (this.state.showMenu === false) {
      css.overflow = 'hidden';
    } else {
      css.overflow = 'visible';
    }
  }
  render() {
    return (
      <MainPage fluid>
        <Helmet title={config.siteTitle} meta={[{ 'name': 'description', 'content': config.siteDescription }]} />
        <Row divisions={12}>
          <Column xs={10}>
            <SiteTitle>Enrique Benitez</SiteTitle>
          </Column>
          <IconContainer xs={2}>
            <Icon onClick={this.toggleMenu} pointer small color="white" dangerouslySetInnerHTML={ { __html: this.state.showMenu ? icons.close : icons.menu } } />
            <OverlayIcon show={this.state.showMenu ? true : false } dangerouslySetInnerHTML={ { __html: icons.overlay } } />
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
