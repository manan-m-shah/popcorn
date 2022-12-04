'use client'
import '../styles/globals.css'
import AppProvider from "../context/AppProvider"
import { ToastContainer } from 'react-toastify';


import {
    LivepeerConfig,
    createReactClient,
    ThemeConfig,
    studioProvider,
} from '@livepeer/react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Stake from '../components/Modals/Stake';
import AddMovie from '../components/Modals/AddMovie';

const client = createReactClient({
    provider: studioProvider({ apiKey: '85ea69d5-0c3e-42b0-a271-20ccdcd9a76a' }),
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AppProvider>
            <LivepeerConfig client={client}>
                <html>
                    <ToastContainer />
                    <Stake />
                    <AddMovie />
                    <head>
                        <title>Popcorn</title>
                    </head>
                    <body className='h-[100vh]'>
                        <div className='bg-zinc-900 border-b-[1px] border-zinc-600'>
                            <Navbar />
                        </div>
                        <div className='grid grid-cols-4 text-white max-h-screen h-full'>
                            <div className='col-span-1 bg-zinc-900'>
                                <Sidebar />
                            </div>
                            <div className='col-span-3 bg-zinc-800'>
                                {children}
                            </div>
                            {/* <Livepeer/> */}
                        </div>
                    </body>
                </html>
            </LivepeerConfig>
        </AppProvider>
    )
}
