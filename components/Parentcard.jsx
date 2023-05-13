import React from 'react'
import Image from 'next/image'

const Parentcard = () => {
    return (
        <div>
            <div className="md:w-[65%] w-full m-auto flex flex-col space-x-20 mt-5 space-y-5">


                <div className="md:flex md:flex-row sm:flex-col md:space-x-40">
                    <div className="md:w-[35%] space-y-10">

                        <p className="text-xl font-semibold">Let's Collabrate</p>


                        <p className="text-6xl">AI + RPA is what we do</p>
                        <div className="text-3xl font-medium space-y-3">
                            <p>Future-Proof your business. Drive efficiency, profitability and deliver on customer experience</p>
                        </div>

                    </div>
                    <div className="h-[400px] w-[450px] relative">
                        <Image src="/rp2.jpg" alt="" style={{ objectFit: "cover" }} fill />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Parentcard
