import React from 'react'

const Stats = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl text-center" style={{marginTop: "-55px", marginBottom: "55px"}}>Have Worked on</h2>
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap -m-4 text-center">
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">4+</h2>
                            <p class="leading-relaxed">ERP</p>
                        </div>
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">5+</h2>
                            <p class="leading-relaxed">Websites</p>
                        </div>
                        <div class="p-4 sm:w-1/4 w-full">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">3</h2>
                            <p class="leading-relaxed">Live</p>
                        </div>
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">4</h2>
                            <p class="leading-relaxed">Development</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Stats