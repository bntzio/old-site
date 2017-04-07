import normalize from 'styled-normalize';
import styled, { injectGlobal } from 'styled-components';
import { compute, ifDefined } from '../../utils/hedron';
import {
  rem,
  media,
  primaryColor,
  secondaryColor,
  headingsColor,
  textColor,
  mainBgColor,
  mainTextColor
} from './style-utils';
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
 * MainPage
 */
export const MainPage = styled(Page)`
  background: ${mainBgColor()}
  ${rem('padding', 25)}
  box-sizing: border-box;
`;

/*
 * SiteTitle
 */
export const SiteTitle = styled.h1`
  ${rem('font-size', 22)}
  color: ${primaryColor()}
  position: relative;
  z-index: 100;
  transition: .8s ease color;
`;

/*
 * SiteSubtitle
 */
export const SiteSubtitle = styled.h2`
  ${rem('font-size', 30)}
  color: ${secondaryColor()}
  text-decoration: underline;
`;

/*
 * SiteDescription
 */
export const SiteDescription = styled.p`
  ${rem('font-size', 18)}
  color: ${mainTextColor()}
`;

/*
 * HeadingOne
 */
export const HeadingOne = styled.h1`
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
 * IconContainer
 */
export const IconContainer = styled(Column)`
  display: flex;
  justify-content: center;
  align-items: center;
  ${ media.desktop`
    display: none;
  ` }
`;

/*
 * Icon
 */
export const Icon = styled.div`
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

/*
 * OverlayIcon
 */
export const OverlayIcon = styled.div`
  position: absolute;
`;

/*
 * OverlayContent
 */
export const OverlayContent = styled.div`
  position: absolute;
  z-index: 99;
  top: 150px;
  right: -270px;
  transform: scale(0);
`;

/*
 * OverlayMenu
 */
export const OverlayMenu = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-right: 7.3%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

/*
 * OverlayMenuItem
 */
export const OverlayMenuItem = styled.li`
  ${rem('font-size', 24)}
  ${rem('margin-bottom', 20)}
  text-transform: uppercase;
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
