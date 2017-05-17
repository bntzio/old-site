import React from 'react';
import styled from 'styled-components';
import { rem, media } from '../utils/style-utils';

export default class ProjectsHero extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HeroContainer>
        <HeroMessage>Welcome to my projects repository</HeroMessage>
      </HeroContainer>
    );
  }
}

const HeroContainer = styled.div`
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const HeroMessage = styled.h2`
  display: flex;
  justify-content: center;
  text-align: center;
  ${rem('margin-top', 100)};
  ${rem('margin-bottom', 100)};
  ${rem('padding-left', 25)};
  ${rem('padding-right', 25)};
  ${rem('font-size', 25)};
  ${rem('line-height', 30)};

  ${ media.desktop`
    ${rem('font-size', 30)};
  ` }
`;
