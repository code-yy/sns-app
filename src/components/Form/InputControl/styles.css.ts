import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginTop: '24px',
});

export const labelStyle = style({
  fontSize: '16px',
  fontWeight: 'bold',
});

export const inputStyle = style({
  marginTop: '16px',
  height: '40px',
  paddingLeft: '12px',
  fontSize: '14px',
  border: '1px solid #BDBDBD',
});
