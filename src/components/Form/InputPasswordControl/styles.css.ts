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

export const wrapper = style({
  marginTop: '16px',
  border: '1px solid #BDBDBD',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const inputStyle = style({
  height: '40px',
  padding: '0px',
  fontSize: '14px',
  border: 'none',
  width: '100%',
  paddingLeft: '12px',
  outline: 'none',
});

export const buttonStyles = style({
  background: 'none',
  border: 'none',
  padding: '8px',
  cursor: 'pointer',
  marginRight: '12px',
});
