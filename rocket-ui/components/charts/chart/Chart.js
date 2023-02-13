import React from 'react'
import PropTypes from 'prop-types'
import Card from '@totalsoft_oss/rocket-ui.components.surfaces.card'
import { Chart as BaseChart } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js'
import { StyledCardHeader, CardContent, iconStyle } from './ChartStyles'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement)

const Chart = ({ title, subheader, icon: Icon, iconColor, type, data, ...chartProps }) => {
  return (
    <Card disablePadding hasIcon>
      <StyledCardHeader title={title} subheader={subheader} hasIcon={true} avatar={<Icon style={iconStyle} />} iconColor={iconColor} />
      <CardContent>
        <BaseChart type={type} data={data} {...chartProps} />
      </CardContent>
    </Card>
  )
}

Chart.propTypes = {
  /**
   * Chart title.
   */
  title: PropTypes.node,
  /**
   * Chart subtitle.
   */
  subheader: PropTypes.node,
  /**
   * Chart icon.
   */
  icon: PropTypes.elementType,
  /**
   * Chart icon color.
   */
  iconColor: PropTypes.string,
  /**
   * Chart type.
   */
  type: PropTypes.string.isRequired,
  /**
   * Chart data.
   */
  data: PropTypes.shape({
    labels: PropTypes.array.isRequired,
    datasets: PropTypes.array.isRequired
  })
}

export default Chart
