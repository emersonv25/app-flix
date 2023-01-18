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
import NextNProgress from 'nextjs-progressbar';
import { FavoriteProvider } from '../src/contexts/FavoriteContext';
import ReactGA from "react-ga4";
import Head from 'next/head';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  if (process.env.NEXT_PUBLIC_GOOGLE_GA4_ID) {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_GA4_ID);
  }
  return (
    <>
      <Head>
        <title>{`${process.env.NEXT_PUBLIC_WEBSITE_TITLE} - ${process.env.NEXT_PUBLIC_WEBSITE_SUBTITLE}`}</title>
      </Head>
      <CacheProvider value={emotionCache}>
        <AlertProvider>
          <AuthProvider>
            <AppThemeProvider>
              <FavoriteProvider>
                <CssBaseline />
                <NavBar>
                  <AlertPopup />
                  <NextNProgress />
                  <Component {...pageProps} />
                </NavBar>
              </FavoriteProvider>
            </AppThemeProvider>
          </AuthProvider>
        </AlertProvider>

      </CacheProvider>
    </>

  );
}