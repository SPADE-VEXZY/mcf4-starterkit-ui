import React from 'react'
import RegisterForm from './RegisterForm'

const RegisterSection = () => {
  return (
    <section className="min-h-svh p-6">
    <div className="flex flex-col gap-6 items-center">
        <img src="/laravel-logo.png" className='w-10' alt="" />
        <RegisterForm/>
    </div>
    </section>
  )
}

export default RegisterSection