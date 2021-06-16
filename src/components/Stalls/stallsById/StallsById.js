import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Products from '../../Products';
import './StallsById.css';
import background from "./src/background.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

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
          <div id="stallById">
            <div id="stallContainer"> 
              <header className="eachStallName" > 
                <h1> { stall.name } </h1>
                <div className="ratings">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                  <p>{Math.floor(Math.random()* 10)+ 2} reviews</p>
                </div>
              </header>
              <h3>All products</h3>
              <div id="eachStall-products">
                <Products stall={stall._id} />
              </div> 

            </div>
          </div>
        )
      })}
    </div>
  )
}

export default StallsById
