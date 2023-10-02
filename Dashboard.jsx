
import Header from './Header';
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";
import AreaChart from './Areachat';
import BarChart from './Barchart';
import Piechart from './Piechart';
import Table from './Table';
import Nodificationchart from './Nodificationchart';
import Footer from './Footer';


function Dashboard() {
  const [responseData, setResponseData] = useState(null);
  const [specificObject, setSpecificObject] = useState(null);

 

  useEffect(() => {
    axios
      .get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
      .then((response) => {
        setResponseData(response.data);
  
        // Log the entire response data to the console
        console.log(response.data);
  
        // Find the object with the specified name
        const specificName = "dasbhoardPage";
        const foundObject = response.data[specificName];
        setSpecificObject(foundObject);
        console.log(foundObject);

        const firstFlowChart = 'latestHits';
        const foundObject1 = foundObject[firstFlowChart];
        setSpecificObject(foundObject1);
        console.log(foundObject1);

        
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);


  

  return (
    <div style={{backgroundColor:'#4e657a'}}>
      <Header/>
       {/* <h2>API Response Data</h2>
      {responseData ? (
        <pre>{JSON.stringify(responseData, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}  */}

      {/* <div>
        {specificObject ? (
          <div>
            <h1>Specific Object: {specificObject.name}</h1>
            <img src={specificObject.profilePic} alt={specificObject.name} />
           
          </div>
        ) : (
          <p>Specific object not found</p>
        )}
      </div> */}
<div style={{display:'flex'}} >
<AreaChart />
      <BarChart />
</div>

<div style={{display:'flex',marginTop:'2rem'}} >
      <Piechart />
      <Nodificationchart/>
      </div>
      <div style={{marginTop:'2rem'}} >
      <Table />
      </div>
      <div style={{marginTop:'2rem'}}>
      <Footer/>
      </div>
     
    </div>
  );
}


export default Dashboard;