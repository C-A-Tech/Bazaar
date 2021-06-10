import React, { useEffect, useState } from 'react';
import './sections.css';
import axios from 'axios';

const useSections = () => {
	const [sections, setSections] = useState([]);

	const fetchSections = async () => {
		const res = await fetch(
			'https://bazaar-server.herokuapp.com/api/sections',
			{
				method: 'GET'
			}
		);
		const data = await res.json();

		setSections(data);
	};

	useEffect(() => fetchSections(), []);

	return [sections];
};

const Sections = () => {
	const [sections] = useSections();

	return (
		<div>
			{sections.map((section) => {
				return <div className='eachSection'>{section.title}</div>;
			})}
		</div>
	);
}

export default Sections;
