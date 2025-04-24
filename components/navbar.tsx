import React from 'react'
import Link from 'next/link'

const navbar = () => {
  return (
    <div className='flex items-center justify-center gap-15 m-5'>
      <div className='font-bold'>
        <h1 className='text-lg'>Engineer&apos;s Space</h1>
      </div>
      <div className='flex gap-2'>
        <Link href="/calculator" className='hover:text-gray-500 hover:scale-110 text-base'>Calculator</Link>
        <Link href="/instructions" className='hover:text-gray-500 hover:scale-110 text-base'>Instructions</Link>
      </div>
    </div>
  )
}

export default navbar
