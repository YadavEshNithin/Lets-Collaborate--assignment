import React from 'react'
import Image from 'next/image'

const Childcard3 = () => {
    return (

   
        <div className="md:w-[65%] w-fit md:m-auto md:flex md:flex-row flex-col md:space-x-40 mt-5 space-y-5">
            <div className="md:w-[35%] w-fit space-y-6">
                <p className="font-semibold md:text-lg text-xl flex flex-row items-center"><button>Devops</button>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="md:w-6 md:h-6 w-10 h-10 md:ml-5 ml-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>


                </p>
                <div className="text-6xl space-y-3">
                    <p>Embrace</p>
                    <p>Cloud</p>
                </div>
                <p className="text-3xl font-medium">
                    With Cloud-First accelerate innovation and optimize performance
                </p>
            </div>
            <div className="h-[350px] w-[450px] relative">
                <Image src="/p3.jpg" alt="" fill />
            </div>
        </div>
    )
}

export default Childcard3
