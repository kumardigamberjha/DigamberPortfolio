import React from 'react'
import github from '../images/github.png'
import python from '../images/python.png'
import web from '../images/web.png'
import react from '../images/react.png'
import bootstrap from '../images/bootstrap.png'
import htmlcss from '../images/htmlcss.png'
import mysql from '../images/mysql.png'
import {motion} from 'framer-motion';


const Education = () => {
    return (
        // <div>Education</div>
        <div class="bg-white">
            <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl transition-shadow">Areas of Technical Strength</h2>
                    <p class="mt-4 text-gray-500">In this section, I have highlighted my core areas of technical strength and expertise. These are the skills and proficiencies that I have developed and refined over the course of my career as a developer. From programming languages to development tools, these are the areas where I excel and can deliver exceptional results. By showcasing my technical strengths, I hope to demonstrate my value as a developer and to provide a clear picture of what I can offer to potential clients or employers.</p>

                    <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">Python</dt>
                            <dd class="mt-2 text-sm text-gray-500">Have a good understanding of Python and its libraries, such as Django, NumPy, Pandas, and others.</dd>
                        </div>

                        <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">JavaScript</dt>
                            <dd class="mt-2 text-sm text-gray-500">Having a good knowledge of client-side scripting using JavaScript, as well as an understanding of Ajax and jQuery.</dd>
                        </div>

                        <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">MySQL</dt>
                            <dd class="mt-2 text-sm text-gray-500">I have a solid understanding of MySQL and XAMPP, including how to design, build, and manage databases. </dd>
                        </div>

                        <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">Git & Github</dt>
                            <dd class="mt-2 text-sm text-gray-500">I am well-versed in Git and GitHub, with a strong understanding of version control, branching, merging, and collaboration workflows. </dd>
                        </div>

                        <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">Bootstrap</dt>
                            <dd class="mt-2 text-sm text-gray-500">I have a deep understanding of both Bootstrap and Tailwind CSS, including their respective frameworks, components, and styling techniques.</dd>
                        </div>

                        <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">React</dt>
                            <dd class="mt-2 text-sm text-gray-500">I have a comprehensive understanding of React, including its core concepts, state management, and component-based architecture.</dd>
                        </div>
                        <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">Web Development</dt>
                            <dd class="mt-2 text-sm text-gray-500">I'm pleased to say that I possess a strong understanding of Full Stack Web Development. With my expertise in both front-end and back-end technologies, I am confident in my ability to create comprehensive and dynamic web applications.</dd>
                        </div>
                    </dl>
                </div>
                <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <motion.img drag whileDrag={{scale:1.2}} src={github} alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100" />
                    <motion.img  drag whileDrag={{scale:1.2}} src={python} alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100" />
                    <motion.img  drag whileDrag={{scale:1.2}} src={web} alt="Side of walnut card tray with card groove and recessed card area." class="rounded-lg bg-gray-100" />
                    <motion.img  drag whileDrag={{scale:1.2}} src={react} alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100" />
                    <motion.img  drag whileDrag={{scale:1.2}} src={htmlcss} alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100" />
                    <motion.img  drag whileDrag={{scale:1.2}} src={bootstrap} alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100" />
                    <motion.img  drag whileDrag={{scale:1.2}} src={mysql} alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100" />
                </div>
            </div>
        </div>
    )
}

export default Education