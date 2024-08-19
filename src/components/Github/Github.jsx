import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

export const githubInfoLoader = async ()=>{
  const response = await (fetch('https://api.github.com/users/hiteshchoudhary') )
  return response.json()

}


function Github() {
  
  const data = useLoaderData() 
  // const [data, setData] = useState( [] )

  // useEffect( ()=>{
  //   fetch('https://api.github.com/users/Github-the5th')
  //   .then( (response) => {
  //     return response.json()}
  //    )
  //   .then(  data =>  {
  //     console.log(data)}
  //    )
  //   setData(data)
  // },  [ ]   )

  return (
    <div className='text-center m-3 bg-gray-600  text-white text-6xl p-6'>
        Github Followers -  {data.followers}
        <img src= {data.avatar_url}  width="178" />
        </div>
  )
}

export default Github