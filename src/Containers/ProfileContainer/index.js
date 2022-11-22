import React from 'react'
import ProfileComponent from '../../Components/ProfileComponent'
import useCallApi from '../../CustomHooks/CallApi/useCallApi'

const ProfileContainer = () => {
 const {postRequest, isLoading, data, error}= useCallApi('http://localhost:5000/registeruser/', 'post')
  const handleClick = (data) => {
    postRequest(data)
  }

  return (
    <ProfileComponent handleSubmitData={handleClick}/>
  )
}
export default ProfileContainer
