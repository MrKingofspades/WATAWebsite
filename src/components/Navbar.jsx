import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const cart = <FontAwesomeIcon icon={faCartShopping} />
const insta = <FontAwesomeIcon icon={faInstagram} />
const ghub = <FontAwesomeIcon icon={faGithub} />
const youtube = <FontAwesomeIcon icon={faYoutube} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />

const Navbar = () => {

  const [openDropDown, setOpenDropDown] = useState(false);

  return (
    <header className='z-50 sticky top-0 bg-nav-bg/60 shadow-xl shadow-neon-orange/20 p-3'>
      
      <section className='mx-auto flex max-w-4xl items-center justify-between p-4'>
        <div className='absolute left-8 top-2'>
          <h1 className='xl:hidden flex text-3xl text-neon-red font-lacquer'>
            WATA
          </h1>
          <h1 className='hidden xl:flex text-3xl text-neon-red font-lacquer'>
            WhoAreTheyActually
          </h1>
        </div>
        <div className='absolute top-3 right-4'>
          <button id="hamburger-button" class="z-50 relative h-8 w-8 cursor-pointer text-3xl hover:opacity-80 focus:outline-none lg:hidden" onClick={() => setOpenDropDown((prev) => !prev)}>
            {!openDropDown ? (
              <div class="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
            ) : (
              <div class="absolute top-4 -mt-0.5 left-4 before:rotate-45 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-0 before:rounded before:bg-white before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-rotate-45 after:-translate-x-4 after:translate-y-0 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
            )}
          </button>
            {openDropDown && (
              <div className='dropdown-menu origin-top animate-open-menu lg:hidden absolute -right-4 top-12 w-[100vw] h-[100vh] bg-nav-bg/60 rounded-lg'>
                <div className='flex flex-auto sm:flex-1 p-8'>
                  <a href='#hero' className='text-white text-xl font-ysabeau font-semibold tracking-wider hover:text-neon-purple text-md w-full text-center px-1.5 xs:px-3 sm:px-4 hover:bg-[#444444] rounded-full'>Home</a>
                </div>
                <div className='flex flex-auto sm:flex-1 p-8'>
                  <a href='#hero' className='text-white text-xl font-ysabeau font-semibold hover:text-neon-purple text-md w-full text-center px-1.5 xs:px-3 sm:px-4 hover:bg-[#444444] rounded-full tracking-wider'>About</a>
                </div>
                <div className='flex flex-auto sm:flex-1 p-8'>
                  <a href='#hero' className='text-white text-xl font-ysabeau font-semibold hover:text-neon-purple text-md w-full text-center px-1.5 xs:px-3 sm:px-4 hover:bg-[#444444] rounded-full tracking-wider'>Projects</a>
                </div>
                <div className='flex flex-auto sm:flex-1 p-8'>
                  <a href='#hero' className='text-white text-xl font-ysabeau font-semibold hover:text-neon-purple text-md w-full text-center px-1.5 xs:px-3 sm:px-4 hover:bg-[#444444] rounded-full tracking-wider'>Shop</a>
                </div>
                <div className='flex flex-auto sm:flex-1 p-8'>
                  <a href='#hero' className='text-white text-xl font-ysabeau font-semibold hover:text-neon-purple text-md w-full text-center px-1.5 xs:px-3 sm:px-4 hover:bg-[#444444] rounded-full tracking-wider'>Contact</a>
                </div>
              <div>
                <ul className='md:hidden flex justify-evenly p-8'>
                  <li className='py-3 px-1'>
                    <a href="https://www.instagram.com/entangledcerebrum/" target='_' className='text-neon-blue text-3xl hover:text-[#a7fdfd]'>{insta}</a>
                  </li>
                  <li className='py-3 px-1'>
                    <a href="https://github.com/MrKingofspades" target='_blank' className='text-neon-blue text-3xl hover:text-[#a7fdfd]'>{ghub}</a>
                  </li>
                  <li className='py-3 px-1'>
                    <a href="https://www.youtube.com/@WhoAreTheyActually" target='_' className='text-neon-blue text-3xl hover:text-[#a7fdfd]'>{youtube}</a>
                  </li>
                  <li className='py-3 px-1'>
                    <a href="http://" target='_blank' className='text-neon-blue text-3xl hover:text-[#a7fdfd]'>{linkedin}</a>
                  </li>
                </ul>
              </div>
              <div className='flex flex-row justify-center'>
                <img className='h-12 w-12' src='Crown.png' />
                <img className='h-12 w-12' src='Chestplate.png' />
                <img className='h-12 w-12' src='Legs.png' />
                <img className='h-12 w-12' src='Boots.png' />
              </div>
            </div>
            )}
        </div>
          <nav className='flex items-center justify-between ml-auto'>
          <div className='absolute invisible md:visible left-[35%] sm:left-[40%] lg:left-[8rem] xl:left-[22rem]'>
              <ul className='flex justify-between space-x-1'>
                <li className='py-3 px-1'>
                  <a href="https://www.instagram.com/entangledcerebrum/" target='_' className='text-neon-blue text-3xl hover:text-[#a7fdfd]'>{insta}</a>
                </li>
                <li className='py-3 px-1'>
                  <a href="https://github.com/MrKingofspades" target='_blank' className='text-neon-blue text-3xl hover:text-[#a7fdfd]'>{ghub}</a>
                </li>
                <li className='py-3 px-1'>
                  <a href="https://www.youtube.com/@WhoAreTheyActually" target='_' className='text-neon-blue text-3xl hover:text-[#a7fdfd]'>{youtube}</a>
                </li>
                <li className='py-3 px-1'>
                  <a href="http://" target='_blank' className='text-neon-blue text-3xl hover:text-[#a7fdfd]'>{linkedin}</a>
                </li>
              </ul>
            </div>
            <div className='absolute right-16 lg:right-2'>
              <div className='flex flex-row lg:flex-1 justify-center items-center'>
                <div className='hidden lg:flex'>
                  <div className='flex flex-auto sm:flex-1 px-4 border-r'>
                    <a href='#hero' className='text-white font-ysabeau font-semibold tracking-wider hover:text-neon-purple text-md w-full text-center px-1.5 xs:px-3 sm:px-4 hover:bg-[#444444] rounded-full'>Home</a>
                  </div>
                  <div className='flex flex-auto sm:flex-1 px-4 border-r'>
                    <a href='#hero' className='text-white font-ysabeau font-semibold hover:text-neon-purple text-md w-full text-center px-1.5 xs:px-3 sm:px-4 hover:bg-[#444444] rounded-full tracking-wider'>About</a>
                  </div>
                  <div className='flex flex-auto sm:flex-1 px-4 border-r'>
                    <a href='#hero' className='text-white font-ysabeau font-semibold hover:text-neon-purple text-md w-full text-center px-1.5 xs:px-3 sm:px-4 hover:bg-[#444444] rounded-full tracking-wider'>Projects</a>
                  </div>
                  <div className='flex flex-auto sm:flex-1 px-4 border-r'>
                    <a href='#hero' className='text-white font-ysabeau font-semibold hover:text-neon-purple text-md w-full text-center px-1.5 xs:px-3 sm:px-4 hover:bg-[#444444] rounded-full tracking-wider'>Shop</a>
                  </div>
                  <div className='flex flex-auto sm:flex-1 px-4'>
                    <a href='#hero' className='text-white font-ysabeau font-semibold hover:text-neon-purple text-md w-full text-center px-1.5 xs:px-3 sm:px-4 hover:bg-[#444444] rounded-full tracking-wider'>Contact</a>
                  </div>
                </div>
                <button className='flex w-9 h-9 bg-nav-bg hover:bg-neon-yellow hover:shadow-md hover:shadow-neon-green rounded-full justify-center items-center'>
                  <div className='relative py-2'>
                    <div className='text-neon-purple text-xl font-bold'>
                      {cart}
                    </div>
                    <div className='top-6 absolute left-4'>
                      <p className="flex h-1 w-1 items-center justify-center rounded-full bg-neon-orange p-2 text-xs text-black font-bold">0</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </nav>
      </section>
    </header>
    // <header className='z-50 sticky top-0 bg-nav-bg/60 shadow-xl shadow-neon-orange/20 w-[100%]'>
    //   <section className='mx-auto flex max-w-4xl items-center justify-between p-8'>
    //     <div className='absolute left-8 top-3'>
    //       <h1 className='xl:hidden flex text-3xl text-neon-red font-lacquer'>WATA</h1>
    //       <h1 className='hidden xl:flex text-3xl text-neon-red font-lacquer'>WhoAreTheyActually</h1>
    //     </div>
    //     <div>
    //       <div className='absolute top-3 right-4'>
    //         <button id="hamburger-button" class="z-50 relative h-8 w-8 cursor-pointer text-3xl hover:opacity-80 focus:outline-none lg:hidden">
    //           <div class="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
    //         </button>
    //       </div>
          // <div className='absolute right-2 top-4'>
          //   <button className='flex invisible mx-4 lg:visible w-9 h-9 bg-nav-bg hover:bg-neon-yellow hover:shadow-md hover:shadow-neon-green rounded-full justify-center items-center'>
          //     <div className='relative py-2'>
          //       <div className='text-neon-purple text-xl font-bold'>
          //         {cart}
          //       </div>
          //       <div className='top-6 absolute left-4'>
          //         <p className="flex h-1 w-1 items-center justify-center rounded-full bg-neon-orange p-2 text-xs text-black font-bold">0</p>
          //       </div>
          //     </div>
          //   </button>
          // </div>
          // <nav className='flex items-center justify-between ml-[32rem]'>
            // <div className='absolute invisible md:visible left-[35%] sm:left-[40%] lg:left-[8rem] xl:left-[22rem]'>
            //   <ul className='flex justify-between space-x-1'>
            //     <li className='py-3 px-1'>
            //       <a href="https://www.instagram.com/entangledcerebrum/" target='_' className='text-neon-blue text-3xl hover:text-[#a7fdfd]'>{insta}</a>
            //     </li>
            //     <li className='py-3 px-1'>
            //       <a href="https://github.com/MrKingofspades" target='_blank' className='text-neon-blue text-3xl hover:text-[#a7fdfd]'>{ghub}</a>
            //     </li>
            //     <li className='py-3 px-1'>
            //       <a href="https://www.youtube.com/@WhoAreTheyActually" target='_' className='text-neon-blue text-3xl hover:text-[#a7fdfd]'>{youtube}</a>
            //     </li>
            //     <li className='py-3 px-1'>
            //       <a href="http://" target='_blank' className='text-neon-blue text-3xl hover:text-[#a7fdfd]'>{linkedin}</a>
            //     </li>
            //   </ul>
            // </div>
            // <div className='absolute invisible lg:visible widescreen:right-24 md:right-32'>
            //   <ul className='flex flex-row invisible lg:visible'>
            //     <li className='border-r px-6 list-none'>
            //       <a href='#home' className='text-white font-ysabeau text-md p-2 hover:text-neon-purple hover:bg-[#7d7974]/30'>Home</a>
            //     </li>
            //     <li className='border-r px-4 list-none'>
            //       <a href='#' className='text-white font-ysabeau text-md p-2 hover:text-neon-purple hover:bg-[#7d7974]/30'>About Us</a>
            //     </li>
            //     <li className='border-r px-4 list-none'>
            //       <a href='#' className='text-white font-ysabeau text-md p-2 hover:text-neon-purple hover:bg-[#7d7974]/30'>Projects</a>
            //     </li>
            //     <li className='border-r px-4 list-none'>
            //       <a href='#' className='text-white font-ysabeau text-md p-2 hover:text-neon-purple hover:bg-[#7d7974]/30'>Shop</a>
            //     </li>
            //     <li className='px-4 list-none'>
            //       <a href='#' className='text-white font-ysabeau text-md p-2 hover:text-neon-purple hover:bg-[#7d7974]/30'>Contact Us</a>
            //     </li>
            //   </ul>
            // </div>
    //       </nav>
    //     </div>
    //   </section>
    // </header>
  );
}

export default Navbar
