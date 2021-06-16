import { useState, useEffect } from 'react';
import axios from 'axios'
import Cookies from 'universal-cookie';

const cookies = new Cookies()
let signedInUser = cookies.get('user')
console.log(signedInUser)

const useBasketRead = () => {
  const [basket, setBasket] = useState([])

  const fetchBasket = async () => {
    let user = signedInUser._id
    const formData = new FormData()

    formData.set('user', `${user}`)

    for( var pair of formData.entries() ){
      console.log(pair[0]+ ', '+ pair[1])
    }

    const config = {     
      headers: { 'content-type': 'multipart/form-data' }
    }

    await axios
      .post('https://bazaar-server.herokuapp.com/api/basket', formData, config)
      .then((res) => setBasket(res.data));
  };

  useEffect(() => fetchBasket(), []);
  return [basket]
}




function Basket() {
  const [basket] = useBasketRead();
  return (
    <div>
      { (basket !== "null")
        ? (<h1> Your Basket is Empty </h1>)
        : ( basket.map( x => <> {x} </> ) )
      }
    </div>
  )
}

export default Basket
