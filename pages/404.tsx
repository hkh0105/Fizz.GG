import Link from 'next/link';
import type { NextPage } from 'next';

const Custom404: NextPage = () => {
  return (
    <>
      <h1>404 - page Not Fount</h1>
      <Link href='/'>home</Link>
    </>
  );
};

export default Custom404;
