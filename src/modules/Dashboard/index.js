import React from 'react'
import User from '../../assests/avatar.svg'

function Dashboard  () {
    return(
        <div className='w-screen flex'> 
            <div className =" w-[25%] h-screen bg-white">
                <div className='flex justify-center item center my-5'>
                    <img src={User} width={50} height={50}/>
                    <div className='ml-2'>
                        <h3 className='text-lg font-bold'>User Login</h3>
                        <h3 className='text-sm font-light '>My Account</h3>
                    </div>
                </div>
                <hr/>
            </div>
            <div className="w-[50%] h-screen "></div>
            <div className="w-[25%] h-screen "></div>
        </div>
    )
}

export default Dashboard