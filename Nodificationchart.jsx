import React, { useEffect, useState } from "react";
import axios from "axios";


const Notificationchart = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios
      .get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
      .then((response) => {
        const notificationsData = response.data.dasbhoardPage.notifications;
        
        // Repeat user data twice
        const repeatedData = [...notificationsData, ...notificationsData];
        
        setNotifications(repeatedData);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  return (
    <div style={{backgroundColor:'#435c70',width:'42%',marginLeft:'5rem'}}>
      <h2 style={{marginLeft:'2rem',paddingTop:'2rem'}}>Notifications</h2>
      <div style={{width:'90%',marginLeft:'2rem'}} className="notifications-container">
        <div className="scrollable-container">
          {notifications.map((notification, index) => (
            <div key={index} className="notification-card">
              <img src={notification.pic} alt="User" className="user-pic" />
              <div className="notification-content">
                <p className="notification-message">{notification.message}</p>
                <p className="notification-time">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notificationchart;

