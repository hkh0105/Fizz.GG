import { FC, FormEventHandler } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRouter } from 'next/router';

import Button from 'userInterface/button/Button';
import Input from 'userInterface/input/Input';
import { useInput } from 'hooks/useInput';
import { SearchWindowProps } from 'types';
import {
  DefaultButtonProps,
  IconProps,
  InputPropsMapper,
  MiniButtonProps,
  MiniIconProps,
  MiniInputPropsMapper,
} from './SearchWindow.props';

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

  const MiniInputProps = MiniInputPropsMapper(onChange, nickname);
  const InputProps = InputPropsMapper(onChange, nickname);

  return (
    <form className='w-2/5' onSubmit={handleSubmit}>
      {mini ? (
        <div className='flex flex-row justify-center w-full justify-items-center'>
          <AiOutlineSearch {...MiniIconProps} />
          <Input {...MiniInputProps} />
          <div className='translate-x-[-55px] translate-y-[7px]'>
            <Button {...MiniButtonProps} />
          </div>
        </div>
      ) : (
        <div className='flex flex-row justify-center w-full justify-items-center'>
          <AiOutlineSearch {...IconProps} />
          <Input {...InputProps} />
          <Button {...DefaultButtonProps} />
        </div>
      )}
    </form>
  );
};

export default SearchWindow;
