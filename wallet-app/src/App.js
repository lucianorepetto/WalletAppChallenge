import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './Components/Navbar'
import List from './Components/List';
import './App.css';

function App() {
  //Form 
  const [data, setData] = useState({
    date: "",
    description: "",
    amount: 0,
    concept: "",
    type: 0
  })

  // List
  const [listUpdated, setListUpdated] = useState(false)

  const [all_data, setAllData] = useState([])
  useEffect(() => {
    const getData = ()=>{
      fetch('http://localhost:9000/api/activity')
      .then(activities => activities.json())
      .then(activities => {
        return fetch('http://localhost:9000/api/concepts')
        .then(concepts => concepts.json())
        .then(concepts => {
          activities.map(a => {
            for (let c of concepts){
              if(c.id === parseInt(a.concept)){
                a.concept = c.description
              }
            }
            return a
          })
          return activities
        })
      })
      .then(activities => setAllData(activities))
    }
    getData()
    setListUpdated(false)
  }, [listUpdated])
  
  
  return (
    <Fragment>
      <Navbar brand='Wallet App'/>
      <div className='container' style={{marginTop: '20px'}}>
        <div className='list'>
          <List all_data={all_data} data={data} setData={setData} setListUpdated={setListUpdated}/>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
