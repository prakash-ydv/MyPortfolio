import React from 'react'

function ContactBox(props) {
  return (
    <div className='flex flex-col items-center justify-center text-white bg-zinc-800/50 rounded-2xl p-5 cursor-pointer hover:bg-black border border-transparent hover:border-white transition-colors duration-300 truncate'>
      <span className='mb-4'>{props.logo}</span>
      <h1 className='text-lg'>{props.platform}</h1>
      <h5 className='text-sm'>{props.username}</h5>
      <a target='_black' className='text-sm mt-5 text-blue-500' href={props.url}>{props.say}</a>
    </div>
  )
}

export default ContactBox
