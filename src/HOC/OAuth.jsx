import React from 'react'
import googleIcon from '../assets/images/googleIcon.svg'
const OAuth = () => {

    const onGoogleClick=()=>{

    }
  return (
    <div className='flex justify-space-between w-56 absolute left-72 top-1/2'>
    <h3 className='text-white text-xl'>Sign In Using Google:</h3>
    <button className="w-12" onClick={onGoogleClick}>
        <img className="socialIconImg" src={googleIcon} alt="Google" />
      </button></div>
  )
}

export default OAuth