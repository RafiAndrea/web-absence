import React from 'react'
import { Head } from "@inertiajs/react"
import PresenceNavbar from './components/PresenceNavbar'
export default function Presence({ title }) {
    return (
        <>
            <Head title={title} />
            <section className='flex flex-col font-poppins'>
                <header className='flex justify-between items-center px-10 py-3 border-b-2'>
                    <div>
                        <h1>Nama Pengguna</h1>
                    </div>
                    <div>
                        <button>Logout</button>
                    </div>
                </header>
                <section className='flex gap-2 justify-between'>
                    <div className='border-r-2 min-h-screen flex flex-col gap-5 items-center px-10 py-5'>
                        <div>
                            <img src="" alt="" className='w-[200px] h-[250px] border-2'/>
                        </div>
                        <PresenceNavbar />
                    </div>
                    <main className='w-full pt-5 px-10 flex flex-col gap-5'>
                        <div className='border-2 w-full flex justify-center py-5'>
                            <h1 className='text-2xl'>Presensi</h1>
                        </div>
                        <div className='border-2 w-full flex justify-center py-10 px-10'>
                            <form action="" className='w-full flex flex-col gap-2 justify-center items-center border-2 py-10 px-20'>
                                <div className='flex flex-col w-full'>
                                    <label htmlFor="">Nomor Induk Karyawan</label>
                                    <input type="text" className='w-full'/>
                                </div>
                                <div className='flex flex-col w-full'>
                                    <label htmlFor="">Password</label>
                                    <input type="password" className='w-full'/>
                                </div>
                                <div className='w-full flex justify-end mt-20'>
                                    <button className='px-10 py-2 bg-blue-500 text-white'>Presensi</button>
                                </div>
                            </form>
                        </div>
                    </main>
                    <div className='border-l-2 min-h-screen flex flex-col gap-5 items-center px-10 py-5'>
                        <input type="date" className='mt-20'/>
                    </div>
                </section>
            </section>
        </>
    )
}
