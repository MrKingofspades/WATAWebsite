import React from 'react';
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
  return (
    <body>
      <header className='w-full h-12 flex justify-between items-center z-50 fixed bg-nav-bg/60 shadow-xl shadow-neon-orange/20'>
        <div className='flex mx-4 sm:mx-8 mb-1'>
          <h1 className='xl:hidden flex text-3xl text-neon-red font-lacquer'>WATA</h1>
          <h1 className='hidden xl:flex text-3xl text-neon-red font-lacquer'>WhoAreTheyActually</h1>
        </div>
        <nav className='flex items-center justify-between ml-[32rem]'>
          <div className='absolute invisible md:visible left-[35%] sm:left-[40%] lg:left-[8rem] xl:left-[22rem] -top-2'>
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
          <div className='absolute left-[40%] lg:left-[42%] xl:left-[58%] 2xl:left-[68%]'>
            <ul className='flex invisible lg:visible'>
              <li className='border-r px-4 list-none'>
                <a href='#' className='text-white font-ysabeau text-md p-2 hover:text-neon-purple hover:bg-[#7d7974]/30'>Home</a>
              </li>
              <li className='border-r px-4 list-none'>
                <a href='#' className='text-white font-ysabeau text-md p-2 hover:text-neon-purple hover:bg-[#7d7974]/30'>About Us</a>
              </li>
              <li className='border-r px-4 list-none'>
                <a href='#' className='text-white font-ysabeau text-md p-2 hover:text-neon-purple hover:bg-[#7d7974]/30'>Projects</a>
              </li>
              <li className='border-r px-4 list-none'>
                <a href='#' className='text-white font-ysabeau text-md p-2 hover:text-neon-purple hover:bg-[#7d7974]/30'>Shop</a>
              </li>
              <li className='px-4 list-none'>
                <a href='#' className='text-white font-ysabeau text-md p-2 hover:text-neon-purple hover:bg-[#7d7974]/30'>Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className='absolute left-[95%]'>
          <button className='w-8 h-8 text-3xl cursor-pointer relative hover:opacity-80 focus:outline-none lg:hidden'>
            <div className="bg-white w-8 h-1 rounded absolute top-3 right-6 before:content-[''] before:bg-white before before:w-8 before:h-1 before:rounded before:absolute before:-translate-y-3 before:-translate-x-4 after:content-[''] after:bg-white after after:w-8 after:h-1 after:rounded after:absolute after:translate-y-3 after:-translate-x-4"></div>
          </button>
        </div>
        <button className='flex invisible mx-4 lg:visible w-9 h-9 bg-nav-bg hover:bg-neon-yellow hover:shadow-md hover:shadow-neon-green rounded-full justify-center items-center'>
          <div className='relative py-2'>
            <div className='text-neon-purple text-xl font-bold'>
              {cart}
            </div>
            <div className='top-6 absolute left-4'>
              <p className="flex h-1 w-1 items-center justify-center rounded-full bg-neon-orange p-2 text-xs text-black font-bold">0</p>
            </div>
          </div>
        </button>
      </header>
    </body>

    // <header className="bg-nav-bg text-white sticky top-0 z-10">
    //   <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
    //     <h1 className="text-4xl font-medium font-lacquer text-neon-red tracking-widest lg:-mx-64">
    //       <div>🧟 WATA</div>
    //     </h1>
    //     {/* <button className='bg-neon-red w-5 h-1 mx-48 -rotate-45 absolute top-11'></button>
    //     <button className='bg-neon-red w-5 h-1 mx-48 rotate-45 absolute top-8'></button> */}

    //     <ul className="hidden md:flex lg:flex justify-between items-center text-xl ml-24">
    //       <li className='border-r px-8'>
    //         <a href="#" className='text-ysabeau hover:text-neon-purple hover:border-[#5a5959] hover:bg-[#5a5959] hover:border-[18px] rounded-xl'>Home</a>
    //       </li>
    //       <li className='border-r px-8'>
    //         <a href="#" className='text-ysabeau hover:text-neon-purple hover:border-[#5a5959] hover:bg-[#5a5959] hover:border-[18px] rounded-xl'>About Us</a>
    //       </li>
    //       <li className='border-r px-8'>
    //         <a href="#" className='text-ysabeau hover:text-neon-purple hover:border-[#5a5959] hover:bg-[#5a5959] hover:border-[18px] rounded-xl'>Projects</a>
    //       </li>
    //       <li className='border-r px-8'>
    //         <a href="#" className='text-ysabeau hover:text-neon-purple hover:border-[#5a5959] hover:bg-[#5a5959] hover:border-[18px] rounded-xl'>Shop</a>
    //       </li>
    //       <li className='px-8'>
    //         <a href="#" className='text-ysabeau hover:text-neon-purple hover:border-[#5a5959] hover:bg-[#5a5959] hover:border-[18px] rounded-xl'>Contact Us</a>
    //       </li>
    //     </ul>

    //     <div>
    //       <button id="mobile-open-button" className="text-3xl sm:hidden focus:outline-none">
    //         &#9776;
    //       </button>
    //     </div>
    //     {/* <div className='absolute text-s right-cart z-10 bottom-3 bg-black rounded-full w-4 h-4 '>
    //       0
    //     </div>
    //     <button className='h-8 w-8 text-xl md:w-12 md:h-12 absolute right-cart md:text-2xl bg-blue-200 rounded-full'>
    //       🛒
    //     </button> */}
    //   </section>
    // </header>

  );
}

export default Navbar
