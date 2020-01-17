import React from 'react'
import CardUser from './CardUser'

function ListUsers (props){
  return(
    <div>
      {
        props.items.map((person) => {
          return(
            <CardUser
              {...person}
            />
          )
        })
      }
    </div>
  )
}
export default ListUsers;