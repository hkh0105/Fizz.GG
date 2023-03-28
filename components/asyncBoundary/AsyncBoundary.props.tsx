import { ReactNode, SuspenseProps } from 'react';
import Loading from 'components/loading/Loading';

export const SsrSuspenseProps = (children: ReactNode): SuspenseProps => ({
  fallback: <Loading />,
  children,
});
