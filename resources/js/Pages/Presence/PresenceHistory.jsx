import React from 'react'
import { Head } from "@inertiajs/react"
import PresenceNavbar from './components/PresenceNavbar'

export default function PresenceHistory({title}) {
    return (
        <>
            <Head title={title} />
            <section className='flex gap-2'>
                <PresenceNavbar />
                <main>
                    <h1>Riwayat Presensi</h1>
                </main>
            </section>
        </>
    )
}
