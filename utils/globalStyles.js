import { injectGlobal } from 'styled-components';
import normalize from 'styled-normalize';
import { media } from './styleUtils';

injectGlobal`
  .project-video {
    width: 100%;
    height: 100%;
    &:hover {
      cursor: grab;
    }
  }

  ${normalize}

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: white;
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
