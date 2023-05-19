import React from 'react'

export default function WebsiteBtn() {

    const [isHover, setIsHover] = React.useState(false)
    return (
        <div className='bg-white rounded-lg shadow-lg h-24 w-24 flex items-center justify-center'>
          <div className='text-2xl'>1</div>
          <div className='text-gray-500 text-sm'>1</div>
        </div>
    )
}
