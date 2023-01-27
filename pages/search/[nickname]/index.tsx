import { useQuery, UseQueryResult } from '@tanstack/react-query';

import SearchLayout from 'components/layout/SearchLayout';
import Profile from 'components/profile/Profile';
import Rank from 'components/rank/Rank';
import ErrorBoundary from './ErrorBoundary';
import { CLIENT_API } from 'api/api';
import { QUERY_KEYS } from 'constant';
import { useRouter } from 'next/router';
import { FC, Suspense } from 'react';
import { Response, SummonerInfo } from 'types';

const Search: FC = () => {
  const router = useRouter();
  const { nickname } = (router.query as { nickname: string }) || '';

  const { data: summonerResponse }: UseQueryResult<Response<SummonerInfo>> =
    useQuery([QUERY_KEYS.getSummonerByNickname, { nickname }], () =>
      CLIENT_API.getSummonerByNickname(nickname)
    );

  return (
    <Suspense fallback={<div>LOADING</div>}>
      <ErrorBoundary>
        <SearchLayout>
          <Profile nickname={nickname} />
          <Rank nickname={nickname} />
        </SearchLayout>
      </ErrorBoundary>
    </Suspense>
  );
};

export default Search;
