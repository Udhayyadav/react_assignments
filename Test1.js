import Test2 from '../test2/Test2';
import './Test1.css'
//create test1 component

 function Test1(){
    //state

    return(
        <div className="test1-div">
            <h1>Teast1 component</h1>
            <Test2></Test2>
        </div>
    )
 }

 export default Test1;