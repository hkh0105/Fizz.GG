import { FC } from 'react';

import InGameUserRow from './InGameUserRow';
import { useGetRuneJson, useGetSpellJson } from 'hooks/queries';
import { getInGameRunes, getInGameSpells } from 'utils';
import { InGameTeamColumnProps, InGameUser, InGameUserRowProps } from 'types';

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

        const InGameUserRowProps: InGameUserRowProps = {
          nickname: user.summonerName,
          profileIconId: user.profileIconId,
          runes,
          spells,
        };

        return <InGameUserRow {...InGameUserRowProps} key={user.summonerId} />;
      })}
    </div>
  );
};

export default InGameTeamColumn;
