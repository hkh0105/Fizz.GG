import { FC } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { useInput } from 'hooks/useInput';
import { ISearchWindowProps } from 'types';
import Button from 'userInterface/button/Button';
import Input from 'userInterface/input/Input';

const SearchWindow: FC<ISearchWindowProps> = ({ callback }) => {
  const { value: nickname, onChange } = useInput('');

  const clickButton = () => {
    callback(nickname);
  };

  return (
    <form className='w-2/5'>
      <div className='flex flex-row justify-center w-full justify-items-center'>
        <AiOutlineSearch size='40' className='translate-x-10 translate-y-2' />
        <Input
          onChange={onChange}
          value={nickname}
          placeholder='Search summoner nickname'
          required={true}
          labelFor='Search'
        />
        <Button label='Search' onClick={clickButton} />
      </div>
    </form>
  );
};

export default SearchWindow;
