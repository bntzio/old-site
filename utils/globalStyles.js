import { injectGlobal } from 'styled-components';

injectGlobal`
  .project-video {
    width: 100%;
    height: 100%;
    &:hover {
      cursor: grab;
    }
  }
`;
