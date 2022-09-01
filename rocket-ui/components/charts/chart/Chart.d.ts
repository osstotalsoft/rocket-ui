import { SvgIconComponent } from '@mui/icons-material'

export interface ChartProps {
  /**
   * Chart title.
   */
  title?: React.ReactNode
  /**
   * Chart subtitle.
   */
  subheader?: React.ReactNode
  /**
   * Chart icon.
   */
  icon?: React.ElementType<SvgIconComponent>
  /**
   * Chart icon color.
   */
  iconColor?: string
  /**
   * Chart type.
   */
  type: string
  /**
   * Chart data.
   */
  data: {
    labels: []
    datasets: []
  }
}

/**
 * Demos: 
 * 
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/charts/chart
 *
 * https://react-chartjs-2.js.org/examples
 */

export default function Chart(props: ChartProps): JSX.Element
