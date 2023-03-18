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

  const MiniFormProps = { className: 'w-96', onsubmit: handleSubmit };

  const MiniIconProps = {
    size: '30',
    className: 'translate-x-10 translate-y-3',
  };

  const MiniInputProps = InputPropsMapper({
    onChange,
    value: nickname,
    labelFor: 'Search',
    labelStyle:
      'peer-focus:-translate-y-[1px] peer-focus:-translate-x-20 peer-focus:text-[3px] peer-focus:text-blue-600 peer-focus:text-blue-600 peer-focus:text-blue-500 absolute -translate-x-14 translate-y-4 italic focus-visible:translate-x-[-30px] focus-within:translate-y-[-30px],translate-y-10 text-gray-400 text-sm',
    required: true,
  });

  const MiniButtonWrapperProps = {
    className: 'translate-x-[-55px] translate-y-[7px]',
  };

  const MiniButtonProps = ButtonPropsMapper({
    label: 'GG',
    color: 'transparent',
    type: 'submit',
  });

  const FormProps = { className: 'w-[800px]', onsubmit: handleSubmit };

  const WrapperProps = {
    className: 'flex flex-row justify-center w-full justify-items-center',
  };

  const IconProps = { size: '40', className: 'translate-x-10 translate-y-2' };

  const InputProps = InputPropsMapper({
    onChange,
    value: nickname,
    labelFor: 'Search summoner nickname',
    labelStyle:
      'peer-focus:-translate-y-[1px] peer-focus:translate-x-[365px] peer-focus:text-[3px] peer-focus:text-blue-600 peer-focus:text-blue-600 peer-focus:text-blue-500 absolute left-1 translate-x-[380px] translate-y-4 italic focus-visible:translate-x-[-30px] focus-within:translate-y-[-30px],translate-y-10 text-gray-400 text-sm',
    required: true,
  });

  const ButtonProps = ButtonPropsMapper({
    label: 'Search',
    type: 'submit',
  });

  return (
    <>
      {mini ? (
        <form {...MiniFormProps}>
          <div {...WrapperProps}>
            <AiOutlineSearch {...MiniIconProps} />
            <Input {...MiniInputProps} />
            <div {...MiniButtonWrapperProps}>
              <Button {...MiniButtonProps} />
            </div>
          </div>
        </form>
      ) : (
        <form {...FormProps}>
          <div {...WrapperProps}>
            <AiOutlineSearch {...IconProps} />
            <Input {...InputProps} />
            <Button {...ButtonProps} />
          </div>
        </form>
      )}
    </>
  );
};

export default SearchWindow;
