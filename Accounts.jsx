import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "./Header";
import Footer from "./Footer";

function YourComponent() {
  const [accountsData, setAccountsData] = useState({});
  const [selectedObject, setSelectedObject] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    // Fetch data from Firebase and set it to accountsData
    const apiUrl = 'https://reactmusicplayer-ab9e4.firebaseio.com/project-data/accountsPage.json';

    axios.get(apiUrl)
      .then((response) => {
        setAccountsData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSelectChange = (event) => {
    // Update selectedObject when the user selects an object
    const selectedObjectName = event.target.value;
    setSelectedOption(selectedObjectName);
    setSelectedObject(accountsData[selectedObjectName]);

    // Clear the profile picture when a new object is selected
    setProfilePicture(null);
  };

  const handleFileChange = (event) => {
    // Handle file input change and store the selected file in state
    const file = event.target.files[0];
    setProfilePicture(file);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Save the edited data to local storage
    localStorage.setItem('editedData', JSON.stringify(selectedObject));
  };

  const handleDelete = () => {
    // Remove the selected object from local storage and reset the form
    localStorage.removeItem('editedData');
    setSelectedOption('');
    setSelectedObject(null);
    setProfilePicture(null);
  };

  return (
    <div>
      <Header/>
      <div style={{backgroundColor:'#4e657a'}}>
      <form onSubmit={handleFormSubmit}>
     

        <div className='lisacc'>
          <h2 className='lisaccp1'>List of Accounts </h2>
          <p class="text-white lisaccp2">Accounts</p>
        <select className='select1' onChange={handleSelectChange} value={selectedOption}>
        <option value="">Select an Object</option>
        {Object.keys(accountsData).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
        </div>



<div style={{display:'flex'}}>

        <div className='lisacc3'>
        <h2 class="tm-block-title">Change Avator</h2>
          <div>
          <img src="blob:http://localhost:3000/889207b4-2a89-44ed-b771-6b51a265e572" alt="Profile Pic"></img>
          </div>
          <input style={{}} type="file" accept="image/*"  onChange={handleFileChange} />
        </div>
    

<div className='lisacc4'>

  <div style={{display:'flex'}}>
        <div >
        <h2 class="tm-block-title">Account Settings</h2>
        <div>
          <label className='padd'>Account Name:</label>
          </div>
          <input
            type="text"
            className='marg'
            value={selectedObject ? selectedObject.name : ''}
            onChange={(e) => setSelectedObject({ ...selectedObject, name: e.target.value })}
          />
        </div>

        <div style={{marginTop:'98px'}}>
          <div>
          <label className='padd'>Account Email:</label>
          </div>
          <input
          className='marg'
            type="text"
            value={selectedObject ? selectedObject.email : ''}
            onChange={(e) => setSelectedObject({ ...selectedObject, email: e.target.value })}
          />
        </div>
        </div>

        <div style={{display:'flex'}}>
        <div >
          <div>
          <label  className='padd1'>Password:</label>
          </div>
          <input
            type="text"
            className='marg'
            value={selectedObject ? selectedObject.password : ''}
            onChange={(e) => setSelectedObject({ ...selectedObject, password: e.target.value })}
          />
        </div>
        <div>
          <div>
          <label  className='padd1'>Re-enter Password:</label>
          </div>
          <input
            type="text"
            className='marg'
            value={selectedObject ? selectedObject.repassword : ''}
            onChange={(e) => setSelectedObject({ ...selectedObject, repassword: e.target.value })}
          />
        </div>
        </div>
     
      
      

        <button  className='marg1' type="submit">Update My Profile</button>
        <button  className='marg2' type="button" onClick={handleDelete}>Delete</button>
      </div>
      </div>



      </form>
      </div>
      <Footer/>
    </div>
  );
}

export default YourComponent;