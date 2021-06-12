import './UserProfilePage.css'
import Users from '../../Users'
import RequestStall from '../../RequestStall/RequestStall'

function UserProfilePage() {
  let id;
  let first_name;
  let last_name
  let email;
  let dob;

  

  return (
    <div className="profile-container">

      
      <div className="profile-image">
        <image src=""></image>
      </div>

      <div className="user-info">
        <h2>{}</h2>
      </div>

      <div className="user-stalls">

      </div>

      <Users />

      <RequestStall />

    </div>
  )
}

export default UserProfilePage