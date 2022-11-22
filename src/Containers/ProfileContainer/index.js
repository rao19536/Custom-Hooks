import React from 'react'
import ProfileComponent from '../../Components/ProfileComponent'
import useCallApi from '../../CustomHooks/CallApi/useCallApi'

const ProfileContainer = () => {

  const handleClick = (data) => {
    console.log('data=>', data)
    // useCallApi('http://localhost:5000/registeruser/', 'post', data)
  }
  return (
    <ProfileComponent handleSubmitData={handleClick}/>
  )
}
export default ProfileContainer
