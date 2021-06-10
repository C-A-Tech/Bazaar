import React, {useState} from 'react';
import './sections.css';
import axios from 'axios';

function Sections() {
  // const [sections, setSections] = useState();
  const [sections, getSections] = useState('')
  // const notSections = ["Sections 1", "Section 2", "Section 3"]
  

  const allSections = async () => {
    
		const fetchSections = await axios
			.get('https://bazaar-server.herokuapp.com/api/sections')
			.then((res) => {
        getSections(res.data)
      })
    return [sections]  
    }
  return (
    <div>
      {sections.map(section => {
        return(
          <div className="eachSection">{section.title}</div>
        )}
      )}
    </div>
  )
}

export default Sections