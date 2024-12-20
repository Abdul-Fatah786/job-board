import React from 'react'
import { FaHeart } from "react-icons/fa";


const JobRow = () => {
    return (
        <div className="bg-white p-4 rounded-md shadow-sm relative">
            <div className='absolute cursor-pointer top-4 right-4 '>
                <FaHeart className='text-gray-500 size-4' />
            </div>
            <div className="flex grow gap-4">
                <div className='content-center'>
                    <img
                        className="size-12"
                        src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"
                        alt="Spotify"
                    />
                </div>
                <div className='grow sm:flex'>
                    <div className='grow'>
                        <div className='text-gray-500 text-sm'>Spotify</div>
                        <div className='font-bold text-lg mb-1'>Product Designer</div>
                        <div className='text-gray-400 text-sm'>
                            Remote &middot; New York, US &middot; Full-time
                        </div>
                    </div>
                    <div className='content-end text-gray-500 text-sm'>
                        2 weeks ago
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobRow