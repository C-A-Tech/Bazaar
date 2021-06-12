import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Products from './Products'
import useProducts from '../hooks/products-api'

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
  const [products] = useProducts("60c0d0e01be0426f8bcb3340")
  return (
    <div>
      {stalls.map((stall) => {
        
        return (
          <div id="eachStall"> 
            <header> { stall.name } </header>
            {products.map((product) => {
              if(product.stall === stall.id){
              return <div>{product.name}</div>
              }
            })
            }
          </div>
        )
      })}
    </div>
  )
}

export default Stalls
