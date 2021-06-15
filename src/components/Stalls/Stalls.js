import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Products from '../Products'
import './Stalls.css'


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
  


const Stalls = (props) => {
  const [stalls] = useStalls();
  console.log(props)
  
  return (
    <div>
      {stalls.filter( stall => stall.section === props.currentSection).map(selectedStall => {
        return (
          <div id="eachStall"> 
            <header> { selectedStall.name } </header>
            <div id="eachStall-products">
							<Products stall={selectedStall._id} />
            </div> 
          </div>
        )
      })}
    </div>
  )
}

export default Stalls
