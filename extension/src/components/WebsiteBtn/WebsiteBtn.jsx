import React, { useState, useEffect, useRef } from 'react';
import { BsPencilSquare } from 'react-icons/bs';

export default function WebsiteBtn({
    websiteName,
    websiteUrl,
}) {
    const [contextMenuPos, setContextMenuPos] = useState({ x: 0, y: 0 });
    const [showContextMenu, setShowContextMenu] = useState(false);
    const contextMenuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (contextMenuRef.current && !contextMenuRef.current.contains(event.target)) {
                setShowContextMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleContextMenu = (event) => {
        event.preventDefault(); // Prevent the default right-click menu
        const { clientX, clientY } = event;
        setContextMenuPos({ x: clientX, y: clientY });
        setShowContextMenu(true);
    };

    const handleOptionClick = (option) => {
        // Handle the clicked option
        console.log(option + ' clicked!');
        setShowContextMenu(false);
    };

    const { x, y } = contextMenuPos;
    const contextMenuStyle = {
        position: 'fixed',
        top: `${y}px`,
        left: `${x}px`,
        display: showContextMenu ? 'block' : 'none',
        backgroundColor: '#f5f5f5',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        listStyleType: 'none',
        margin: '0',
        padding: '0',
        zIndex: '100',
    };

    const optionStyle = {
        padding: '8px 16px',
        cursor: 'pointer',
    };

    const editOptions = ['Edit', 'Delete', 'Copy URL'];

    return (
        <div onContextMenu={handleContextMenu} className='flex flex-col items-center justify-center'>
            <div className='bg-white/30 backdrop-opacity-50 backdrop-blur-3xl rounded-lg shadow-lg h-20 w-20 flex items-center justify-center'>
                {/* icon or the website first word of title */}
                <img
                    className='rounded-lg h-10 w-10'
                    src={`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${websiteUrl}/&size=256`}
                    alt='website icon'
                />
                {/* <div className='absolute top-2 right-2'>
                    <button className='text-white text-xs bg-gray-600 px-2 py-1 rounded'>
                        <BsPencilSquare />
                    </button>
                </div> */}
            </div>
            <div className='text-white text-sm mt-2'>{websiteName}</div>
            <ul style={contextMenuStyle} ref={contextMenuRef}>
                {editOptions.map((option, index) => (
                    <li
                        key={index}
                        style={optionStyle}
                        onClick={() => handleOptionClick(option)}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#e0e0e0'}
                        onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
}
