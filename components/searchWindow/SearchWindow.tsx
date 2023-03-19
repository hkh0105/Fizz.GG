import { FC, FormEventHandler } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRouter } from 'next/router';

import Button from 'userInterface/button/Button';
import Input from 'userInterface/input/Input';
import { useInput } from 'hooks/useInput';
import { SearchWindowProps } from 'types';
import { ButtonPropsMapper, InputPropsMapper } from 'utils';

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

  const MiniIconProps = {
    size: '30',
    className: 'translate-x-10 translate-y-3',
  };

  const IconProps = {
    size: '40',
    className: 'translate-x-10 translate-y-2',
  };

  const MiniInputProps = InputPropsMapper({
    onChange,
    value: nickname,
    placeholder: 'Search',
    required: true,
    labelFor: 'Search',
  });

  const InputProps = InputPropsMapper({
    onChange,
    value: nickname,
    placeholder: 'Search summoner nickname',
    required: true,
    labelFor: 'Search',
  });

  const MiniButtonProps = ButtonPropsMapper({
    label: 'GG',
    color: 'transparent',
    type: 'submit',
  });

  const ButtonProps = ButtonPropsMapper({
    label: 'Search',
    type: 'submit',
  });

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
          <Button {...ButtonProps} />
        </div>
      )}
    </form>
  );
};

export default SearchWindow;
