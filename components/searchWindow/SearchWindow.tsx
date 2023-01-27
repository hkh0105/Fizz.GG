import { FC, FormEventHandler } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import Button from 'userInterface/button/Button';
import Input from 'userInterface/input/Input';
import { useInput } from 'hooks/useInput';
import { SearchWindowProps } from 'types';

const SearchWindow: FC<SearchWindowProps> = ({ onSubmit }) => {
  const { value: nickname, onChange } = useInput('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    onSubmit(nickname);
  };

  return (
    <form className='w-2/5' onSubmit={handleSubmit}>
      <div className='flex flex-row justify-center w-full justify-items-center'>
        <AiOutlineSearch size='40' className='translate-x-10 translate-y-2' />
        <Input
          onChange={onChange}
          value={nickname}
          placeholder='Search summoner nickname'
          required={true}
          labelFor='Search'
        />
        <Button label='Search' type='submit' />
      </div>
    </form>
  );
};

export default SearchWindow;
