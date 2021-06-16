import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';

const cookies = new Cookies

let signedInUser = cookies.get('user')


function AddToBasket(props) {
  const [basket, setBasket] = useState([])
  
  let user = signedInUser._id

 const submit = () => {    
    
    setBasket({ ...basket, price: props.product.price })
    setBasket({ ...basket, productId: props.product._id })
    setBasket({ ...basket, user: user })
    setBasket({ ...basket, quantity: 1 })
    setBasket({ ...basket, name: props.product.name })
    
    console.log(basket)
  
  
    const submitBasket = async (props) => {
      
      const config = {     
        headers: { 'content-type': 'application/json' }
      }

      const jsonBasket = JSON.stringify(basket)

      console.log(jsonBasket)
    
      await axios
        .post('https://bazaar-server.herokuapp.com/api/basket/add', jsonBasket, config)
        .then((res) => res.data);
    };
}

  return (
    <div>
      <button className="addToBasket" onClick={ (() => submit(props)) } > Add to Basket </button>

    </div>
  )
}

export default AddToBasket
