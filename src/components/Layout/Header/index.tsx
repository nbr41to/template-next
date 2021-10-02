import { VFC } from 'react';
import styled from 'styled-components';

type HeaderProps = {
  className?: string;
};

export const Header: VFC<HeaderProps> = ({ className }) => {
  return (
    <StyledHeader className={`${className}`}>
      <h1>Next.js Template nbr41</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.main};

  > h1 {
    ${({ theme }) => theme.fonts.xxlarge};
  }
`;
