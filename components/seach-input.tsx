import React from 'react'
import { Input } from './ui/input'
import { Icons } from './icons'

type Props = {}

const SearchInput = (props: Props) => {
  return (
    <div className="relative flex w-full items-center justify-end">
      <Input
        placeholder="Search icons..."
        className="w-full pl-10"
        type="text"
        name="search"
        id="search"
      />
      <Icons.search className="absolute left-4" size={16} />
    </div>
  )
}

export default SearchInput