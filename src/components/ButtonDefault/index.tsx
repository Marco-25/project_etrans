import React, { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}
interface BGButton {
  btnColorOne?: boolean;
  btnColorTwo?: boolean;
}

export const BTN = styled.button<BGButton>`
  background-color: #00a6e0;
  color: #fff;
  font-weight: bold;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  margin-bottom: 0.3rem;

  ${(props) =>
    props.btnColorOne &&
    css`
      background-color: #fff;
      color: #000;
    `}
  ${(props) =>
    props.btnColorTwo &&
    css`
      background-color: #fff;
      color: #000;
    `}
`;

const Button: React.FC<IButton> = ({ children, ...rest }) => {
  return <BTN {...rest}>{children}</BTN>;
};

export default Button;
