import React from 'react';
import kaidash from '../images/kaidash.png';
import erpdash from '../images/erpdash.png';
import ruhi from '../images/ruhi.png';
import reena from '../images/reena.png';
import omerp from '../images/om.png';


const Projects = () => {
  return (
    <div>
      <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl text-center " style={{  }}>My Projects - (Websites)</h2>
    

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-wrap -mx-4 -mb-10 text-center">
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <a href="https://kainaatmahajan.com/"><img alt="content" src={kaidash} class="object-cover object-center h-full w-full" /></a>
              </div>
              {/* <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Buy YouTube Videos</h2>
              <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
              <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button> */}
            </div>
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src={ruhi} />
              </div>
              {/* <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">The Catalyzer</h2>
              <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
              <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button> */}
            </div>
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src={reena} />
              </div>
              {/* <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">The Catalyzer</h2>
              <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
              <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button> */}
            </div>
          </div>
        </div>
      </section>


      {/* MY ERPSs */}
      <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl text-center " style={{ marginTop: "35px", marginBottom: "35px" }}>My Projects - (ERP)</h2>
      {/* <div className="container mx-auto flex flex-row">
        <div className="container basis-1/2">

        </div>
        <div className="container basis-1/2">safd</div>
      </div> */}

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-wrap -mx-4 -mb-10 text-center">
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <a href="https://kainaatmahajan.com/"><img alt="content" src={erpdash} class="object-cover object-center h-full w-full" /></a>
              </div>
              {/* <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Buy YouTube Videos</h2>
              <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
              <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button> */}
            </div>
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src={omerp} />
              </div>
              
            </div>
            {/* <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src={reena} />
              </div>
              
            </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects