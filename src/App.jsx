import React, {useState} from 'react'
import './App.css'

//User Data List Rendering
const Users = [
  {
    id: 1,
    name: 'Krishna Babu',
    email: 'krishnababu@gmail.com',
    age: 23,
    city: 'Hyderabad',
    role: 'Frontend Developer'
  },
  {
    id: 2,
    name: 'Sudheer Kumar',
    email: 'sudheerkumar@gmail.com',
    age: 22,
    city: 'Rajahmundry',
    role: 'Embedded Developer'
  },
  {
    id: 3,
    name: 'Pavithra',
    email: 'pavithra@gmail.com',
    age: 20,
    city: 'Visakhapatnam',
    role: 'Full Stack Developer'
  },
  {
    id: 4,
    name: 'Karthik',
    email: 'karthik@gmail.com',
    age: 27,
    city: 'Bangalore',
    role: 'AI Enthausiast'
  },
  {
    id: 5,
    name: 'Karishma',
    email: 'karishma@gmail.com',
    age: 18,
    city: 'Srikakulam',
    role: 'UI/UX Designer'
  }
];

//Login Component
function Login({onLogin}) {
  return (
    <div className='login-container'>
      <div className='login-card'>
        <h2>Welcome Back!</h2>
        <p>Please login to continue</p>
        <input type='email'
               placeholder='Enter Your Email'/>
        <input type='password'
                placeholder='Enter Your Password'/>
        <button onClick={onLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

//Home Component
function Home({onLogout}) {
  return (
    <div className='home-container'>
      <nav className='navbar'>
        <h2>React Dashboard</h2>
        <button className='logout-btn' onClick={onLogout}>
          Logout
        </button>
      </nav>

      <div className="welcome-section">
        <h1>Welcome to Home Page!</h1>
        <p>Explore our user information dashboard.</p>
      </div>

      <h2 className="section-title">Our Team Members</h2>
      <div className="user-container">
        {/* List Rendering using map() */}
        {Users.map((user) => (
          <div className="user-card" key={user.id}>
            <div className="avatar">
               {user.name.charAt(0)}
            </div>
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>City:</strong> {user.city}</p>
            <span className="role">{user.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

//Main App Component
export default function App() {
  // Boolean State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //Conditional Rendering
  return (
    <div>
      {isLoggedIn ? (
        <Home onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}
