// import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container App">
  {/* Start your React code here */}
  <img className="App-logo" src={employee.profileImg} alt='' />
  <h1 className="profileName">{employee.name}</h1>
  <h5 className="subHeading">Location</h5>
  <h3 className='details'>{employee.location}</h3>
  <h5 className="subHeading">Blood Group</h5>
  <h3 className='details'>{employee.bloodGroup}</h3>
  <h5 className="subHeading">Age</h5>
  <h3 className='details'>{employee.age}</h3>
</div>
)
}



export default App;
