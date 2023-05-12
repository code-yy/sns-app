import type { StyleRule } from '@vanilla-extract/css';

type MediaQuery = 'mobile' | 'tablet' | 'desktop';

const MOBILE = 768;
const TABLET = 992;
const DESKTOP = 1200;

export function getMediaQueryStyles(mediaQuery: MediaQuery, style: StyleRule) {
  switch (mediaQuery) {
    case 'mobile':
      return {
        [`screen and (max-width: ${MOBILE}px)`]: {
          ...style,
        },
      };
    case 'tablet':
      return {
        [`screen and (min-width: ${MOBILE}px) and (max-width: ${TABLET}px)`]: {
          ...style,
        },
      };
    case 'desktop':
      return {
        [`screen and (min-width: ${TABLET}px) and (max-width: ${DESKTOP}px)`]: {
          ...style,
        },
      };
  }
}
