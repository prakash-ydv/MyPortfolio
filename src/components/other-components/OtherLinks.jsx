import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

function OtherLinks(props) {
  return (
    <a target='_blank' href={props.link} className="flex gap-3 lg:gap-5 hover:text-yellow-300">
            🔥
          <h1 className="flex items-center gap-2">
            {props.text}<FaExternalLinkAlt />
          </h1>
        </a>
    
  )
}

export default OtherLinks
