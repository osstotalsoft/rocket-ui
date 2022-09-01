export interface StatsChartProps {
  /**
   * Chart type.
   */
  type: 'line' | 'bar'
  /**
   * Chart title.
   */
  title?: string
  /**
   * The text content of chart.
   */
  text?: string
  /**
   * Chart icon.
   */
  StatIcon?: unknown
  /**
   * @default 'grey'
   * Chart icon color.
   */
  iconColor?: 'warning' | 'primary' | 'danger' | 'success' | 'info' | 'rose' | 'grey'
  /**
   * @default 'info'
   * Chart color.
   */
  chartColor?: 'warning' | 'primary' | 'danger' | 'success' | 'info' | 'rose' | 'grey'
  /**
   * Chart status text.
   */
  statText?: React.ReactNode
  /**
   * Chart data.
   */
  data: {
    labels: []
    datasets: []
  }
  /**
   *  Action to be displayed in the right corner of the card.
   */
  statAction?: React.ReactNode
}

/**
 * Demos: 
 * 
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/charts/stats-chart
 *
 * https://react-chartjs-2.js.org/examples
 */

export default function StatsChart(props: StatsChartProps): JSX.Element
