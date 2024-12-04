import { getSignInUrl, signOut, withAuth } from '@workos-inc/authkit-nextjs';
import Link from 'next/link'
import React from 'react'

const Header = async () => {
    const { user } = await withAuth();
    const signInUrl = await getSignInUrl();
    return (
        <header>
            <div className=" container flex items-center justify-between mx-auto my-4">
                <Link href={"/"} className="font-bold text-xl">Job Board</Link>
                <nav className="flex gap-2">
                    {!user && (
                        <Link href={signInUrl} className="bg-gray-200 py-2 px-4 rounded-md">Login</Link>
                    )}
                    {user && (
                        <form action={async () => {
                            'use server';
                            await signOut();
                        }}>
                            <button type="submit" className="rounded-md bg-gray-200 py-1 px-2 sm:py-2 sm:px-4">
                                Logout
                            </button>
                        </form>
                    )}
                    <Link href={"/new-listing"} className="py-2 px-4 rounded-md bg-blue-600 text-white">Post A Job </Link>
                </nav>
            </div>
        </header >
    )
}

export default Header