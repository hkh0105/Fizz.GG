import { SuspenseProps, Suspense, FC } from 'react';
import { useMounted } from 'hooks/useMounted';

const SsrSuspense: FC<SuspenseProps> = (props) => {
  const isMounted = useMounted();

  if (isMounted) {
    return <Suspense {...props} />;
  }

  return <>{props?.fallback}</>;
};

export default SsrSuspense;
