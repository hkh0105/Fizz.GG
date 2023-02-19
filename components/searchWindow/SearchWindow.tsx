import { FC, FormEventHandler } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRouter } from 'next/router';

import Button from 'userInterface/button/Button';
import Input from 'userInterface/input/Input';
import { useInput } from 'hooks/useInput';
import { SearchWindowProps } from 'types';

const SearchWindow: FC<SearchWindowProps> = ({ mini = false }) => {
  const { value: nickname, onChange } = useInput('');
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    await router.push({
      pathname: `/search/[nickname]`,
      query: { nickname },
    });
  };

  return (
    <form className='w-2/5' onSubmit={handleSubmit}>
      {mini ? (
        <div className='flex flex-row justify-center w-full justify-items-center'>
          <AiOutlineSearch size='30' className='translate-x-10 translate-y-3' />
          <Input
            onChange={onChange}
            value={nickname}
            placeholder='Search summoner nickname'
            required={true}
            labelFor='Search'
          />
          <div className='translate-x-[-55px] translate-y-[7px]'>
            <Button label='GG' color='transparent' type='submit' />
          </div>
        </div>
      ) : (
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
      )}
    </form>
  );
};

export default SearchWindow;
