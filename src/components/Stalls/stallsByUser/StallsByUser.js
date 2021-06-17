import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Products from '../../ViewProduct/Products'
import './StallsByUser.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import RequestStall from '../../RequestStall/RequestStall';
import ListProducts from '../../ListProducts/ListProducts';
import SectionTitle from '../../SectionTitle';
import Cookies from 'universal-cookie';
import addNotification from '../../../notices/notice';

const cookies = new Cookies()
const signedInUser = cookies.get('user') || ''
const user = signedInUser._id || ''


const useStalls = () => {
  const [stalls, setStalls] = useState([]);

  const fetchStalls = async () => {
    await axios
      .get(`https://bazaar-server.herokuapp.com/api/stalls/user/${user}`)
      .then((res) => {
        if (Array.isArray(res.data)){
          setStalls(res.data)
        }
      })
  };
  useEffect(() => fetchStalls(), [])
  return [stalls]
}
  


const StallsByUser = () => {
  const [stalls] = useStalls();
  console.log(stalls)
  
  return (
    <div id="stallByUser">
      <div id="stallContainer"> 
        { (stalls.length === 0) && (<h1 id="noStall"> You Currently Do not Own A Stall <RequestStall /> </h1> )}
        { (stalls.length > 0) && ( 
          <div>
            <header className="eachStallName" > 
              <h1 className="myStallName" style={{ color: "white" }}> { stalls[0].name } </h1>
              <div className="ratings">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                    <p>{Math.floor(Math.random()* 10)+ 2} reviews</p>
                  </div>
            </header>
            <div className="mySection"> 
              { <SectionTitle section={stalls[0].section} /> }
            </div> 
            <div className="list-products"> 
                <ListProducts section={stalls[0].section} stall={stalls[0]._id} /> 
            </div>

            <div id="eachStall-products"> 
            <Products stall={ stalls[0]._id } /> 
            </div> 
          </div>  
        )}





    </div> 
  </div>
  )
}


export default StallsByUser

{/* <header className="mySection"> 
<h1 className="myStallName" style={{ color: "black" }}> { <SectionTitle section={stalls[0].section} /> } </h1>
</header> */}

