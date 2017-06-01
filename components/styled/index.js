import normalize from 'styled-normalize';
import styled, { injectGlobal } from 'styled-components';
import { compute, ifDefined } from '../../utils/hedron';
import {
  rem,
  media,
  headingsColor,
  textColor,
  mainBgColor,
  alternateBgColor,
  primaryColor
} from '../../utils/styleUtils';
import {
  Page as HedronPage,
  Row as HedronRow,
  Column as HedronColumn
} from 'hedron';

/*
 * Global Styles
 */
injectGlobal`
  ${normalize}

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: ${textColor()}
  }

  .overflowHidden {
    position: relative;
    overflow: hidden;
    height: 100%;
  }

  .fade-in {
    opacity: 1 !important;
  }
  .fade-out {
    opacity: 0 !important;
  }
  .jump-in-up {
    opacity: 1 !important;
    transform: translateY(0px) !important;
  }

  .textCenter {
    text-align: center;
  }
  .textLeft {
    text-align: left;
  }
  .textRight {
    text-align: right;
  }

  .footer-logo {
    margin-bottom: 6px !important;
  }

  .pullUp {
    margin-top: -10px !important;
  }

  .noPadding {
    padding: 0;
  }
  .noMargin {
    margin: 0;
  }

  .bold {
    font-weight: 900;
  }

  .skillItem {
    animation-delay: .3s;
  }

  .nav-main {
    order: 0 !important;

    ${ media.tablet`
      order: 1 !important;
    ` }
  }

  .nav-secondary {
    order: 1 !important;

    ${ media.tablet`
      order: 0 !important;
    ` }
  }

  [data-social-item="instagram"] {
    &:hover {
      color: #e1306c !important;

      svg {
        path, polygon, polyline, rect, line, circle {
          fill: #e1206c !important;
        }
      }
    }
  }
  [data-social-item="snapchat"] {
    &:hover {
      color: #fffc00 !important;

      svg {
        path, polygon, polyline, rect, line, circle {
          fill: #fffc00 !important;
        }
      }
    }
  }
  [data-social-item="facebook"] {
    &:hover {
      color: #3b5998 !important;

      svg {
        path, polygon, polyline, rect, line, circle {
          fill: #3b5998 !important;
        }
      }
    }
  }
  [data-social-item="twitter"] {
    &:hover {
      color: #1da1f2 !important;

      svg {
        path, polygon, polyline, rect, line, circle {
          fill: #1da1f2 !important;
        }
      }
    }
  }
  [data-social-item="email"] {
    &:hover {
      color: #c68143 !important;

      svg {
        path, polygon, polyline, rect, line, circle {
          fill: #c68143 !important;
        }
      }
    }
  }
`;

/*
 * Page
 */
export const Page = styled(HedronPage)`
  ${props =>
    props.fluid
    ? 'width: 100%;'
    : `
      margin: 0 auto;
      max-width: 100%;
      ${props.width
        ? `width: ${props.width};`
        : 'width: 960px;'
      }
    `
  }
`;

/*
 * Row
 */
export const Row = styled(HedronRow)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${ifDefined('alignContent', 'align-content')}
  ${ifDefined('alignItems', 'align-items')}
  ${ifDefined('alignSelf', 'align-self')}
  ${ifDefined('justifyContent', 'justify-content')}
  ${ifDefined('order')}
`;

/*
 * Column
 */
export const Column = styled(HedronColumn)`
  display: block;
  ${props => props.debug
    ? `background-color: rgba(50, 50, 255, .1);
       outline: 1px solid #fff;`
    : ''
  }
  box-sizing: border-box;
  padding: ${props => props.fluid ? '0' : '20px'};
  width: 100%;
  ${compute('xs')}
  ${compute('sm')}
  ${compute('md')}
  ${compute('lg')}
`;

/*
 * SectionTitle (todo: remove later)
 */
export const SectionTitle = styled.h3`
  margin: 0;
  ${rem('font-size', 32)};
  ${rem('margin-bottom', 35)};
  color: white;
  display: inline-block;
`;

/*
 * SectionDescription (todo: remove later)
 */
export const SectionDescription = styled.p`
  margin: 0;
  color: ${textColor()};
  ${rem('margin-bottom', 12.5)};
  font-size: ${props => props.small ? '14px' : '18px'};
`;

/*
 * MainPage
 */
export const MainPage = styled(Page)`
  box-sizing: border-box;
