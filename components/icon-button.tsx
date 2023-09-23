import React from 'react'
import { Button } from './ui/button'

type Props = {
  icon: React.ReactNode
  onClick?: () => void
}

const IconButton = (props: Props) => {
  return (
    <Button
      className='h-16 w-16 cursor-pointer rounded-md bg-slate-50 duration-200 ease-in-out hover:border hover:border-gray-200 hover:bg-slate-100 hover:transition-all'
    >
      {props.icon}
    </Button>
  )
}

export default IconButton