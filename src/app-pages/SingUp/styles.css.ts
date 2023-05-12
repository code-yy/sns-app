import { style } from '@vanilla-extract/css';
import { getMediaQueryStyles } from '@/utils/media-query';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  maxWidth: '480px',
  padding: '64px 0',
  margin: '0 auto',

  '@media': getMediaQueryStyles('mobile', {
    padding: '16px',
  }),
});

export const inputStyle = style({
  height: '40px',
  borderRadius: '4px',
});

export const buttonStyle = style({
  marginTop: '32px',
  height: '40px',
  width: '100%',
  fontSize: '16px',
  backgroundColor: '#0A66C2',
  borderRadius: '4px',
  color: '#FFFFFF',
  cursor: 'pointer',
});

export const errorMessageStyle = style({
  width: '100%',
  marginTop: '8px',
});
