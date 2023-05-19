import React from 'react'

export default function WebsiteBtn({
    websiteName,
    websiteUrl,
}) {

    const [isHover, setIsHover] = React.useState(false)
    console.log(websiteUrl);
    
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='bg-white rounded-lg shadow-lg h-20 w-20 flex items-center justify-center'>
                {/* icon or the website first word of title */}
                <img className='rounded-lg h-10 w-10' src={`https://www.google.com/s2/favicons?domain=${websiteUrl}`} alt='website icon'/>
                
                {/* <div className='text-2xl'>1</div>
                <div className='text-gray-500 text-sm'>1</div> */}
            </div>
            <div className='text-white text-sm mt-2'>{websiteName}</div>
        </div>
    )
}