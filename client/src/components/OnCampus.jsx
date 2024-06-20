import React from 'react'
import axios from 'axios'

const OnCampus = () => {
  function handle(){
    axios.get('http://localhost:3000/').then((response)=>{
      console.log(response.data);
    }).catch(error => {
      console.error(error);
    });
  }
  return (<>
  <button onClick={handle} >OnCampus</button>
  </>
    
  )
}

export default OnCampus