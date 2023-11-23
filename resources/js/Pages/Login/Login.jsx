import React from 'react'
import { Head } from '@inertiajs/react';
import Header from "@/assets/image/hero.png"
import Logo from "@/assets/image/logo1.png"
export default function Login({ title }) {
  return (
    <>
      <Head title={title} />
      <section className='max-h-[100vh] overflow-hidden min-h-[100vh] relative'>
        <div className='relative w-full flex justify-center items-center'>
          <header>
            <img src={Header} alt="Hero Image" />
          </header>
          <form action="" className='absolute right-[25%] bottom-[10vh] bg-slate-200 border-2 p-10 flex flex-col gap-20 rounded-2xl'>
            <div className='flex flex-col gap-5'>
              <div className='flex justify-center mb-5'>
                <img src={Logo} alt="Logo" className='w-[150px]' />
              </div>
              <div>
                <input type="email" id='email' name='email' placeholder='Email' className='w-[300px] focus:ring-0 focus:border-black rounded border-2 border-blue-500 placeholder:font-semibold font-po' />
              </div>
              <div>
                <input type="password" id='password' name='password' placeholder='Password' className='w-[300px] focus:ring-0 focus:border-blue-500 rounded border-2 border-blue-500 placeholder:font-semibold font-po' />
              </div>
            </div>
            <div className='flex justify-end'>
              <button type="submit" className='px-12 py-2 bg-blue-500 rounded-xl text-white text-xl'>Login</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
