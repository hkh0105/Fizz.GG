import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { Provider } from 'react-wrap-balancer';
import { DefaultSeo } from 'next-seo';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './layout';

const DEFAULT_SEO = {
  title: 'Search engine for League Of Legend',
  description:
    "This is a web for analytics service. User can search summoner's id then get analytics",
  canonical: 'https://www.example.com',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.example.com',
    title: '전적검색은? FIZZ.GG 에서!',
    site_name: 'FIZZ.GG',
    images: [
      {
        url: '/Fizz.png',
        width: 285,
        height: 167,
        alt: '/Fizz.png',
      },
    ],
  },
};

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true, // useErrorBoundary 자동 True
      },
    },
  });

  return (
    <Layout>
      <Provider>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <DefaultSeo {...DEFAULT_SEO} />
            <Component {...pageProps} />
          </RecoilRoot>
        </QueryClientProvider>
      </Provider>
    </Layout>
  );
}

export default App;
