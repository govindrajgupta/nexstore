"use client";
import { ClerkLoaded, SignedIn, SignInButton, UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react'
import Form from 'next/form';
import { PackageIcon, TrolleyIcon } from '@sanity/icons';

const Header = () => {
    const { user } = useUser();
    const createClerkPasskey = async () => {
        try {
            const response = await user?.createPasskey();
            console.log("Passkey created:", response);
        } catch (err) {
            console.error("Error:", JSON.stringify(err, null, 2));
            
        }
       
    };
  return <header className='flex flex-wrap justify-between items-center px-4 py-2'>
    {/* top row */}
    <div className='flex w-full flex-wrap justify-between items-center'>
        <Link href='/'
        className='text-2xl font-bold text-violet-500 hover:opacity-50 cursor-pointer mx-auto sm:mx-0'
        >NexStore</Link>

        <Form
        action='/search'
        className='w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0 '
        >
            <input type="text"
            name='query'
            placeholder='Search for products'
            className='bg-violet-100 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 border w-full max-w-4xl'
            />

        </Form>
        <div className='flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none'>
            <Link href='/basket'
            className='flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-lg'
            >
                <TrolleyIcon className='w-6 h-6'/>
                {/* span item count once global state is implemented */}
            <span>My Basket</span>
            
            </Link>

            {/* user area */}
            <ClerkLoaded>
                <SignedIn>

                    <Link href='/orders'
                    className='flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-lg '
                    >
                        <PackageIcon className='w-6 h-6'/>
                        <span>My Orders</span>
                        
                    
                    </Link>
                    </SignedIn>


                {user ? (
                    <div className='flex items-center space-x-2'
                    >
                        <UserButton/>
                        <div className='hidden sm:block text-sm'>
                        <p className='text-gray-400'>Welcome Back</p>
                        <p className='font-bold'>{user.fullName}!</p>
                        </div>

                    </div>

                ):(
                    <SignInButton
                    mode='modal'
                    />
                ) }

                {user?.passkeys.length === 0 && (
                    <button
                    onClick={createClerkPasskey}
                    className='bg-white hover:bg-violet-700 hover:text-white animate-pulse text-violet-500 py-2 px-4 rounded-lg border-violet-300 border font-bold'
                    >

                        Create Passkey
                    </button>

                )}

            </ClerkLoaded>
        </div>
    </div>
  </header>
}

export default Header
