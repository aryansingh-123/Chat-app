import React from 'react'
import User from '../../assests/avatar.svg'

function Dashboard  () {
    const contacts =[
        {
            name:'Aryan',
            status:'Active',
            img: User
        },
        {
            name:'Shivani',
            status:'Active',
            img: User
        },
        {
            name:'Jassica',
            status:'Active',
            img: User
        },
        {
            name:'Raghav',
            status:'Active',
            img: User
        },
        {
            name:'Rahul',
            status:'Active',
            img: User
        },
        {
            name:'Ravi',
            status:'Active',
            img: User
        }
    ]
    return(
        <div className='w-screen flex'> 
            <div className =" w-[25%] h-screen bg-sky-50">
                <div className='flex  item center my-3 mx-14'>
                    <div className='border border-green-700 rounded-3xl stroke-2xl'><img src={User} width={50} height={50}/></div>
                    <div className='ml-2'>
                        <h3 className='text-xl font-semibold'>User Login</h3>
                        <h3 className='text-sm font-light '>My Account</h3>
                    </div>
                </div>
                <hr/>
                <div className='mx-14 mt-4'>
                <div className='text-blue-500 text-lg'>
                    Messages
                </div>
                <div>
                    {
                      contacts.map(({name , status, img}) =>{
                        return(
                            <div className='flex item center py-3 border-b border-b-gray-300'>
                                <div className='flex cursor-pointer item-center'>
                             <div ><img src={img} width={40} height={40}/></div>
                            <div className='ml-2'>
                            <h3 className='text-sm font-medium'>{name}</h3>
                            <h3 className='text-xs font-light text-green-600 '>{status}</h3>
                               </div>
                               </div>
                            </div>
                        )
                      })  
                    }
                </div>
                </div>
            </div>
            <div className="w-[50%] h-screen bg-white flex flex-col items-center">
                <div className='w-[75%] bg-gray-100 h-[80px] mt-12 rounded-full flex items-center px-10'>
                    <div>
                        <img src={User} height={50}b width={50} />
                    </div>
                    <div className='ml-4'>
                        <h3 className='text-lg'>Shivani</h3>
                        <p className='text-sm font-light text-green-600'>Online</p>
                    </div>
                    
                </div>

            </div>
            <div className="w-[25%] h-screen "></div>
        </div>
    )
}

export default Dashboard