`;

/*
 * IndexPage
 */
export const IndexPage = styled(MainPage)`
`;

/*
 * SectionPage (todo: remove later)
 */
export const SectionPage = styled(MainPage)`
  background-color: ${mainBgColor()};
  transition: all 1s ease-out;
  ${rem('padding-top', 10)}
  ${rem('padding-right', 20)}
  ${rem('padding-bottom', 10)}
  ${rem('padding-left', 20)}

  ${ media.tablet`
    padding: 20px 40px;
  ` }

  ${ media.desktop`
    padding: 30px 60px;
  ` }
`;

/*
 * SectionPageContainer (todo: remove later)
 */
export const SectionPageContainer = styled.div`
  opacity: 0;
  transition: .7s ease-out all;
  position: relative;
`;

/*
 * FooterPageContainer
 */
export const FooterPageContainer = styled(SectionPageContainer)`
  transform: translateY(100px);
`;

/*
 * FooterSectionPage
 */
export const FooterSectionPage = styled(MainPage)`
  background: ${alternateBgColor()};
  transition: all 1s ease-out;
  text-align: center;
  ${rem('padding', 20)};

  ${ media.tablet`
    padding: 20px 40px;
  ` }

  ${ media.desktop`
    padding: 30px 60px;
  ` }
`;

/*
 * SkillsSectionTitle
 */
export const SkillsSectionTitle = styled(SectionTitle)`
  display: inline-flex;
  justify-content: center;
  border-bottom: 5px solid ${alternateBgColor()};
  padding-bottom: 2.5px;
  margin-bottom: 0;
`;

/*
 * ProjectsSectionTitle
 */
export const ProjectsSectionTitle = styled(SkillsSectionTitle)`
`;

/*
 * HeadingOne
 */
export const HeadingOne = styled.h1`
  ${rem('font-size', 20)}
  color: ${headingsColor()}
`;

/*
 * HeadingFour
 */
export const HeadingSix = styled.h6`
  ${rem('font-size', 20)}
  color: ${headingsColor()}
`;

/*
 * PostLinkTitle
 */
export const PostLinkTitle = styled.h2`
  font-size: 18px;
  font-weight: 900;
`;

/*
 * PostLinkDescription
 */
export const PostLinkDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

/*
 * PostTitle
 */
export const PostTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 7px;
`;

/*
 * PostBody
 */
export const PostBody = styled.div`
  font-size: 17px;
`;

/*
 * PostDate
 */
export const PostDate = styled.span`
  font-size: 13px;
  font-weight: lighter;
`;

/*
 * SkillIcon
 */
export const SkillIcon = styled.span`
  position: absolute;
  z-index: 1;
  ${rem('margin-top', -4)};
  ${rem('margin-left', -22)};
  background: ${alternateBgColor()};
  ${rem('padding', 6)};
  border-color: ${alternateBgColor()};
  border-style: solid;
  ${rem('border-radius', 9999)};
  ${rem('width', 12)};
  ${rem('height', 12)};

  ${ media.tablet`
    margin-top: -6px;
    margin-left: -32px;
    padding: 8px;
    width: 18px;
    height: 18px;
  ` }

  svg {
    ${rem('width', 12)};
    ${rem('height', 12)};

    ${ media.tablet`
      width: 18px;
      height: 18px;
    ` }

    path, polygon, polyline, rect, line, circle {
      fill: ${props => props.fill};
      stroke: ${props => props.stroke};
    }
  }
`;

/*
 * GoodbyePage
 */
export const GoodbyePage = styled(Page)`
  background: linear-gradient(to bottom left, #528ce7, #ac3dd5);
  height: 100vh;
  width: 100%;
`;

/*
 * GoodbyeTitle
 */
export const GoodbyeTitle = styled(HeadingSix)`
  color: white;
  ${rem('font-size', 33)};
  ${rem('padding-left', 25)};
  ${rem('padding-right', 25)};
  margin-bottom: 0;

  ${ media.tablet`
    padding: 0 50px;
    font-size: 38px;
  ` }
  ${ media.desktop`
    padding: 0 120px;
    font-size: 44px;
  ` }
`;

/*
 * GoodbyeMessage
 */
export const GoodbyeMessage = styled.p`
  color: white;
  ${rem('font-size', 16)};
  ${rem('padding-left', 25)};
  ${rem('padding-right', 25)};

  a, a:hover, a:focus, a:visited {
    text-decoration: none;
  }

  ${ media.tablet`
    padding: 0 50px;
    font-size: 17px;
  ` }
  ${ media.desktop`
    padding: 0 120px;
    font-size: 18px;
  ` }
`;

/*
 * SkillsListContainer
 */
export const SkillsListContainer = styled(Row)`
  display: flex;
  width: 33.333333%;
  justify-content: ${ props => props.justifyContent };
  ${rem('margin-bottom', 10)};
`;

