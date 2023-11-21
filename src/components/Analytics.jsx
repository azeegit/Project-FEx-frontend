import React from 'react'
import Log from '../assets/log.png'

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className="w-[500px] mx-auto my-4" src={Log} alt="/"/>
                <div>
                    <p>Analytics</p>
                    <h1> just here</h1>
                    <p>Lorem ipsum dolor sit amet 
                        consectetur adipisicing 
                        elit. Nam, quas et sit officiis nobis 
                        vel ad eos cum delectus nemo ipsum fugit
                         id dolores repellat? Aliquam qui recusandae 
                         similique pariatur.</p>

                    <button className='bg-[#4edf00] text-white px-4 py-2 rounded-full'>Get Started</button>
                </div>
            </div>
            
        </div>
    )
}

export default Analytics
