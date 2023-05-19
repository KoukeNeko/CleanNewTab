import React from 'react';

export default function WebsiteBtn({
    websiteName,
    websiteUrl,
}) {
    const [isHover, setIsHover] = React.useState(false);
    console.log(websiteUrl);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    return (
        <div
            className='flex flex-col items-center justify-center relative'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className='bg-white/30 backdrop-opacity-50 backdrop-blur-3xl rounded-lg shadow-lg h-20 w-20 flex items-center justify-center'>
                {isHover && (
                    <div className='absolute -top-1 right-0'>
                        <button className='text-white text-xs bg-gray-600 px-2 py-1 rounded'>
                            Edit
                        </button>
                    </div>
                )}
                {/* icon or the website first word of title */}
                <img
                    className='rounded-lg h-10 w-10'
                    src={`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${websiteUrl}/&size=256`}
                    alt='website icon'
                />
            </div>
            <div className='text-white text-sm mt-2'>{websiteName}</div>
        </div>
    );
}
