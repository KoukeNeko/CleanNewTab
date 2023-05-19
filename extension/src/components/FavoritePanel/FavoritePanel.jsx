import React from 'react'

import WebsiteBtn from '../WebsiteBtn/WebsiteBtn'

export default function FavoritePanel() {
  return (
    <div>
      <div className='pt-16 text-white text-left mx-16 text-3xl'>Favorites</div>
      {/* create n * 9 grids for favorites websites buttons */}
      <div className='grid grid-cols-9 gap-4 mx-16 mt-8'>
        <WebsiteBtn />
      </div>
    </div>

  )
}
