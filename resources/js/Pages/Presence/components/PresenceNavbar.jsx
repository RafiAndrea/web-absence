import React from 'react'
import NavLink from '@/Components/NavLink'
export default function PresenceNavbar() {
  return (
    <>
        <nav>
            <ul className='flex flex-col gap-5 items-center'>
                <li>
                    <NavLink href="/presence">Presensi</NavLink>
                </li>
                <li>
                    <NavLink href="/presence/information">Informasi Pengguna</NavLink>
                </li>
                <li>
                    <NavLink href="/presence/history">Riwayat Presensi</NavLink>
                </li>
                <li>
                    <NavLink href="/presence/help">Pusat Bantuan</NavLink>
                </li>
            </ul>
        </nav>
    </>
  )
}
