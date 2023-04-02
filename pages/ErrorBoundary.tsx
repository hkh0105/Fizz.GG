import React, { Component, ErrorInfo, ReactNode } from 'react';

import Box from 'userInterface/box/Box';
import Typography from 'userInterface/typography/Typography';
import { BoxProps, TypographyProps } from 'types';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: string;
}

export const ErrorBoxProps: BoxProps = {
  height: 'bgSection',
  width: 'bgSection',
};

export const ErrorTextPropsMapper = (error: string): TypographyProps => ({
  type: 'title',
  text: error,
});

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: '',
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error: error.message };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    const { error } = this.state;
    const ErrorTextProps = ErrorTextPropsMapper(error);

    if (error) {
      return (
        <div className='m-auto text-center mt-7 h-bg-section w-bg-section'>
          <Box {...ErrorBoxProps}>
            <div className='mt-7'>
              <Typography {...ErrorTextProps} />
            </div>
          </Box>
        </div>
      );
    }

    if (this.state.hasError) {
      return <h1>Sorry.. there was an error</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
