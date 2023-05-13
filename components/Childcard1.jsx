import React from 'react'
import Image from 'next/image'


const Childcard1 = () => {
    return (
  

        <div className="md:w-[65%] w-fit md:m-auto md:flex md:flex-row flex-col md:space-x-40 mt-5 space-y-5">
            <div className="md:w-[35%] w-fit space-y-6">
                <p className="font-semibold md:text-lg text-xl flex flex-row items-center"><button>AI + RPA Automation</button>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="md:w-6 md:h-6 w-10 h-10 md:ml-5 ml-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>


                </p>
                <div className="text-6xl space-y-3">
                    <p>Make</p>
                    <p>Bolder</p>
                    <p>Choices</p>
                </div>
                <p className="text-3xl font-medium ">
                Digital focused strategies to realize market-changing ideas
                </p>
            </div>
            <div className="h-[400px] w-[450px] relative">
                <Image src="/p1.png" alt="" style={{ objectFit: "cover", }} fill />
            </div>
        </div>
    )
}

export default Childcard1
