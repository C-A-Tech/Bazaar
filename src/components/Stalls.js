import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Products from './Products'


const useStalls = () => {
  const [stalls, setStalls] = useState([]);
  
  const fetchStalls = async () => {
    await axios
      .get('https://bazaar-server.herokuapp.com/api/stalls')
      .then((res) => setStalls(res.data))
  };
  useEffect(() => fetchStalls(), [])
  console.log(stalls)
  return [stalls]
}
  


function Stalls() {
  const [stalls] = useStalls();
 
  console.log(stalls)
  return (
    <div>
      {stalls.map((stall) => {
        
        return (
          <div id="eachStall"> 
            <header> { stall.name } </header>
            <div id="eachStall-products">
            <Products stall={stall._id} />
            </div> 
          </div>
        )
      })}
    </div>
  )
}

export default Stalls
