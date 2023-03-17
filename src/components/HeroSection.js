// import myImg from '../images/Template.png'
import myImg from '../images/pngegg.png'

import React from 'react'
// import myVid from '../video/title.mp4'
import Navbar from './Navbar'
// import myVideo from '../video/title2.mp4'

// import * as THREE from 'three';
// import Section from './Section';
import Education from './Education';
import Footer from './Footer';
import Projects from './Projects';
import Stats from './Stats';
import GitHub from './GitHub';
import {motion} from 'framer-motion';


const HeroSection = () => {
    const [move, setMove] = React.useState(false)
    return (
        <div>

            <Navbar />
            {/* <Section /> */}
            <section className="text-gray-800 body-font" style={{background: "#260037"}}>
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">Hey! I am
                            <br className="hidden lg:inline-block" />Digamber Jha
                        </h1>
                        <p className="mb-8 text-gray-200 leading-relaxed">Welcome to my portfolio website! I am a Django developer with 8 months of experience. During this time, I have gained a strong understanding of the Django framework and its various components. I am skilled in building web applications using Django and integrating them with other technologies to create a seamless user experience.</p>
                        <div className="flex justify-center">
                            {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Hire Me</button>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">My Projects</button> */}
                        </div>
                    </div>
                    <div className="lg:max-w-lg" >
                        <motion.img className="object-cover object-center rounded" animate={{x : move? 50 : -50}} transition={{type:"tween", duration: 1}} onClick={() =>{
                        setMove(!move)
                    }} style={{width:"100vw", height: "90vh"}} alt="hero" src={myImg} />
                        {/* <video autoPlay loop muted style={{width: "100vw", height: "100vh"}}>
                            <source src="{myVideo}" type="video/mp4" ></source>
                            Your browser does not support the video tag.
                        </video> */}
                    </div>
                </div>
            </section>
            <Education />
            <Stats />
            <GitHub />
            <Projects />
            <Footer />
        </div>
    )
}

export default HeroSection