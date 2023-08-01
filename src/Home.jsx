import React from 'react'

const Home = () => {
  return (
    <div className=''>
        <main className='bg-black/70 h-[100vh]'>
            <div className='max-w-4xl  mx-auto'>
                <section id="home" className='flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 md:gap-48 mb-12'>
                    <article className='sm:w-1/2'>
                        <h2 className='text-white text-5xl font-bold text-center sm:text-5xl sm:text-left font-metal-mania tracking-widest mb-6'>
                            WhoAreTheyActually <span className='ml-12'>Productions</span>
                        </h2>
                        <p className='font-bold tracking-wide text-white text-3xl font-space-mono max-w-md mt-24 text-center sm:text-left'>
                            Let's build a horrific future together, one terrifying tale at a time.
                        </p>
                    </article>
                    <img src="bg.jpg" alt="Horror Picture of Creature Underneath Stars" className='w-1/2' />
                </section>
            </div>
        </main>
    </div>
  )
}

export default Home
