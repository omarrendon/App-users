import React from 'react'


const ListUsers = (props) => {
  return(
    <ul>
    {
      props.items.map((item) => <li >{item}</li>)
    }
  </ul>
  )
}
export default ListUsers;