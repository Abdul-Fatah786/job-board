import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header>
            <div className=" container flex items-center justify-between mx-auto my-4">
                <Link href={"/"} className="font-bold text-xl">Job Board</Link>
                <nav className="flex gap-4 *:py-2 *:px-4 *:rounded-lg">
                    <Link href={"/login"} className="bg-gray-200">Login</Link>
                    <Link href={"new-job"} className="bg-blue-400 text-white">Post A Job </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header