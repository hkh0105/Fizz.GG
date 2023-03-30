import { useEffect, useState } from 'react';

import { useIntersectionObserverProps } from './useInterSectionObserver.types';

const useIntersectionObserver = ({
  root,
  rootMargin = '0px',
  threshold = 0.5,
  onIntersect,
}: useIntersectionObserverProps) => {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);

  useEffect(() => {
    if (!target) return;

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      { root, rootMargin, threshold }
    );
    observer.observe(target);

    return () => observer.unobserve(target);
  }, [target]);

  return { setTarget };
};

export default useIntersectionObserver;
