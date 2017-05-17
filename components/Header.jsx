import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem, media } from '../utils/style-utils';
import * as icons from '../helpers/icons.yaml';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });

    const html = document.querySelector('html'); // or document.body.parentNode;
    const body = document.body;
    const overlay = document.getElementById('overlay');

    if (this.state.showMenu === false) {
      html.classList.add('overflowHidden');
      body.classList.add('overflowHidden');
      overlay.style.top = '0';
    } else {
      html.classList.remove('overflowHidden');
      body.classList.remove('overflowHidden');
      overlay.style.top = '-100vh';
    }
  }

  render() {
    return (
      <HeaderContainer background={this.props.background}>
        <HeaderOverlay id="overlay">
          <HeaderOverlayItem href="#">Blog</HeaderOverlayItem>
          <HeaderOverlayItem href="#">Projects</HeaderOverlayItem>
          <HeaderOverlayItem href="#">Experiments</HeaderOverlayItem>
          <HeaderOverlayItem href="#">Courses</HeaderOverlayItem>
          <HeaderOverlayItem href="#">Newsletter</HeaderOverlayItem>
          <HeaderOverlayItem href="#">About</HeaderOverlayItem>
        </HeaderOverlay>
        <HeaderTitle>bntz</HeaderTitle>
        <HeaderMenu showMenu={true}>
          <HeaderMenuIcon onClick={this.toggleMenu} pointer small fill color="white" dangerouslySetInnerHTML={ { __html: this.state.showMenu ? icons.close : icons.menu } } />
          <HeroMenuItem href="#">Blog</HeroMenuItem>
          <HeroMenuItem href="#">Projects</HeroMenuItem>
          <HeroMenuItem href="#">Experiments</HeroMenuItem>
          <HeroMenuItem href="#">Courses</HeroMenuItem>
          <HeroMenuItem href="#">Newsletter</HeroMenuItem>
          <HeroMenuItem href="#">About</HeroMenuItem>
        </HeaderMenu>
      </HeaderContainer>
    );
  }
}

Header.propTypes = {
  background: PropTypes.string.isRequired,
  color: PropTypes.string
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.background };
  ${rem('padding-top', 50)};
  ${rem('padding-bottom', 50)};
  ${rem('padding-left', 50)};
  ${rem('padding-right', 50)};

  ${ media.desktop`
    justify-content: space-around;
    padding-left: 0;
    padding-right: 0;
  ` }
`;

const HeaderOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: -100vh;
  left: 0;
  z-index: 98;
  width: 100%;
  height: 100vh;
  background: black;
`;

const HeaderOverlayItem = styled.a`
  color: white;
  text-decoration: none;
  ${rem('font-size', 24)};
  ${rem('margin-bottom', 12)};

  &:first-child {
    ${rem('margin-top', -100)};
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

const HeaderTitle = styled.h1`
  color: white;
  margin: 0;
  ${rem('font-size', 21)};
  z-index: 99;
`;

const HeaderMenu = styled.div`
  display: flex;
  ${rem('font-size', 16)};
`;

const HeaderMenuIcon = styled.div`
  display: block;
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

  ${ media.desktop`
    display: none;
  ` }
`;

const HeroMenuItem = styled.a`
  display: none;
  ${rem('margin-left', 12)};
  color: #999;
  text-decoration: none;
  &:first-child {
    margin-left: 0;
  }
  &:hover {
    color: white;
  }

  ${ media.desktop`
    display: block;
  ` }
`;
