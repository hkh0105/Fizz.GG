import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from 'userInterface/button/Button';
import { ButtonGroupProps } from 'types';

const ButtonGroup: FC<ButtonGroupProps> = ({
  containerClassName,
  ButtonPropsArray,
}) => {
  return (
    <div className={containerClassName}>
      {ButtonPropsArray.map((buttonProps) => (
        <Button {...buttonProps} key={uuidv4()} />
      ))}
    </div>
  );
};

export default ButtonGroup;
