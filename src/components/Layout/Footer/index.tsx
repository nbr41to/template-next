import { VFC } from 'react';
import styled from 'styled-components';

type FooterProps = {
  className?: string;
};

export const Footer: VFC<FooterProps> = ({ className }) => {
  return (
    <StyledFooter className={`${className}`}>
      <span>
        &copy; 2020 - {new Date().getFullYear()}{' '}
        <a
          href="https://github.com/nbr41to"
          target="_blank"
          rel="noopener noreferrer"
        >
          @nbr41to
        </a>
      </span>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 8px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.main};

  > span {
    ${({ theme }) => theme.fonts.small};
    > a {
      font-weight: bold;
    }
  }
`;
