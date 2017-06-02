import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { rem, polyRem, media } from '../utils/styleUtils';
import { Column } from '../utils/grid';

export default class Projects extends React.Component {
  componentDidMount() {
    const controller = new ScrollMagic.Controller();
    const scene1 = new ScrollMagic.Scene({
      triggerElement: '#projectsPageContainer'
    })
    .setClassToggle('#projectsPageContainer', 'fade-in')
    .addTo(controller);

    const scene2 = new ScrollMagic.Scene({
      triggerElement: '#projectsPageContainer'
    })
    .setClassToggle('#skillsPageContainer', 'fade-out')
    .addTo(controller);

    if (process.env.NODE_ENV !== 'production') {
      scene1.addIndicators();
      scene2.addIndicators();
    }
  }

  render() {
    const carouselSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      fade: true
    };

    return (
      <ProjectsSection fluid>
        <ProjectsContainer id="projectsPageContainer">
          <Column>
            <ProjectsTitle className="primaryFont">Projects</ProjectsTitle>
            <ProjectsSubtitle>Some projecs I've made.</ProjectsSubtitle>
          </Column>

          <Column>
            <Slider { ...carouselSettings }>
              <video className="project-video" autoPlay loop src="https://cl.ly/khwM/spoil-your-enemies.mp4"></video>
              <video className="project-video" autoPlay loop src="https://cl.ly/ki5q/garyquotes.mp4"></video>
              <video className="project-video" autoPlay loop src="https://cl.ly/kia9/hexcandy.mp4"></video>
              <video className="project-video" autoPlay loop src="https://cl.ly/kiRd/rejection-challenges.mp4"></video>
            </Slider>
          </Column>
        </ProjectsContainer>
      </ProjectsSection>
    );
  }
}

const ProjectsSection = styled(Column)`
  transition: all 1s ease-out;

  ${polyRem('padding', 10, 20)};

  ${ media.tablet`
    ${polyRem('padding', 20, 40)};
  ` }

  ${ media.desktop`
    ${polyRem('padding', 30, 60)};
  ` }
`;

const ProjectsContainer = styled.div`
  opacity: 0;
  transition: .7s ease-out all;
  position: relative;
  text-align: center;
`;

const ProjectsTitle = styled.h4`
  margin: 0;
  ${rem('font-size', 32)};
  ${rem('margin-bottom', 35)};
  color: white;
  display: inline-block;
  text-align: center;
`;

const ProjectsSubtitle = styled.p`
  margin: 0;
  color: white;
  font-size: ${props => props.small ? '14px' : '18px'};
`;
