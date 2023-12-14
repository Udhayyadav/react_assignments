import Test1 from './components/test1/Test1';
//import Test2 from './components/test2/Test2';
import './App.css'
//import img from './images/img1.avif'
function App() {

  // let emps=[
  //   {eno:100,name:"udhay",age:21,city:"hyderabad"},
  //   {eno:200,name:"narayana",age:21,city:"bombay"},
  //   {eno:300,name:"parthiva",age:21,city:"kolkatha"},
  //   {eno:400,name:"nived",age:21,city:"mizoram"}
  // ];

    //  /* req handler function */
  
  //handling the events
  //   function test(){
  //   console.log("test fun call")
  // }

  //   function testAgain(a){
  //     console.log("test a=",a)
  //   }

  return (
    <div>

      {/* <table className="table text-center">
        <thead>
          <tr>
           <th>Eno</th>
           <th>Name</th>
           <th>Age</th>
           <th>City</th>
          </tr>
        </thead>
        <tbody>
          {
               emps.map(empObj=><tr key={empObj.eno}>
                <td>{empObj.eno}</td>
                <td>{empObj.name}</td>
                <td>{empObj.age}</td>
                <td>{empObj.city}</td>
               </tr>
              
               )
          }    
        </tbody>
      </table> */}
 <h1 className='text-info display-1 bg-light'>welcome to react</h1>
      {/* { grid of cards } */}

      <div className="container">

      {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">

        {
          emps.map(empObj=><div className="col" key={empObj.eno}>
            <div className="card">
              <div className="card-body">
                <h3>{empObj.eno}</h3>
                <h3>{empObj.name} </h3>
                <h3>{empObj.age}</h3>
                <h3>{empObj.city} </h3>

              </div>
            </div>
          </div>
            )
        }

      </div> */}

      {/* <button className="btn btn-success" onClick={test}>click on me</button>
      <button className="btn btn-warning" onClick={()=>testAgain(100)}>click again on me</button>
       */}

       {/* nest test1 component */}

       <Test1></Test1>
       {/* <Test1/> if u dont want any content */}

       


      </div>
      
      
    </div>
  );
}

export default App;
