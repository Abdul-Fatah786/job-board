import React from 'react'
// import { } from "react-icons";

const page = () => {
    return (
        <div className='container'>
            <h2 className='text-lg'>Your Companies</h2>
            <p className='text-gray-500 text-sm mb-2'>Select A a comapny to create a job add for </p>
            <div className="border border-blue-200 bg-blue-50 p-4 rounded-md">
                no companies assigned to your user
            </div>

            <h2 className='text-lg mt-4'>Create A Company</h2>
            <p className='text-gray-500 text-sm mb-2'>to create a job listing you first need to register your company</p>
            <form className='flex gap-2'>
                <input
                    className='p-2 border rounded-md border-gray-400    '
                    type="text"
                    placeholder='Company Name'
                />
                <button className='bg-gray-200 py-2 px-4 rounded-md'>
                    Create a company
                </button>
            </form>
        </div>
    )
}

export default page