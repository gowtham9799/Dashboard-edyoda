import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";

const AreaChart = () => {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "area-chart",
      },
      xaxis: {
        categories: [],
      },
    //   fill: {
    //     type: "gradient",
    //   },
    },
    series: [],
  });

  useEffect(() => {
    axios
      .get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
      .then((response) => {
        console.log("API Response Data:", response.data);

        const apiData = response.data.dasbhoardPage.latestHits;

        console.log("API Data:", apiData);

        const categories = apiData.months;
        const series = [
          {
            name: "Featured",
            data: apiData.featured,
          },
          {
            name: "Latest",
            data: apiData.latest,
          },
          {
            name: "Popular",
            data: apiData.popular,
          },
        ];

        setChartData({
          ...chartData,
          options: {
            ...chartData.options,
            xaxis: {
              ...chartData.options.xaxis,
              categories: categories,
            },
          },
          series: series,
        });
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  return (
    <div style={{width:'42%',backgroundColor:'#435c70',marginLeft:'5rem',marginTop:'2rem'}}>
      <h2 style={{marginLeft:'2rem',paddingTop:'2rem'}}>Area Chart</h2>
      <ReactApexChart style={{width:'90%',marginLeft:'2rem'}} options={chartData.options} series={chartData.series} type="area" height={350} />
    </div>
  );
};

export default AreaChart;
