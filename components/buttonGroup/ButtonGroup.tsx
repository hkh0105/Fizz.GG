import { FC } from 'react';

import Button from 'userInterface/button/Button';
import { ButtonGroupProps } from 'types';

const ButtonGroup: FC<ButtonGroupProps> = ({
  containerClassName,
  ButtonPropsArray,
}) => {
  return (
    <div className={containerClassName}>
      {ButtonPropsArray.map((buttonProps) => (
        <Button {...buttonProps} />
      ))}
    </div>
  );
};

export default ButtonGroup;
