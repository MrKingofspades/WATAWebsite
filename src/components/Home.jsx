import React from 'react'

const Home = () => {
  return (
    <div className='h-[100vh] bg-black/70 overflow-auto'>
        <div className='relative top-[20%] 2xl:top-[30%]'>
            <div className='max-w-4xl mx-auto'>
                <section className='flex flex-col-reverse lg:flex-row gap-8 lg:gap-48 justify-center items-center'>
                    <article className='sm:w-1/2'>
                        <h2 className='text-white text-2xl sm:text-3xl md:text-5xl font-metal-mania tracking-widest font-bold text-center'>WhoAreTheyActually <br /><span className=''>Productions</span></h2>
                        <p className='text-white text-xl md:text-3xl p-2 font-space-mono tracking-wide font-bold text-center mt-12'>Let's build a horrific future together, one terrifying tale at a time.</p>
                    </article>
                    <img src='bg.jpg'className='w-2/3 md:w-1/3' />
                </section>
            </div>
        </div>
    </div>
  )
}

export default Home
