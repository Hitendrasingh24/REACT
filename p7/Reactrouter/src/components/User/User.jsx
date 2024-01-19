import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-500 text-white p-4 text-3xl text-justify'>User:{userid}</div>
  )
}
