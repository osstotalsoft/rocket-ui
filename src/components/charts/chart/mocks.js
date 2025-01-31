export const chartOptions = {
  maintainAspectRatio: false,
  barPercentage: 0.2,
  plugins: {
    title: {
      display: false,
      text: ''
    },
    legend: {
      display: false,
      position: 'bottom'
    }
  },
  layout: {
    padding: {
      left: 0,
      right: 20,
      top: 20,
      bottom: 0
    }
  },
  scales: {
    x: {
      offset: false,
      grid: {
        display: true,
        borderDash: [1, 5],
        zeroLineColor: 'rgb(255,255,255)',
        drawBorder: false,
        zeroLineWidth: 0
      },
      scaleLabel: {
        display: false,
        labelString: ''
      },
      ticks: {
        autoSkip: false
      }
    },
    y: {
      grid: {
        display: true,
        borderDash: [1, 5],
        zeroLineColor: 'rgb(255,255,255)',
        drawBorder: false,
        zeroLineBorderDash: [1, 5]
      },
      scaleLabel: {
        display: false,
        labelString: ''
      }
    }
  }
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const lineChartData = {
  labels,
  datasets: [
    {
      data: labels.map(() => Math.floor(Math.random() * 101)),
      label: 'Line',
      borderColor: '#FF0000'
    },
    {
      data: labels.map(() => Math.floor(Math.random() * 101)),
      label: 'Line2',
      borderColor: '#0400ff'
    }
  ]
}

export const barChartData = {
  labels,
  datasets: [
    {
      data: labels.map(() => Math.floor(Math.random() * 101)),
      label: 'Bar',
      backgroundColor: '#FF0000'
    },
    {
      data: labels.map(() => Math.floor(Math.random() * 101)),
      label: 'Bar2',
      backgroundColor: '#0400ff'
    }
  ]
}
