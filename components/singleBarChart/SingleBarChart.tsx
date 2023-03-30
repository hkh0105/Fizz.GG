import { FC } from 'react';

import Typography from 'userInterface/typography/Typography';
import { SingleBarTypographyPropsMapper } from './SingleBarChart.props';
import {
  SingleBarChartProps,
  SingleBarColorMapper,
} from './SingleBarChart.types';

const SingleBarChart: FC<SingleBarChartProps> = ({
  title,
  startValue,
  endValue,
  totalValue,
  startColor,
  endColor,
  width,
  height,
  marginClass = '',
  titleSize,
  titleColor,
  valueSize,
  valueColor,
  isValueShow,
}) => {
  const colorMapper: SingleBarColorMapper = {
    red: 'bg-red-400',
    blue: 'bg-blue-400',
    white: 'bg-white',
    gray: 'bg-gray-500',
  };

  const className = 'flex flex-col items-center' + ' ' + marginClass;

  const startRate = startValue / totalValue;
  const startWidth = width * startRate;
  const startBarColorClassName = colorMapper[startColor];
  const startBarClassName = startBarColorClassName;

  const endBarColorClassName = colorMapper[endColor];
  const endBarClassName = endBarColorClassName;

  const TitleProps = SingleBarTypographyPropsMapper(
    title,
    titleSize,
    titleColor
  );
  const StartValueProps = SingleBarTypographyPropsMapper(
    String(startValue),
    valueSize,
    valueColor
  );
  const EndValueProps = SingleBarTypographyPropsMapper(
    String(endValue),
    valueSize,
    valueColor
  );

  return (
    <div className={className}>
      {title && <Typography {...TitleProps} />}
      <div
        className='flex items-center'
        style={{ width: width, height: height }}
      >
        <div
          className={startBarClassName}
          style={{ width: startWidth, height: height }}
        >
          {isValueShow && <Typography {...StartValueProps} />}
        </div>
        <div
          className={endBarClassName}
          style={{ width: width - startWidth, height: height }}
        >
          {isValueShow && <Typography {...EndValueProps} />}
        </div>
      </div>
    </div>
  );
};

export default SingleBarChart;
