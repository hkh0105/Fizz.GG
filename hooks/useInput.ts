import { ChangeEvent, useState } from 'react';

export const useInput = (initialState: string) => {
  const [value, setValue] = useState(initialState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
  };

  return { value, onChange, setValue };
};
