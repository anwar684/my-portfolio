import React from 'react'

type Props = {
    head: string,
    colorHead: string,
}

export default function Head(props: Props) {
  return (
    <div className='flex text-white font-inter  text-5xl font-bold justify-center'>
        <div className=" mx-1 ">{props.head}</div>
        <div className='mx-1 text-amber-500'> {props.colorHead} </div>
    </div>
    
  )
}