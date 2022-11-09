import * as React from 'react';
import { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../src/utils/createEmotionCache';
import { AppThemeProvider } from '../src/contexts/ThemeContext';
import AlertPopup from '../src/components/alerts/AlertPopup';
import { NavBar } from '../src/components/navbar/NavBar';
import { AuthProvider } from '../src/contexts/AuthContext';
import { AlertProvider } from '../src/contexts/AlertContext';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <AlertProvider>
        <AuthProvider>
          <AppThemeProvider>
            <CssBaseline />
            <NavBar>
              <AlertPopup />
              <Component {...pageProps} />
            </NavBar>
          </AppThemeProvider>
        </AuthProvider>
      </AlertProvider>

    </CacheProvider>
  );
}