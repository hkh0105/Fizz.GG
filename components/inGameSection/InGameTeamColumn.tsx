import { FC } from 'react';

import InGameUserRow from './InGameUserRow';
import { useGetRuneJson, useGetSpellJson } from 'hooks/queries';
import {
  getInGameRunes,
  getInGameSpells,
  InGamerUserRowPropsMapper,
} from 'utils';
import { InGameTeamColumnProps, InGameUser } from 'types';

const InGameTeamColumn: FC<InGameTeamColumnProps> = ({ users }) => {
  const { spellData } = useGetSpellJson();
  const { runeData } = useGetRuneJson();

  return (
    <div className='flex-col'>
      {users.map((user: InGameUser) => {
        // Spell
        const spells = getInGameSpells(spellData, user.spell1Id, user.spell2Id);
        //Rune
        const runes = getInGameRunes(runeData, user.perks);

        const InGameUserRowProps = InGamerUserRowPropsMapper(
          user.summonerName,
          runes,
          spells,
          user.profileIconId
        );

        return <InGameUserRow {...InGameUserRowProps} key={user.summonerId} />;
      })}
    </div>
  );
};

export default InGameTeamColumn;
