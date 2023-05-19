import React from 'react'

export default function FavoritePanel() {
  return (
    <div>
      <div className='pt-16 text-white text-left mx-16 text-3xl'>Favorites</div>
      {/* create n * 9 grids for favorites websites buttons */}
      <div className='grid grid-cols-9 gap-4 mx-16 mt-8'>
        <div className='bg-white rounded-lg shadow-lg h-24 w-24 flex items-center justify-center'>
          <div className='text-2xl'>1</div>
          <div className='text-gray-500 text-sm'>1</div>
        </div>
        <div className='bg-white rounded-lg shadow-lg h-24 w-24 flex items-center justify-center'>
          <div className='text-2xl'>1</div>
          <div className='text-gray-500 text-sm'>1</div>
        </div>
        <div className='bg-white rounded-lg shadow-lg h-24 w-24 flex items-center justify-center'>
          <div className='text-2xl'>1</div>
          <div className='text-gray-500 text-sm'>1</div>
        </div>
        <div className='bg-white rounded-lg shadow-lg h-24 w-24 flex items-center justify-center'>
          <div className='text-2xl'>1</div>
          <div className='text-gray-500 text-sm'>1</div>
        </div>
        <div className='bg-white rounded-lg shadow-lg h-24 w-24 flex items-center justify-center'>
          <div className='text-2xl'>1</div>
          <div className='text-gray-500 text-sm'>1</div>
        </div>
        <div className='bg-white rounded-lg shadow-lg h-24 w-24 flex items-center justify-center'>
          <div className='text-2xl'>1</div>
          <div className='text-gray-500 text-sm'>1</div>
        </div>
        <div className='bg-white rounded-lg shadow-lg h-24 w-24 flex items-center justify-center'>
          <div className='text-2xl'>1</div>
          <div className='text-gray-500 text-sm'>1</div>
        </div>
        <div className='bg-white rounded-lg shadow-lg h-24 w-24 flex items-center justify-center'>
          <div className='text-2xl'>1</div>
          <div className='text-gray-500 text-sm'>1</div>
        </div>
        <div className='bg-white rounded-lg shadow-lg h-24 w-24 flex items-center justify-center'>
          <div className='text-2xl'>1</div>
          <div className='text-gray-500 text-sm'>1</div>
        </div>
        <div className='bg-white rounded-lg shadow-lg h-24 w-24 flex items-center justify-center'>
          <div className='text-2xl'>1</div>
          <div className='text-gray-500 text-sm'>1</div>
        </div>
      </div>
    </div>

  )
}
