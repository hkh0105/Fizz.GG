import { ResponsivePie } from '@nivo/pie';
import { FC } from 'react';

const PieChart: FC<any> = ({
  data,
  margin = { top: 0, right: 0, bottom: 0, left: 0 },
  legends = null,
  onPadClick,
}) => {
  return (
    <>
      <ResponsivePie
        /**
         * chart에 사용될 데이터
         */
        enableArcLinkLabels={false}
        data={data}
        /**
         * chart margin
         */
        margin={margin}
        /**
         * chart 중간 빈공간 반지름
         */
        innerRadius={0.5}
        /**
         * pad 간격
         */
        padAngle={0.7}
        /**
         * pad radius 설정 (pad별 간격이 있을 시 보임)
         */
        cornerRadius={3}
        /**
         * chart 색상
         */
        colors={{ datum: 'data.color' }}
        // 커스터하여 사용할 때
        // colors={{ scheme: 'nivo' }} // nivo에서 제공해주는 색상 조합 사용할 때
        /**
         * pad border 두께 설정
         */
        borderWidth={0}
        /**
         * link label skip할 기준 각도
         */
        arcLinkLabelsSkipAngle={10}
        /**
         * link label 색상
         */
        /** 선길이 */
        arcLinkLabelsStraightLength={1}
        arcLinkLabelsTextColor='#33333'
        /**
         * link label 연결되는 선 두께
         */
        arcLinkLabelsThickness={1}
        /**
         * link label 연결되는 선 색상
         */
        arcLinkLabelsColor={{ from: 'color' }} // pad 색상에 따라감
        /**
         * label (pad에 표현되는 글씨) skip할 기준 각도
         */
        arcLabelsSkipAngle={10}
        theme={{
          /**
           * label style (pad에 표현되는 글씨)
           */
          labels: {
            text: {
              fontSize: 14,
              fill: 'white',
            },
          },
        }}
        /**
         * pad 클릭 이벤트
         */
        onClick={onPadClick}
        /**
         * legend 설정 (default로 하단에 있는 색상별 key 표시)
         */
        legends={[
          {
            anchor: legends?.anchor ?? 'bottom',
            direction: 'column',
            justify: false,
            translateX: legends?.translateX ?? 75,
            translateY: legends?.translateY ?? -10,
            itemsSpacing: legends?.itemsSpacing ?? 2,
            itemWidth: legends?.itemWidth ?? 30,
            itemHeight: legends?.itemHeight ?? 20,
            itemDirection: legends?.itemDirection ?? 'left-to-right',
            itemOpacity: 0.85,
            itemTextColor: 'black',
            symbolSize: legends?.symbolSize ?? 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default PieChart;
