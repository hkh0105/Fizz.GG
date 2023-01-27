import { FC } from 'react';

type Rank = {
  nickname: string;
};

const Rank: FC<Rank> = ({ nickname }) => {
  return (
    <>
      <div>{nickname}</div>
    </>
  );
};

export default Rank;
