import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Products from '../Products'
import './Stalls.css'
import { Link } from 'react-router-dom';
import RequestStall from '../RequestStall/RequestStall';
import ListProducts from '../ListProducts/ListProducts';
import SectionTitle from '../SectionTitle';


const useStalls = (props) => {
  const [stalls, setStalls] = useState([]);

  const fetchStalls = async () => {
    await axios
      .get(`https://bazaar-server.herokuapp.com/api/stalls/user/${props.user}`)
      .then((res) => setStalls(res.data))
  };
  useEffect(() => fetchStalls(), [])
  return [stalls]
}
  


const StallsByUser = (props) => {
  const [stalls] = useStalls(props);
  
  return (
    <div className="allMyStalls">
      { (stalls.name === "undefined")
        ? (<h1 id="noStall"> You Currently Do not Own A Stall <RequestStall /> </h1> )
        : ( stalls.map( (stall) => (

        <div >
          <header className="mySection"> 
            <h1 className="myStallName" style={{ color: "black" }}> { <SectionTitle section={stall.section} /> } </h1>
          </header>

          <header className="myStall" style={{ backgroundImage: `url(${stall.image})` }}> 
            <h1 className="myStallName" style={{ color: "white" }}> { stall.name } </h1>
          </header>

          <div className="myProducts"> 
          <Products stall={ stall._id } /> 
          </div> 

          <div className="list-products"> 
              <ListProducts section={stall.section} stall={stall._id} /> 
          </div>

        </div> 
      ))) 
      
      }
        {/* // return( 
          <div>
            

            

            
            
            

          </div> 
          
          ))
        // ) */}
      
    {/* </div> */}
    
  </div>
  )
}

export default StallsByUser
