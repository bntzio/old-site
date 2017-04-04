import styled, { injectGlobal } from 'styled-components';

/*
 * Global Styles
 */
injectGlobal`
  body {
    font-family: Arial, Helvetica, sans-serif;
  }
`;

/*
 * Title
 */
export const Title = styled.h1`
  font-size: 24px;
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
