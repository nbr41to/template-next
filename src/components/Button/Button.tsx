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
  position: relative;
  overflow: hidden;
  font: normal normal normal 16px/1.5em 'Roboto', sans-serif;
  letter-spacing: 4px;
  cursor: pointer;

  ${({ theme }) => theme.mixins.box};
  ${({ theme }) => theme.mixins.toCenter};

  &::before {
    position: absolute;
    inset: 0;
    width: 4px;
    height: 4px;
    margin: auto;
    content: '';
    border-radius: 50%;
    @keyframes spared {
      0% {
        transform: scale(0.3);
      }

      50% {
        background: red;
      }

      100% {
        width: 120px;
        height: 120px;
        background-color: #0006;
      }
    }
  }
  &:active {
    &::before {
      width: 120px;
      height: 120px;
      background-color: #0006;
      animation: spared 1s;
    }
  }

  ${({ contain }) =>
    contain
      ? css`
          color: #fff;
          background: #343434 0% 0% no-repeat padding-box;
          &:hover {
            color: #343434;
            background: #fff 0% 0% no-repeat padding-box;
            border: 1px solid #343434;
            transition: 0.3s;
          }
        `
      : css`
          color: #343434;
          border: 1px solid #343434;
          &:hover {
            color: #fff;
            background: #343434 0% 0% no-repeat padding-box;
            transition: 0.3s;
          }
        `};
`;
