import { css } from 'styled-components';

/* variables (functions) */
export function primaryColor() {
  return `
    #ff695c;
  `;
}
export function secondaryColor() {
  return `
    #FF965C;
  `;
}
export function headingsColor() {
  return `
    #1F2B38;
  `;
}
export function textColor() {
  return `
    #9898A6;
  `;
}
export function mainBgColor() {
  return `
    #172230;
  `;
}
export function mainTextColor() {
  return `
    #8c949f;
  `;
}

/* mixins (functions) */
export function rem(property, value) {
  return `
    ${property}: ${value}px;
    ${property}: ${value * 0.0625}rem;
  `;
}

/* media queries (objects) */
export const media = {
  tablet: (...args) => css`
    @media (min-width: 420px) {
      ${css(args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 768px) {
      ${css(args)}
    }
  `
}
