import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Products from '../ViewProduct/Products'
import './Stalls.css'
import { Link } from 'react-router-dom';
import ViewStalls from '../../pages/view-clicked-stall/ViewStalls';


const useStalls = () => {
  const [stalls, setStalls] = useState([]);
  
  const fetchStalls = async () => {
    await axios
      .get('https://bazaar-server.herokuapp.com/api/stalls')
      .then((res) => setStalls(res.data))
  };
  useEffect(() => fetchStalls(), [])
  return [stalls]
}
  


const StallsBySection = (props) => {
  const [stalls] = useStalls();

  console.log(props)
  
  return (
    <div>
      {stalls.filter( stall => stall.section === props.currentSection).map(selectedStall => {
        return (
          
          <div id="eachStall"> 
          <Link to={`/stalls/${selectedStall._id}`}  >
             <header> { selectedStall.name } </header>
          </Link>

            <div id="eachStall-products">
							<Products stall={selectedStall._id} />
            </div> 
          </div>
         
        )
      })}
    </div>
  )
}

export default StallsBySection
