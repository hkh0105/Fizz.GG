import { FC } from 'react';

import ErrorBoundary from 'pages/ErrorBoundary';
import SsrSuspense from './SsrSuspense';
import { AsyncBoundaryProps } from 'types';

const AsyncBoundary: FC<AsyncBoundaryProps> = ({ children, key }) => {
  const SsrSuspenseProps = {
    fallback: <div>...Loading</div>,
    children: children,
  };

  return (
    <ErrorBoundary key={key}>
      <SsrSuspense {...SsrSuspenseProps} />
    </ErrorBoundary>
  );
};

export default AsyncBoundary;
