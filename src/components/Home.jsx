import React from 'react'

const Home = () => {
  return (
    <div>
      <main className='mx-auto max-w-4xl'>
        <section id='hero' className='widescreen:section-min-height tallscreen:section-min-height mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row'>
            <article className='sm:w-1/2'>
                <h2 className='max-w-md text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl'>
                    WhoAreTheyActually <span className='ml-12'>Productions</span>
                </h2>
                <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
                    Let's build a horrific future together, one terrifying tale at a time.
                </p>
            </article>
        </section>
      </main>
    </div>
  )
}

export default Home
