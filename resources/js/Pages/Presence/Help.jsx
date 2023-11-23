import React from 'react'
import { Head } from "@inertiajs/react"
import PresenceNavbar from './components/PresenceNavbar'

export default function Help({title}) {
    return (
        <>
            <Head title={title} />
            <section className='flex gap-2'>
                <PresenceNavbar />
                <main>
                    <h1>Pusat Bantuan</h1>
                </main>
            </section>
        </>
    )
}
