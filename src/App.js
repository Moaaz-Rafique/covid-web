
import { Provider } from 'react-redux'
import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {  
    
  let covid = useSelector(state => state.covid);
  let dispatch = useDispatch();
  useEffect(()=>{
      axios.get('https://api.covidtracking.com/v1/states/current.json')
  .then(res=>{
      dispatch({type: "UPDATEDATA",covid: (res.data)})
  })
  },[])  
  const [s,setS]=useState(0)
  const handleChange=(e)=>{
      setS(e.target.value) 
  }
  return (
    <Provider>
      <div>
          <h1>Covid Tracker</h1>
          <select className='form-select form-select-lg mb-3'onChange={handleChange}>                
              {covid.map((e,i)=>{
                  return   <option key={i} value={i}>{e.state}</option>
              })
              }
          </select>
          <div className="card" width='100px'>
              <div className="card-body">
                  {(covid[s]) ? <h5 className="card-title">{covid[s].state}</h5> : 'undefined'}
                  {(covid[s]) ? <h6 className="card-subtitle mb-2 text-muted">Positive: {covid[s].positive}</h6> : 'undefined'}
                  {(covid[s]) ? <h6 className="card-subtitle mb-2 text-muted">Total Results: {covid[s].totalTestResults}</h6> : 'undefined'}
                  {(covid[s]) ? <h6 className="card-subtitle mb-2 text-muted">Currently Hospitalized: {covid[s].hospitalizedCurrently}</h6> : 'undefined'}
                  {(covid[s]) ? <h6 className="card-subtitle mb-2 text-muted">Date: {covid[s].date}</h6> : 'undefined'}
                  {(covid[s]) ? <h6 className="card-subtitle mb-2 text-muted">Deaths: {covid[s].death}</h6> : 'undefined'}
              </div>
          </div>
          
      </div>
    </Provider>
  );
}

export default App;
