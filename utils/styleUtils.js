import { css } from 'styled-components';

// new vars!!
export function bgColorA() {
  return `
    #6114cc;
  `;
}
export function bgColorB() {
  return `
    #009cf3;
  `;
}

// ---

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
    #6114cc;
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

export function polyRem(property, value1, value2) {
  return `
    ${property}-top: ${value1}px;
    ${property}-right: ${value2}px;
    ${property}-bottom: ${value1}px;
    ${property}-left: ${value2}px;

    ${property}-top: ${value1 * 0.0625}rem;
    ${property}-right: ${value2 * 0.0625}rem;
    ${property}-bottom: ${value1 * 0.0625}rem;
    ${property}-left: ${value2 * 0.0625}rem;
  `;
}

/* media queries (objects) */
export const media = {
  tablet: (...args) => css`
    @media (min-width: 420px) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)}
    }
  `
}
