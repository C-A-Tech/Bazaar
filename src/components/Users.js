import React, { useState, useEffect } from 'react'
import axios from 'axios'



const useUsers = () => {
  const [users, setUsers] = useState([])
  const fetchUsers = async () => {
    await axios
      .get('https://bazaar-server.herokuapp.com/api/users')
      .then((res) => setUsers(res.data))
  };
  useEffect(() => fetchUsers(), [])
  return [users]

}


function Users() {
  const [users] = useUsers();
  console.log(loggedInUser._id)
  return (
    <div>
       { users.filter((user) => user._id === loggedInUser._id).map((filteredUser) => 
      (
        <div className="eachUser">{filteredUser.first_name} {filteredUser.last_name} </div>
      )
      )}
        
        
    </div>
  )
}
export default Users
