import React from 'react';
import {
  SectionPage,
  SectionPageContainer,
  Row,
  Column,
  ProjectsSectionTitle,
  ProjectCardContainer,
  ProjectCard,
  ProjectCardTitle,
  ProjectCardDescription,
  ProjectCardLink
} from './styled/';

export default class AboutSection extends React.Component {
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
    return (
      <SectionPage fluid>
        <SectionPageContainer id="projectsPageContainer">
          <Row divisions={12}>
            <Column className="textCenter noPadding">
              <ProjectsSectionTitle className="primaryFont">What I've made</ProjectsSectionTitle>
            </Column>
            <ProjectCardContainer>
              <ProjectCard bgColor="#F44336">
                <ProjectCardLink href="http://garyquot.es/" target="_blank">
                  <ProjectCardTitle className="primaryFont">GaryQuotes</ProjectCardTitle>
                  <ProjectCardDescription className="secondaryFont">
                    Super Awesome Wallpapers for your iPhone Starring the best Gary Vaynerchuk Quotes
                  </ProjectCardDescription>
                </ProjectCardLink>
              </ProjectCard>
              <ProjectCard bgColor="#D7F700" textColor="#8a8a8a">
                <ProjectCardLink href="http://rejectionchalleng.es/" target="_blank">
                  <ProjectCardTitle className="primaryFont">Rejection Challenges</ProjectCardTitle>
                  <ProjectCardDescription className="secondaryFont">
                    Achieve your true potential by overcoming fear of rejection
                  </ProjectCardDescription>
                </ProjectCardLink>
              </ProjectCard>
              <ProjectCard bgColor="#F38631">
                <ProjectCardLink href="http://hexcandy.com/" target="_blank">
                  <ProjectCardTitle className="primaryFont">HexCandy</ProjectCardTitle>
                  <ProjectCardDescription className="secondaryFont">
                    Delicious color tracker for designers
                  </ProjectCardDescription>
                </ProjectCardLink>
              </ProjectCard>
            </ProjectCardContainer>
          </Row>
        </SectionPageContainer>
      </SectionPage>
    );
  }
}
