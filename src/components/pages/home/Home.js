import React, { useEffect, useState } from 'react';
import './Home.css';
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

const Home = () => {
	const [sections] = useSections();

	return (
		<div className='homeBody'>
      <div className='homeContainer'>
        <div id='Sections'>
        {sections.map((section) => {
          return <div className='eachSection'>{section.title}</div>;
        })}
        </div>
      </div>
		</div>
	);
};

export default Home;