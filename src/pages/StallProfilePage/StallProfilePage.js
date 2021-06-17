import React, {useState, useEffect} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import RequestStall from '../../components/RequestStall/RequestStall';
import './StallProfilePage.css';
import ListProducts from '../../components/ListProducts/ListProducts';
import StallsBySection from '../../components/Stalls/StallsBySection';
import StallsByUser from '../../components/Stalls/stallsByUser/StallsByUser';

const cookies = new Cookies();

let signedInUser = cookies.get('user')


const StallProfilePage = (props) => {

  return (
    <div>
      <StallsByUser user={ signedInUser._id } />
    </div>
  )
}

export default StallProfilePage
