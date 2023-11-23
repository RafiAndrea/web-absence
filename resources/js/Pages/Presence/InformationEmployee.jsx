import React from 'react'
import { Head } from "@inertiajs/react"
import PresenceNavbar from './components/PresenceNavbar'

export default function InformationEmployee({title}) {
    return (
        <>
            <Head title={title} />
            <section className='flex gap-2'>
                <PresenceNavbar />
                <main>
                    <h1>Informasi Pengguna</h1>
                </main>
            </section>
        </>
    )
}
