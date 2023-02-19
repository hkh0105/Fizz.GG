import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from 'userInterface/button/Button';
import { ButtonGroupProps } from 'types';

const ButtonGroup: FC<ButtonGroupProps> = ({ containerClassName, buttons }) => {
  return (
    <div className={containerClassName}>
      {buttons?.map((buttonProps) => (
        <Button {...buttonProps} key={uuidv4()} />
      ))}
    </div>
  );
};

export default ButtonGroup;
