export type ChartData<T> = { id: string; value: T; color: string };

export interface PieChartProps<T> {
  data: T[];
  margin?: Margin;
}

export type Margin = {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
};
