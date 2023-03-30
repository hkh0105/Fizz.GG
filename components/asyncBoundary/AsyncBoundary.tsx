import { FC } from 'react';

import ErrorBoundary from 'pages/ErrorBoundary';
import SsrSuspense from './SsrSuspense';
import { AsyncBoundaryProps } from './AsyncBoundary.types';
import { SsrSuspenseProps } from './AsyncBoundary.props';

const AsyncBoundary: FC<AsyncBoundaryProps> = ({ children, key }) => {
  const SuspenseProps = SsrSuspenseProps(children);

  return (
    <ErrorBoundary key={key}>
      <SsrSuspense {...SuspenseProps} />
    </ErrorBoundary>
  );
};

export default AsyncBoundary;
