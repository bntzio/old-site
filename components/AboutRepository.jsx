import React from 'react';
import styled from 'styled-components';
import { rem, media } from '../utils/styleUtils';

export default class AboutRepository extends React.Component {
  render() {
    return (
      <AboutContainer>
        <AboutTitle href="#about" id="about">About this repository</AboutTitle>
        <AboutContent>
          <AboutDescription>
            This repository acts as <em>the heart of my maker journey</em>, everything I've created is here, along with useful
            notes and case stories for each product. Feel free to navigate through my notes and experiences.
          </AboutDescription>
        </AboutContent>
        <br/><br/>
        <br/><br/>
        <AboutTitle href="#why" id="why">Why I do this</AboutTitle>
        <AboutContent>
          <AboutDescription>
            I think every maker in the world should give everyone a glimpse about their work behind the scenes, to show
            the process, the obstacles and the raw piece of info behind their creations.
            <br/><br/>
            In that way, other creators can learn from common mistakes and makers <em>give something back to the community they
            belong to.</em>
            <br/><br/>
            Remember, <em>transparency before anything.</em>
          </AboutDescription>
        </AboutContent>
      </AboutContainer>
    );
  }
}

const AboutContainer = styled.div`
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  ${rem('margin-top', 350)};
`;

const AboutTitle = styled.a`
  display: block;
  margin: 0 auto;
  color: white;
  text-align: center;
  text-decoration: none;
  ${rem('font-size', 18)};
  ${rem('margin-bottom', 25)};

  &:hover {
    text-decoration: underline;
  }

  ${ media.desktop`
    ${rem('font-size', 20)};
  ` }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ababab;
  ${rem('line-height', 25)};
  ${rem('font-size', 16)};
`;

const AboutDescription = styled.p`
  text-align: left;

  em {
    font-style: normal;
    color: white;
  }
`;
