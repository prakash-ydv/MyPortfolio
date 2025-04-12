import React from 'react'

function Heading(props) {
  return (
    <div className="flex flex-col items-center justify-center">
        <h5 className="text-sm text-zinc-400 font-semibold">{props.subheading}</h5>
        <h1 className="text-3xl text-blue-600 font-semibold pt-4 mb-10">
          {props.heading}
        </h1>
      </div>
  )
}

export default Heading
