import React, { useState } from 'react'
import Input from '../../components/input'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
const Form = (
    {
        isSignInPage = true,

    }
) => {
    const [data, setData] = useState({
        ...(!isSignInPage && {
            fullName: ''
        }),
        email:'',
        password:''

    })
    const navigate = useNavigate()
    return (
        <div className='bg-gray-250 h-screen py-10 flex  item-center justify-center '>
            <div className="bg-gray-200 w-[500px] h-[550px] shadow-lg hover:shadow-gray-900 shadow-gray-500 rounded-lg flex flex-col justify-center item-center">
                <div className="text-4xl text-gray-700 font-extrabold flex justify-center item-center">Welcome {isSignInPage && 'Back'}</div>
                <div className="text-xl font-light flex justify-center item-center">{isSignInPage ? 'Sign in to get explored' :'Sign Up to get started' }</div>
                <form onSubmit={()=> console.log('Submitted')}>
               { !isSignInPage &&<div className="px-5 py-1"> <Input label="Full name" name="name" placeholder="Enter your Full Name" value={data.fullName} onChange={(e) => setData({...data, fullName: e.target.value})}/></div>}
               <div className="px-5 py-1"> <Input label="Email" name="Email" placeholder="Enter your Email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/></div>
               <div className="px-5 py-1"> <Input label="Password" name="Password" placeholder="Enter your Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/></div>
               <Button type='submit' label={isSignInPage ? 'Sign In': 'Sign Up'}/>
               </form>
               <div className="text-sm flex justify-center item-center" onClick={()=> navigate(`/users/${isSignInPage ? 'sign_up' : 'sign_in'}`)}>  { isSignInPage ? "Didn't have an account?" : "Already have an Account?"} <span className="text-blue-700 cursor-pointer underline" >{isSignInPage ? 'Sign Up' :'Sign In'} </span></div>
            </div>
        </div>
    )
}

export default Form