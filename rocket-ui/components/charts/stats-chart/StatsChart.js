import React from 'react'
import PropTypes from 'prop-types'
import {
  StyledCard,
  CardActions,
  CardCategory,
  CardContent,
  StyledCardHeader,
  CardStatContainer,
  CardTitle,
  StatIconStyle,
  StatAction
} from './StatsChartStyles'
import { Chart } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js'
import { Divider } from '@mui/material'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement)

function StatsChart(props) {
  const { chartColor, iconColor, title, text, statText, StatIcon, type, data, statAction, ...chartProps } = props

  return (
    <StyledCard disablePadding>
      <StyledCardHeader color={chartColor} subheader={<Chart type={type} data={data} {...chartProps} />} />
      <CardContent>
        <CardTitle variant='subtitle1'>{title}</CardTitle>
        {text && <CardCategory variant='subtitle2'>{text}</CardCategory>}
      </CardContent>
      {StatIcon || statText ? (
        <>
          <Divider />
          <CardActions>
            <CardStatContainer>
              {StatIcon && <StatIcon style={{ ...StatIconStyle }} color={iconColor} />}
              {statText}
            </CardStatContainer>
            <StatAction>{statAction}</StatAction>
          </CardActions>
        </>
      ) : null}
    </StyledCard>
  )
}

StatsChart.defaultProps = {
  iconColor: 'grey',
  chartColor: 'info'
}

StatsChart.propTypes = {
  /**
   * Chart type.
   */
  type: PropTypes.oneOf(['line', 'bar']).isRequired,
  /**
   * Chart title.
   */
  title: PropTypes.string,
  /**
   * The text content of chart.
   */
  text: PropTypes.string,
  /**
   * Chart icon.
   */
  StatIcon: PropTypes.any,
  /**
   * Chart icon color.
   */
  iconColor: PropTypes.oneOf(['warning', 'primary', 'danger', 'success', 'info', 'rose', 'grey']),
  /**
   * Chart color.
   */
  chartColor: PropTypes.oneOf(['warning', 'primary', 'danger', 'success', 'info', 'rose', 'grey']),
  /**
   * Chart status text.
   */
  statText: PropTypes.node,
  /**
   * Chart data.
   */
  data: PropTypes.shape({
    labels: PropTypes.array.isRequired,
    datasets: PropTypes.array.isRequired
  }),
  /**
   *  Actions to be displayed in the right corner of the card.
   */
  statAction: PropTypes.node
}

export default StatsChart
