import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const DEFAULT_SEO = {
  title: 'Search engine for League Of Legend',
  description:
    "This is a web for analytics service. User can search summoner's id then get analytics",
  canonical: 'https://www.example.com',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.example.com',
    title: '전적검색은? 협곡검색 에서!',
    site_name: '협곡검색',
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
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <DefaultSeo {...DEFAULT_SEO} />
        <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
