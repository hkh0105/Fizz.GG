import { FC } from 'react';

import ErrorBoundary from 'pages/ErrorBoundary';
import SsrSuspense from './SsrSuspense';
import { AsyncBoundaryProps } from 'types';
import { SuspensePropsMapper } from 'utils';

const AsyncBoundary: FC<AsyncBoundaryProps> = ({ children, key }) => {
  const SsrSuspenseProps = SuspensePropsMapper(<div>...Loading</div>, children);

  return (
    <ErrorBoundary key={key}>
      <SsrSuspense {...SsrSuspenseProps} />
    </ErrorBoundary>
  );
};

export default AsyncBoundary;
