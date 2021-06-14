import React from 'react';
import './Home.css';
import Stalls from '../../components/Stalls';
import Sections from '../../components/Sections';

const Home = () => {

	return (
		<div className='homeBody'>
      <div className='homeContainer'>
				<div>
					<Sections />
				</div>
				<div className="Stalls">
					<Stalls />
				</div>
      </div>
		</div>
	);
};

export default Home;