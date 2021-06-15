import React, { useEffect, useState, Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Stalls from './Stalls/StallsBySection'
import axios from 'axios';

const useSections = () => {
	const [sections, setSections] = useState([]);

	const fetchSections = async () => {
		await axios
			.get(`https://bazaar-server.herokuapp.com/api/sections`)
			.then((res) => setSections(res.data));
	};

	useEffect(() => fetchSections(), []);
	return [sections];
};


const SectionTitle = (props) => {
  const [sections] = useSections()
  return(
    <div>

      <div id='Sections'>
        {sections.filter((section) => section._id === props.section).map((filteredSection) => {
          return (
              <div className='eachSection'> 
                <div ><h1 style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>{filteredSection.title}</h1></div> 
              </div>
            );
        })}
      </div>

    </div>
  )
  
}

export default SectionTitle
