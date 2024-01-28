'use client'

import React from 'react'

import LoginComponent from './LoginComponent'
import SignupComponent from './SignupComponent'
import { useGlobalContext } from '@/context'
import { VscClose } from 'react-icons/vsc'

export default function AuthComponent() {

	const { authClick, setAuthClick, loginBtn, setLoginBtn } = useGlobalContext()

	return (
		<div
			className={`${authClick ? "scale-100 opacity-100 z-[200000]" : "scale-0 opacity-0"
				} overflow-auto fixed top-0 left-0 flex flex-row-reverse items-center justify-center bg-black bg-opacity-30 w-screen h-screen`}
		>
		
			<div className={`${authClick ? "scale-100 opacity-100" : "scale-0 opacity-0"
				} relative w-[97%] max-w-[420px] sm:max-w-[500px] p-4 rounded bg-purple-50 text-slate-800 transition-custom duration-[400ms] flex flex-col gap-5 items-center justify-center`}>

				<header className='h-10 sm2:h-12 w-[95%] border-b rounded-bl-md'>

					<button onClick={() => setLoginBtn(true)} className={`${loginBtn ? 'auth-btn-active' : ''} auth-btn rounded-l-md`}>Login</button>

					<button onClick={() => setLoginBtn(false)} className={`${!loginBtn ? 'auth-btn-active' : ''} auth-btn rounded-r-md`}>Signup</button>

				</header>

				<aside className='w-full sm2:w-[95%] h-fit'>
					<div className='flex items-center h-fit overflow-hidden'>

						<div className={`${loginBtn ? 'translate-x-0' : '-translate-x-full'} login-container transition-custom`}><LoginComponent /></div>

						<div className={`${loginBtn ? 'translate-x-0' : '-translate-x-full'} login-container transition-custom`}><SignupComponent /></div>

					</div>
				</aside>

				<VscClose
					onClick={() => setAuthClick(false)}
					className="cursor-pointer p-1 sm2:text-2xl text-3xl font-bold border hover:border-red-600 hover:text-red-600 rounded-full absolute right-2 top-3 transition-custom"
				/>
			</div>
		</div>
	)
}