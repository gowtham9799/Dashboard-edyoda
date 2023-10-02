import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";

const Piechart = () => {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "pie-chart",
        type: "pie", // Specify "pie" chart type
      },
      labels: [],
    },
    series: [],
  });

  useEffect(() => {
    axios
      .get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
      .then((response) => {
        console.log("API Response Data:", response.data);

        const storageData = response.data.dasbhoardPage.storage;

        console.log("Storage Data:", storageData);

        const labels = Object.keys(storageData); // Get the labels
        const data = Object.values(storageData); // Get the data values

        setChartData({
          ...chartData,
          options: {
            ...chartData.options,
            labels: labels,
          },
          series: data,
        });
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  return (
    <div style={{width:'42%',backgroundColor:'#435c70',marginLeft:'5rem'}}>
      <h2 style={{marginLeft:'2rem',paddingTop:'2rem'}}>Pie Chart</h2>
      <ReactApexChart style={{width:'90%',marginLeft:'2rem'}} options={chartData.options} series={chartData.series} type="pie" height={350} />
    </div>
  );
};

export default Piechart;
