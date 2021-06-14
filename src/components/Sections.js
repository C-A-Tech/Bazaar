import React, { useEffect, useState, Component } from 'react';

import styled from 'styled-components';

import axios from 'axios';


const useSections = () => {
	const [sections, setSections] = useState([]);

	const fetchSections = async () => {
		await axios
			.get('https://bazaar-server.herokuapp.com/api/sections')
			.then((res) => setSections(res.data));
	};

	useEffect(() => fetchSections(), []);
	return [sections];
};



const Sections = () => {
  const [sections] = useSections();

  return(
    <div id='Sections'>
      {sections.map((section) => {
        const Content = styled.div`
        border: none;
        background-image: url(${section.image});
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    `;
        return <Content className='eachSection'><h1 style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>{section.title}</h1></Content>;
      })}
    </div>
  )
  
}

export default Sections