import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "horizontal-bar-chart",
        type: "bar", // Specify "bar" chart type
        stacked: true, // Enable stacking for horizontal bars
      },
      xaxis: {
        categories: [],
      },
      plotOptions: {
        bar: {
          horizontal: true, // Make bars horizontal
        },
      },
    },
    series: [
      {
        name: "Performance",
        data: [],
      },
    ],
  });

  useEffect(() => {
    axios
      .get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
      .then((response) => {
        console.log("API Response Data:", response.data);

        const performanceData = response.data.dasbhoardPage.performance;

        console.log("Performance Data:", performanceData);

        const categories = Object.keys(performanceData); // Get the performance categories
        const data = Object.values(performanceData); // Get the performance values

        setChartData({
          ...chartData,
          options: {
            ...chartData.options,
            xaxis: {
              ...chartData.options.xaxis,
              categories: categories,
            },
          },
          series: [
            {
              name: "Performance",
              data: data,
            },
          ],
        });
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  return (
    <div style={{width:'42%',backgroundColor:'#435c70',marginLeft:'5rem',marginTop:'2rem'}}>
      <h2 style={{marginLeft:'2rem',paddingTop:'2rem'}}>Horizontal Bar Chart</h2>
      <ReactApexChart style={{width:'90%',marginLeft:'2rem'}} options={chartData.options} series={chartData.series} type="bar" height={350} />
    </div>
  );
};

export default BarChart;
