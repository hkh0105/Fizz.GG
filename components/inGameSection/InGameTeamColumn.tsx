import { FC } from 'react';

import InGameUserRow from './InGameUserRow';
import { useGetRuneJson, useGetSpellJson } from 'hooks/queries';
import { getInGameRunes, getInGameSpells } from 'utils';
import { InGameTeamColumnProps, InGameUser } from 'types';
import { InGamerUserRowPropsMapper } from './InGameTeamColumn.props';

const InGameTeamColumn: FC<InGameTeamColumnProps> = ({ users }) => {
  const { spellData } = useGetSpellJson();
  const { runeData } = useGetRuneJson();

  return (
    <div className='flex-col'>
      {users.map((user: InGameUser) => {
        const { summonerName, profileIconId, summonerId } = user;

        const spells = getInGameSpells(spellData, user.spell1Id, user.spell2Id);
        const runes = getInGameRunes(runeData, user.perks);

        const InGameUserRowProps = InGamerUserRowPropsMapper(
          summonerName,
          runes,
          spells,
          profileIconId
        );

        return <InGameUserRow {...InGameUserRowProps} key={summonerId} />;
      })}
    </div>
  );
};

export default InGameTeamColumn;
