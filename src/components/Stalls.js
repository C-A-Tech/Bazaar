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
  
  return (
    <div>
      {stalls.map((stall) => {
        return (
          <div id="eachStall"> 
            <header> { stall.name } </header>
            {/* {Products.map((product) => {
              if(product.stall_id === stall.id){
              return <div>Hello</div>
              }
            })
            } */}
          </div>
        )
      })}
    </div>
  )
}

export default Stalls
