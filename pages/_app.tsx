import 'src/styles/reset.css';
import 'src/styles/globals.css';

import type { AppProps /*, AppContext */ } from 'next/app';
import { theme } from 'src/styles/theme';
import { ThemeProvider } from 'styled-components';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
