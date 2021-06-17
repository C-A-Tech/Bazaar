import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Products from '../Products'
import './Stalls.css'
import RequestStall from '../RequestStall/RequestStall';
import ListProducts from '../ListProducts/ListProducts';
import SectionTitle from '../SectionTitle';


// const useStalls = (props) => {
//   const [stalls, setStalls] = useState([]);
//   // console.log(props.user)

//   const fetchStalls = async () => {
//     // console.log('here')
//     await axios
//       .get(`https://bazaar-server.herokuapp.com/api/stalls/user/${props.user}`)
//       // .get(`http://localhost:5000/api/stalls/user/${props.user}`)
//       .then((res) => {
//         console.log(res.data)
//         setStalls(res.data)
//       })
//   };

//   // fetchStalls()
//   // console.log(stalls)
//   useEffect(() => fetchStalls(), [])
//   console.log(stalls)
//   return [stalls]
// }

const useStalls = (props) => {
	const [stalls, setStalls] = useState([]);
  

	const fetchStalls = async () => {
    // console.log(props.user)
		await axios
			.get(`https://bazaar-server.herokuapp.com/api/stalls/user/${props.user}`)
			.then((res) => {
        // console.log(res.data)
        setStalls(res.data)
      });
	};

  fetchStalls()
  console.log(stalls)
	// useEffect(() => fetchStalls(), []);
	return [stalls];
};

  


const StallsByUser = (props) => {
  const [stalls] = useStalls(props);
  // console.log(stalls)
  
  return (
    <div className="allMyStalls">
      { (stalls.msg === 'No stalls')
        ? (<h1 id="noStall"> You Currently Do not Own A Stall <RequestStall /> </h1> )
        :

        <div >
          <header className="mySection"> 
            <h1 className="myStallName" style={{ color: "black" }}> { <SectionTitle section={stalls[0].section} /> } </h1>
          </header>

          <header className="myStall" style={{ backgroundImage: `url(${ stalls[0].image})` }}> 
            <h1 className="myStallName" style={{ color: "white" }}> { stalls[0].name } </h1>
          </header>

          <div className="myProducts"> 
          <Products stall={ stalls[0]._id } /> 
          </div> 

          <div className="list-products"> 
              <ListProducts section={stalls[0].section} stall={stalls[0]._id} /> 
          </div>

        </div> 
       
      
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
