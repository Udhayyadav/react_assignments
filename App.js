
import './App.css'

function App() {

  // state
  let a=10;//dynamic data(it state can be changed)
  let personName='Ravi';

  let student={
    sno:100,
    name:"bhanu"
  }

  let skills=['js','angular','react'];

  return (
    <div>
      <h1 className='text-danger display-1 bg-warning'>welcome to react</h1>
      <p>value of a is={a} </p>
      <h5 style={{backgroundColor:'red',color:'white'}}>inline</h5>
      <h2>student number={student.sno}</h2>
       <h2>person name={personName}</h2>
      { 
        skills.map(skill => <h2 key={skill}>{skill}</h2>)
      }
      </div>
  );
}

export default App;
