import { ReactNode } from 'react';
import { VFC } from 'react';
import styled from 'styled-components';

import { Footer } from './Footer';
import { Header } from './Header';

type LayoutProps = {
  className?: string;
  children: ReactNode;
};

export const Layout: VFC<LayoutProps> = ({ className, children }) => {
  return (
    <StyledLayout className={`${className}`}>
      <Header className="header" />
      <main className="main">{children}</main>
      <Footer className="footer" />
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  display: grid;
  grid-template:
    ' header header header header header ' min-content
    ' ...... ...... ...... ...... ...... ' 20px
    ' ...... main   main   main   ...... ' 1fr
    ' ...... ...... ...... ...... ...... ' 20px
    ' footer footer footer footer footer ' min-content /
    1fr 1fr 1fr 1fr 1fr;
  min-height: 100vh;

  > .header {
    grid-area: header;
  }
  > .main {
    grid-area: main;
    text-align: center;
  }
  > .footer {
    grid-area: footer;
  }
`;
