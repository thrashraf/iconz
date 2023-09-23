import React from 'react'
import SearchInput from './seach-input'
import { Icons } from './icons'
import IconButton from './icon-button'

type Props = {}

const Main = (props: Props) => {
  return (
    <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none">
      {/* Start main area*/}
      <div className="inset-0 px-4 py-6 sm:px-6 lg:px-8">
        <SearchInput />
        <div className="mt-10 h-full rounded-lg" />
        <div>
          <p className='font-extralight text-gray-400'>Arrows</p>
          <div className='grid grid-cols-9 gap-4 py-5'>
            <IconButton icon={<Icons.search color='black' />} />
            <IconButton icon={<Icons.search color='black' />} />
            <IconButton icon={<Icons.search color='black' />} />
            <IconButton icon={<Icons.search color='black' />} />
            <IconButton icon={<Icons.search color='black' />} />
            <IconButton icon={<Icons.search color='black' />} />
            <IconButton icon={<Icons.search color='black' />} />
            <IconButton icon={<Icons.search color='black' />} />
            <IconButton icon={<Icons.search color='black' />} />
            <IconButton icon={<Icons.search color='black' />} />
            <IconButton icon={<Icons.search color='black' />} />
            <IconButton icon={<Icons.search color='black' />} />
            <IconButton icon={<Icons.search color='black' />} />
            <IconButton icon={<Icons.search color='black' />} />
            <IconButton icon={<Icons.search color='black' />} />
            <IconButton icon={<Icons.search color='black' />} />
          </div>
        </div>
      </div>
      {/* End main area */}
    </main>
  )
}

export default Main