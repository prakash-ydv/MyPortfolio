import React from 'react'

function Box(props) {
  return (
    <div className='flex flex-col gap-4 items-center justify-center h-42 w-38 sm:h-42 bg-zinc-800 rounded-lg p-5 cursor-pointer hover:bg-black hover:border transition-colors duration-300'>
        <span className='text-blue-600 text-2xl'>{props.logo}</span>
      <h1>{props.title}</h1>
      <p>{props.details}</p>
    </div>
  )
}

export default Box
