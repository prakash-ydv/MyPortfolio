import React from 'react'

function StatBoxHead(props) {
  return (
    <div className="w-full h-24 flex items-center justify-center bg-blue-600 rounded-b-3xl gap-5">
        <img className="h-8" src={props.logo} />
        <h1 className="font-medium text-lg">{props.heading}</h1>
      </div>
  )
}

export default StatBoxHead