/*
 * SkillsList
 */
export const SkillsList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

/*
 * SkillsListItem
 */
export const SkillsListItem = styled.li`
  background: ${alternateBgColor()};
  ${rem('padding-top', 5)};
  ${rem('padding-right', 10)};
  ${rem('padding-bottom', 5)};
  ${rem('padding-left', 10)};
  border-radius: 20px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  ${rem('font-size', 12)};

  ${ media.tablet`
    font-size: 16px;
  ` }
`;

/*
 * PrimaryButtonContainer
 */
export const PrimaryButtonContainer = styled(Row)`
  display: flex;
  justify-content: center;
  width: 100%;
  ${rem('margin-top', 35)};
`;

/*
 * PrimaryButton
 */
export const PrimaryButton = styled.button`
  background: transparent;
  color: ${primaryColor()};
  ${rem('padding-top', 15)};
  ${rem('padding-right', 30)};
  ${rem('padding-bottom', 15)};
  ${rem('padding-left', 30)};
  border: 2px solid ${primaryColor()};
  border-radius: 6px;
  cursor: pointer;
  transition: all .6s;

  &:hover {
    background: ${primaryColor()};
    color: white;
  }
`;

/*
 * ProjectCardContainer
 */
export const ProjectCardContainer = styled(Row)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

/*
 * ProjectCard
 */
export const ProjectCard = styled.div`
  width: 100%;
  height: 300px;
  background: ${alternateBgColor()};
  margin-bottom: 50px;
  cursor: pointer;
  opacity: .8;
  color: 'white';
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  transition: all .8s;

  ${ media.tablet`
    width: 48%;
  ` }

  ${ media.desktop`
    width: 30%;
  ` }

  &:hover {
    opacity: 1;
    background: ${ props => props.bgColor };
    color: ${ props => props.textColor || 'white' };
  }
`;

/*
 * ProjectCardTitle
 */
export const ProjectCardTitle = styled.h2`
  display: flex;
  justify-content: center;
  margin: 0;
  font-size: 26px;
  padding: 0 25px;
`;

/*
 * ProjectCardDescription
 */
export const ProjectCardDescription = styled.p`
  display: flex;
  justify-content: center;
  font-size: 14px;
  padding: 0 50px;
`;

/*
 * ProjectCardLink
 */
export const ProjectCardLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover, &:visited, &:focus {
    color: inherit;
    text-decoration: none;
  }
`;


/*
 * ContactContainer
 */
export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  ${rem('margin-top', 35)};
  ${rem('margin-bottom', 35)};
`;

/*
 * ContactList
 */
export const ContactList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;

  ${ media.desktop`
    flex-direction: row;
  ` }
`;

/*
 * ContactListItem
 */
export const ContactListItem = styled.a`
  ${rem('margin-bottom', 20)};
  display: flex;
  cursor: pointer;
  color: white;
  text-decoration: none;
  transition: .7s all;

  ${ media.desktop`
    margin-bottom: 0;
    margin-right: 20px;
  ` }

  &:hover, &:focus, &:visited {
    color: white;
    text-decoration: none;
  }
`;

/*
 * ContactSocialIcon
 */
export const ContactSocialIcon = styled.div`
  display: flex;

  svg {
    ${rem('width', 16)};
    ${rem('height', 16)};

    path, polygon, polyline, rect, line, circle {
      transition: .7s all;
      fill: ${props => props.fill};
      stroke: ${props => props.stroke};
    }
  }
`;

/*
 * ContactSocialName
 */
export const ContactSocialName = styled.div`
  display: flex;
  ${rem('margin-left', 5)};
`;


/*
 * SocialMediaContainer
 */
export const SocialMediaContainer = styled.div`
  ${rem('margin-top', 25)};
  display: flex;
  justify-content: space-around;
`;

/*
 * SocialMediaList
 */
export const SocialMediaList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

/*
 * SocialMediaListItem
 */
export const SocialMediaListItem = styled.li`
`;

/*
 * SocialMediaLink
 */
export const SocialMediaLink = styled.a`
`;

/*
 * SocialMediaIcon
 */
export const SocialMediaIcon = styled.span`
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

/*
 * MainFooterLinkContainer
 */
export const MainFooterLinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

/*
 * FooterLinkContainer
 */
export const FooterLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

/*
 * FooterLink
 */
export const FooterLink = styled.a`
  ${rem('font-size', 18)};
  ${rem('margin-bottom', 15)};
  color: white;
  text-decoration: none;

  &:hover, &:visited, &:focus {
    color: white;
    text-decoration: none;
  }
`;
