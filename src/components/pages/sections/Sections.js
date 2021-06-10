import React, {useState} from 'react';
import './sections.css';

function Sections() {
  // const [sections, setSections] = useState();
  const notSections = ["Sections 1", "Section 2", "Section 3"]
  

	// const allSections = async () => {
	// 	const res = await fetch('https://bazaar-server.herokuapp.com/api/sections', {
  //     method: 'GET',
  //   });

  //   const json = await res.json();

  //   setSections(json.data);

	// };

  
  // allSections()
  // console.log(sections)
  return (
    <div>
      {notSections.map(section => {
        return(
          <div className="eachSection">{section}</div>
        )}
      )}
    </div>
  )
}

export default Sections