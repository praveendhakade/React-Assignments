import React from 'react';
// import logo from './logo.svg';
import './App.css';

let arrow = "<";
let arrowRight = ">";
const employee = {
  name:"Dante",
  email:"dante@Inferno.com",
  phone:478125462,
  employeeId:"000124",
  Appointment:"9:30:00",
  profileImg: "https://www.w3schools.com/howto/img_avatar.png"
}

function App() {
  const {useState} = React;
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  
  React.useEffect(()=> {const timerId = setInterval(()=>  setTime(new Date().toLocaleTimeString()),1000
  );
    return ()=>{
      clearInterval(timerId);
    }
}, [])

  
  return (
    <div className="site-container">
    {/* Start Your code here */}
    <header className='page-header'>
     <div><a href='http://localhost:3000/'>
      <button className='arrow'>{arrow}</button></a>
      </div>
      <div className='title'>
      <h2>{employee.name}</h2>
      <p>{employee.employeeId}</p>
      </div>
      <div> <button className='printBtn'>Print</button></div>
    </header>
    <div className='customer-info'>
      <p><strong>Appointment On: </strong>{employee.Appointment}</p>
      <p><strong>Email: </strong>{employee.email}</p>
      <p><strong>Phone: </strong>{employee.phone}</p>
    </div>
    <strong></strong>
    <div className='order-info'>
      <label><strong>Status</strong><p><li>In Progress</li></p></label>
      <label><strong>Door</strong><p>Lucifer</p></label>
      <label><strong>Time</strong><p>{time}</p></label>
    </div>

    <div className='product-list'>
      <div className='img-check'>
      <label>
      <input type="checkbox"></input></label>
      <img src={employee.profileImg} alt=''  />
      </div>
      <div className='product-info'>
        <h2>Ervin Howell</h2>
        <p>quia et suscipit nsuscipit recusandae consequuntur expedita et cum nreprehenderit</p>
      </div>
      <div><a href='http://localhost:3000/'>
      <button className='arrow'>{arrowRight}</button></a>
      </div>
    </div>

    </div>

  );
}

export default App;
