import React from 'react'
import User from '../../assests/avatar.svg'
import Input from '../../components/input'

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
                <div className='w-[75%] bg-gray-100 h-[60px] mt-6 rounded-full flex items-center px-8'>
                    <div className='cursor-pointer'>
                        <img src={User} height={50}b width={50} />
                    </div>
                    <div className='ml-2 mr-auto'>
                        <h3 className='text-lg'>Shivani</h3>
                        <p className='text-sm font-light text-green-600'>Online</p>
                    </div>
                    <div className='cursor-pointer flex space-x-5'>
                       <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-call" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
                           <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                           <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                           <path d="M15 7a2 2 0 0 1 2 2" />
                           <path d="M15 3a6 6 0 0 1 6 6" />
</                     svg>
                       <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-zoom" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <path d="M17.011 9.385v5.128l3.989 3.487v-12z" />
                          <path d="M3.887 6h10.08c1.468 0 3.033 1.203 3.033 2.803v8.196a.991 .991 0 0 1 -.975 1h-10.373c-1.667 0 -2.652 -1.5 -2.652 -3l.01 -8a.882 .882 0 0 1 .208 -.71a.841 .841 0 0 1 .67 -.287z" />
                        </svg>
                    </div>
                    
                </div>
                <div className='h-[75%] border w-full overflow-scroll shadow-lg'>
                    <div className='h-[1000px] px-8 py-6'>
                        <div className='h-[80px] w-[300px]  bg-gray-200 rounded-b-xl rounder-tr-xl'></div>
                        <div className='h-[80px] w-[300px]  bg-blue-200 rounded-b-xl rounder-tl-xl ml-auto'></div>
                    </div>

                </div>
                <div className='h-[75%] w-full overflow-scroll shadow-md'>
                    <div className='p-14'>
                        <div className=' max-w-[40%] bg-gray-200 rounded-b-xl rounder-tr-xl p-4 mb-6'>Hi Aryan , How are you ?</div>
                        <div className=' max-w-[40%]  bg-blue-200 rounded-b-xl rounder-tl-xl ml-auto p-4 mb-6'>Hello ji</div>
                        <div className=' max-w-[40%] bg-gray-200 rounded-b-xl rounder-tr-xl p-4 mb-6'>Hi Aryan , How are you ?</div>
                        <div className=' max-w-[40%]  bg-blue-200 rounded-b-xl rounder-tl-xl ml-auto p-4 mb-6'>Hello ji</div>
                        <div className=' max-w-[40%] bg-gray-200 rounded-b-xl rounder-tr-xl p-4 mb-6'>Hi Aryan , How are you ?</div>
                        <div className=' max-w-[40%]  bg-blue-200 rounded-b-xl rounder-tl-xl ml-auto p-4 mb-6'>Hello ji</div>
                        <div className=' max-w-[40%] bg-gray-200 rounded-b-xl rounder-tr-xl p-4 mb-6'>Hi Aryan , How are you ?</div>
                        <div className=' max-w-[40%]  bg-blue-200 rounded-b-xl rounder-tl-xl ml-auto p-4 mb-6'>Hello ji</div>
                    </div>
                </div>
                <div className='p-14 w-full flex item-center'>
                  <Input placeholder='Type a message......' className='w-[85%]' inputClassName='p-4 border-0 shadow-lg rounded-full bg-light focus:ring-0 focus:border-0 outline-none'/>
                  <div className='ml-4 p-2 cursor-pointer shadow-lg bg-light rounded-full '>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                     <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                     <path d="M10 14l11 -11" />
                    </svg>
                  </div>
                  <div className='ml-4 p-2 cursor-pointer shadow-lg bg-light rounded-full '>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M9 12h6" />
                        <path d="M12 9v6" />
                    </svg>
                  </div>
                </div>
            </div>
            
            <div className="w-[25%] h-screen "></div>
        </div>
    )
}

export default Dashboard