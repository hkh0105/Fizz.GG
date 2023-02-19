import { FC } from 'react';

import ErrorBoundary from 'pages/ErrorBoundary';
import SsrSuspense from './SsrSuspense';
import { AsyncBoundaryProps } from './AsyncBoundary.types';

const AsyncBoundary: FC<AsyncBoundaryProps> = ({ children, key }) => {
  const ErrorBoundaryProps = {
    key: key,
  };

  const SsrSuspenseProps = {
    fallback: <div>...Loading</div>,
    children: children,
  };

  return (
    <ErrorBoundary {...ErrorBoundaryProps}>
      <SsrSuspense {...SsrSuspenseProps} />
    </ErrorBoundary>
  );
};

export default AsyncBoundary;
