import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

// Define the accountsPage object with user data
const accountsPage = {
  "Admin": {
    "email": "eduardfranz@gmail.com",
    "name": "Eduard Franz",
    "password": "jvoxidf09234",
    // Other Admin details
  },
  "Customer": {
    "email": "larathayer@rediffmail.com",
    "name": "Lara Thayer",
    "password": "238jf9823j",
    // Other Customer details
  },
  "Editor": {
    "email": "beckygeorge@ymail.com",
    "name": "Becky George",
    "password": "sdijv02394",
    // Other Editor details
  },
  "Merchant": {
    "email": "craigchaney@hotmail.com",
    "name": "Craig Chaney",
    "password": "wd92jf09wu",
    // Other Merchant details
  }
};


const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = () => {
    // Check if the provided email and password match any account
    const user = Object.values(accountsPage).find(
      (account) => account.email === email && account.password === password
    );

    if (email && password) {
      navigate('/Dashboard'); // Redirect to the dashboard page on successful login
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div style={{width:'100%',backgroundColor:'#4e657a',marginLeft:'0rem'}}>
       <Header/>
       <div className='log'>
      <h5 style={{color:'white',paddingLeft:'100px',paddingTop:'2rem'}}>Welcome to Dashboard, Login</h5>
      <h5 style={{color:'white',paddingLeft:'30px',paddingTop:'30px'}}>Username</h5>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{marginLeft:'30px',marginTop:'5px',width:'85%',height:'40px'}}
      />
      <h5 style={{color:'white',paddingLeft:'30px',paddingTop:'30px'}}>Password</h5>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{marginLeft:'30px',marginTop:'5px',width:'85%',height:'40px'}}
      />
      <div>
      <button  style={{marginLeft:'30px',marginTop:'30px',width:'85%',height:'40px'}} onClick={handleLogin}>Login</button>
      </div>
      <div>
      <button  style={{marginLeft:'30px',marginTop:'30px',width:'85%',height:'40px'}} onClick={handleLogin}>Forgot Your Password?</button>
      </div>
      </div>
      <div style={{marginTop:'60px'}}>
      <Footer />
      </div>
   
    </div>
  );
};

const DashboardPage = ({ user }) => {
  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      {/* Add dashboard content here */}
    </div>
  );
};

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    // Set the logged-in user in the application state
    setLoggedInUser(user);
  };

  return (
    <div>
     
      {loggedInUser ? (
        <DashboardPage user={loggedInUser} />
      ) : (
        <LoginPage onLogin={handleLogin} /> 
      )}
    </div>
  );
};

export default App;
