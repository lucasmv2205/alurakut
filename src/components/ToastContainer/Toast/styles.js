import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

const toastTypes = {
  success: css`
    background: #1bc5bd;
    color: #fff;
  `,
  error: css`
    background: #f64e60;
    color: #fff;
  `,
  info: css`
    background: #00448c;
    color: #fff;
  `,
};

export const Container = styled(animated.div)`
  width: 360px;
  margin-bottom: 8px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  ${props => toastTypes[props.type] || 'info'}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    strong {
      margin-left: 5px;
    }

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    border: 0;
    background: transparent;
    color: inherit;
  }
`;
