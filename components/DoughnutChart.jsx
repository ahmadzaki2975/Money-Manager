import { Doughnut } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'

export const DoughnutChart = (props) => {
  if(props.data !== undefined) {
    return <Doughnut data={props.data} options={{
      plugins: {
        legend: {
          labels: {
            color: 'white'
          }
        }
      }
    }}/>;
  }
}