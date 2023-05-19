import React from 'react'

import WebsiteBtn from '../WebsiteBtn/WebsiteBtn'

export default function FavoritePanel() {
  return (
    <div>
      <div className='pt-16 text-white text-left mx-16 text-3xl'>Favorites</div>
      {/* create n * 9 grids for favorites websites buttons */}
      <div className='grid grid-cols-12 gap-2 mx-16 mt-8 '>
        <WebsiteBtn websiteName='test' websiteUrl='https://tailwindcss.com/' />
        <WebsiteBtn websiteName='Google' websiteUrl='https://google.com/' />
        <WebsiteBtn websiteName='YouTube' websiteUrl='https://YouTube.com/' />
        <WebsiteBtn websiteName='GitHub' websiteUrl='https://github.com/' />
        <WebsiteBtn websiteName='test' websiteUrl='https://tailwindcss.com/' />
        <WebsiteBtn websiteName='Google' websiteUrl='https://google.com/' />
        <WebsiteBtn websiteName='YouTube' websiteUrl='https://YouTube.com/' />
        
        <WebsiteBtn websiteName='GitHub' websiteUrl='https://github.com/' />
        <WebsiteBtn websiteName='test' websiteUrl='https://tailwindcss.com/' />
        <WebsiteBtn websiteName='Google' websiteUrl='https://google.com/' />
        <WebsiteBtn websiteName='YouTube' websiteUrl='https://YouTube.com/' />
        <WebsiteBtn websiteName='GitHub' websiteUrl='https://github.com/' />
        <WebsiteBtn websiteName='test' websiteUrl='https://tailwindcss.com/' />
        <WebsiteBtn websiteName='Google' websiteUrl='https://google.com/' />
        <WebsiteBtn websiteName='YouTube' websiteUrl='https://YouTube.com/' />
        <WebsiteBtn websiteName='GitHub' websiteUrl='https://github.com/' />
        <WebsiteBtn websiteName='GitHub' websiteUrl='https://github.com/' />
        <WebsiteBtn websiteName='test' websiteUrl='https://tailwindcss.com/' />
        <WebsiteBtn websiteName='Google' websiteUrl='https://google.com/' />
        <WebsiteBtn websiteName='YouTube' websiteUrl='https://YouTube.com/' />
        <WebsiteBtn websiteName='GitHub' websiteUrl='https://github.com/' />
        <WebsiteBtn websiteName='test' websiteUrl='https://tailwindcss.com/' />
        <WebsiteBtn websiteName='Google' websiteUrl='https://google.com/' />
        <WebsiteBtn websiteName='YouTube' websiteUrl='https://YouTube.com/' />
      </div>
    </div>

  )
}
