import { Card } from "antd";
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function DashboardChart() {
  const [reveneuData, setReveneuData] = useState({
    labels: [],
    datasets: [],
  });

  // useEffect(() => {
  //
  //     });

  //     const dataSource = {
  //       labels,
  //       datasets: [
  //         {
  //           label: "Revenue",
  //           data: data,
  //           backgroundColor: "rgba(255, 0, 0, 1)",
  //         },
  //       ],
  //     };

  //     setReveneuData(dataSource);
  //   });
  // }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Order Revenue",
      },
    },
  };

  return (
    <Card style={{ width: 500, height: 250 }}>
      {/* <Bar options={options} data={reveneuData} /> */}
    </Card>
  );
}

export default DashboardChart;
