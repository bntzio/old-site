/* rem */
export function rem(property, value) {
  return `
    ${property}: ${value}px;
    ${property}: ${value * 0.0625}rem;
  `;
}
