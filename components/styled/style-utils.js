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

/* mixins (functions) */
export function rem(property, value) {
  return `
    ${property}: ${value}px;
    ${property}: ${value * 0.0625}rem;
  `;
}
