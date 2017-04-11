import { css } from 'styled-components';

/* variables (functions) */
export function gradientColorA() {
  return `
    #528ce7;
  `;
}
export function gradientColorB() {
  return `
    #ac3dd5;
  `;
}
export function primaryColor() {
  return `
    #ff3b6b;
  `;
}
export function headingsColor() {
  return `
    #1d2637;
  `;
}
export function textColor() {
  return `
    #8c949f;
  `;
}
export function mainBgColor() {
  return `
    #1d2637;
  `;
}
export function alternateBgColor() {
  return `
    #151d2a;
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
