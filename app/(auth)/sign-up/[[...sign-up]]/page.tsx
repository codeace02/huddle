import { SignUp } from '@clerk/nextjs'
import React from 'react'

export default function SignInPage() {
    return (
        <main className='h-screen flex justify-center items-center '>
            <SignUp />
        </main>
    )
}
