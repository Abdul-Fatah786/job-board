import React from 'react'

const Hero = () => {
    return (
        <>
            <section className='container my-16'>
                <h1 className="text-4xl font-bold text-center "> Find Your Next <br />Dream Job</h1>
                {/* <p className="text-center text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laboriosam tempore veniam eius sint nihil veritatis quidem, libero totam neque nam dolor asperiores eveniet omnis iste deleniti! Consequuntur, perspiciatis quibusdam?</p> */}
                <form className='flex gap-2 mt-4 max-w-md mx-auto'>
                    <input
                        type="search"
                        className='border border-gray-400 w-full py-2 px-3 rounded-md '
                        placeholder='Search Phrase...'
                    />
                    <button className='bg-blue-600 text-white py-2 px-4 rounded-md'>Search</button>
                </form>
            </section>
        </>
    )
}

export default Hero