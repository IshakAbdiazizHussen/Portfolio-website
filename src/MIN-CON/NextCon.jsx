import React from 'react'

export default function NextCon() {
  return (
    <div >
        <div className='className="text-3xl md:text-4xl font-bold text-center mb-16 
                        bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
                            
                        Work Experience
            </div>

        <div className='text-center flex justify-around '>

            <div className='bg-gradient-to-r from-white to-sky-300 bg-clip-text text-transparent text-sm md:text-base 
                                font-medium opacity-90 text-center '>
            <h4 className='text-5xl'>1 +</h4>
            <p className='text-2xl'>Writing Code</p>
            </div>

            <div className='bg-gradient-to-r from-white to-sky-300 bg-clip-text text-transparent text-sm md:text-base 
                                font-medium opacity-90 text-center'>
                <h4 className='text-5xl'>20+</h4>
                <p className='text-2xl'>Projects Completed</p>
            </div>

            <div className='bg-gradient-to-r from-white to-sky-300 bg-clip-text text-transparent text-sm md:text-base 
                                font-medium opacity-90 text-center'>
                <h4 className='text-5xl'>15 +</h4>
                <p className='text-2xl'>Happy TeamWork</p>
            </div>

            <div className='bg-gradient-to-r from-white to-sky-300 bg-clip-text text-transparent text-sm md:text-base 
                                font-medium opacity-90 text-center'>
                <h4 className='text-5xl'>24/7 </h4>
                <p className='text-2xl'>Availability</p>
            </div>
        </div>
        
    </div>
  )
}
