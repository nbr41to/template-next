import { VFC } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  className?: string;
  label: string;
  contain?: boolean;
  type?: string;
  onClick?: () => void;
}

export const Button: VFC<ButtonProps> = ({
  label,
  contain = false,
  onClick,
}) => {
  return (
    <StyledButton contain={contain} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ contain: boolean }>`
  /* reset */
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;

  width: 243px;
  height: 57px;
  font: normal normal normal 15px/25px Arpona;
  letter-spacing: 4.5px;

  ${({ contain }) =>
    contain
      ? css`
          background: #343434 0% 0% no-repeat padding-box;
          color: #fff;
        `
      : css`
          border: 1px solid #343434;
          color: #343434;
        `};
`;
