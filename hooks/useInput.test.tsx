import { render, renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useInput } from './useInput';

describe('useInput Test', () => {
  test('onChange function unit test', async () => {
    const { result } = renderHook(() => useInput(''), {});
    const { onChange, value } = result.current;
    const { getByPlaceholderText } = render(
      <input onChange={onChange} placeholder='test' />
    );
    expect(value).toEqual('');

    const input = getByPlaceholderText('test');
    await userEvent.type(input, 'This is a test');
    const currentValue = result.current.value;

    expect(currentValue).toEqual('This is a test');
  });
});
