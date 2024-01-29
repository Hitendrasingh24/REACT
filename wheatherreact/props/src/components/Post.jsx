import React from 'react'

export default function Post(props) {
  return (
    <div className='abc'>
        <h1>
            {props.title}
        </h1>
        <p>
            {props.body}
        </p>
    </div>
  )
}
