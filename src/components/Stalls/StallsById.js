import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Products from '../Products'
import './Stalls.css'
import { Link } from 'react-router-dom';


const useStalls = (props) => {
  const [stalls, setStalls] = useState([]);
  console.log(props.stallId)
  
  const fetchStalls = async () => {
    await axios
      .get(`https://bazaar-server.herokuapp.com/api/stalls/stall/${props.stallId}`)
      .then((res) => setStalls(res.data))
  };
  useEffect(() => fetchStalls(), [])
  console.log(stalls)
  return [stalls]
}
  


const StallsById = (props) => {
  const [stalls] = useStalls(props);

  console.log(stalls)
  
  return (
    <div>
      {stalls.map( (stall) => {
        return (
          
          <div id="eachStall"> 
            <header className="eachStallName"> { stall.name } </header>

            <div id="eachStall-products">
							<Products stall={stall._id} />
            </div> 

          </div>
         
        )
      })}
    </div>
  )
}

export default StallsById
