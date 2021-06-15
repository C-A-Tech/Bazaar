import { useParams } from 'react-router-dom';
import StallsById from '../../components/Stalls/StallsById';
import StallsBySection from '../../components/Stalls/StallsBySection';


function ViewStalls() {
  const { id } = useParams()
  console.log(id)
  return (
    <div>
      <StallsById stallId={ id } />
    </div>
  )
}

export default ViewStalls
