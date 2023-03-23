import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import myImg from '../images/1.png'
import Hackerrank from '../images/H.png'


const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  const divstyle = {
    background: "#260037"
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={`fixed w-full transition-colors px-4 duration-500 ease-in-out  ${isScrolled ? 'bg-purple-900 text-white' : 'bg-transparent text-black'}`} style={{ zIndex: "10000" }}>
      <nav className="mx-auto flex max-w-7xl items-center  justify-between p-1 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          {/* <a href="/" className="-m-1.5 p-1.5"> */}
          <Link to="/">
            {/* <span className="sr-only">Your Company</span> */}
            <img className="w-auto rounded-full animate-pulse" style={{ height: "80px", boxShadow: "2px 2px 2px white", padding: "15px 35px" }} src={myImg} alt="" />
            {/* <h2 style={{padding: "15px", color:"white"}}>Digamber Jha</h2> */}
          </Link>
          {/* </a> */}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">

          <a class="ml-3 text-gray-500" href='https://github.com/kumardigamberjha'><i className='fa fa-github' style={{ color: "white", fontSize: "20px" }} ></i> </a>

          <a class="ml-3 text-gray-500" href='https://www.linkedin.com/in/digamber-jha-5045221a5'>
            <svg fill="currentColor" style={{ color: "white", fontSize: "20px", marginLeft: "12px" }} stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
          <a class="ml-3 text-gray-500" href='https://www.instagram.com/digamberjha1011/'>
            <svg fill="none" style={{ color: "white", fontSize: "20px", marginLeft: "12px" }} stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a class="ml-4 text-gray-500" target="_blank" href='https://www.hackerrank.com/kumardigamberjha'>
            <img src={Hackerrank} style={{ width: "30px", height: "28px", color: "white", marginTop: "-3px" }} alt="Hacker Rank" />
            {/* <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "white", fontSize: "20px" }} viewBox="0 0 512 512"><path d="M477.5 128C463 103.05 285.13 0 256.16 0S49.25 102.79 34.84 128s-14.49 230.8 0 256 192.38 128 221.32 128S463 409.08 477.49 384s14.51-231 .01-256zM316.13 414.22c-4 0-40.91-35.77-38-38.69.87-.87 6.26-1.48 17.55-1.83 0-26.23.59-68.59.94-86.32 0-2-.44-3.43-.44-5.85h-79.93c0 7.1-.46 36.2 1.37 72.88.23 4.54-1.58 6-5.74 5.94-10.13 0-20.27-.11-30.41-.08-4.1 0-5.87-1.53-5.74-6.11.92-33.44 3-84-.15-212.67v-3.17c-9.67-.35-16.38-1-17.26-1.84-2.92-2.92 34.54-38.69 38.49-38.69s41.17 35.78 38.27 38.69c-.87.87-7.9 1.49-16.77 1.84v3.16c-2.42 25.75-2 79.59-2.63 105.39h80.26c0-4.55.39-34.74-1.2-83.64-.1-3.39.95-5.17 4.21-5.2 11.07-.08 22.15-.13 33.23-.06 3.46 0 4.57 1.72 4.5 5.38C333 354.64 336 341.29 336 373.69c8.87.35 16.82 1 17.69 1.84 2.88 2.91-33.62 38.69-37.58 38.69z" /></svg> */}
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* <img className="w-auto rounded-full" style={{ height: "80px" }} src="https://drive.google.com/uc?export=view&id=1Ho2t6tuc6hPaMSc1lviu9lpZAQJw6Tn0" alt="" /> */}
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" style={{color: "white"}} />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">

              <div className="py-6">
                {/* <a
                        href="#"
                        className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    > 
                    </a> */}
                {/* <Link to="/SignUp/" className="text-sm font-semibold leading-6 text-gray-900">Log in</Link>
                <i class="fa-brands fa-linkedin"></i> */}

                <a class="ml-3 text-gray-500" href='https://github.com/kumardigamberjha'><i className='fa fa-github' style={{ color: "black", fontSize: "20px" }} ></i> </a>
                <br />

                <a class="ml-3 text-gray-500" href='https://www.linkedin.com/in/digamber-jha-5045221a5'>
                  <svg fill="currentColor" style={{ color: "black", fontSize: "20px", marginLeft: "12px" }} stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500" href='https://www.instagram.com/digamberjha1011/'>
                  <svg fill="none" style={{ color: "black", fontSize: "20px", marginLeft: "12px" }} stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a class="ml-4 text-gray-500" target="_blank" href='https://www.hackerrank.com/kumardigamberjha'>
                  <img src={Hackerrank} style={{ width: "30px", height: "28px", color: "white", marginTop: "-3px" }} alt="Hacker Rank" />
                  {/* <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "white", fontSize: "20px" }} viewBox="0 0 512 512"><path d="M477.5 128C463 103.05 285.13 0 256.16 0S49.25 102.79 34.84 128s-14.49 230.8 0 256 192.38 128 221.32 128S463 409.08 477.49 384s14.51-231 .01-256zM316.13 414.22c-4 0-40.91-35.77-38-38.69.87-.87 6.26-1.48 17.55-1.83 0-26.23.59-68.59.94-86.32 0-2-.44-3.43-.44-5.85h-79.93c0 7.1-.46 36.2 1.37 72.88.23 4.54-1.58 6-5.74 5.94-10.13 0-20.27-.11-30.41-.08-4.1 0-5.87-1.53-5.74-6.11.92-33.44 3-84-.15-212.67v-3.17c-9.67-.35-16.38-1-17.26-1.84-2.92-2.92 34.54-38.69 38.49-38.69s41.17 35.78 38.27 38.69c-.87.87-7.9 1.49-16.77 1.84v3.16c-2.42 25.75-2 79.59-2.63 105.39h80.26c0-4.55.39-34.74-1.2-83.64-.1-3.39.95-5.17 4.21-5.2 11.07-.08 22.15-.13 33.23-.06 3.46 0 4.57 1.72 4.5 5.38C333 354.64 336 341.29 336 373.69c8.87.35 16.82 1 17.69 1.84 2.88 2.91-33.62 38.69-37.58 38.69z" /></svg> */}
                </a>
              </div>

            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
