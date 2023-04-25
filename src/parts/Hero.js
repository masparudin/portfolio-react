import { init } from 'ityped';
import React, { useEffect, useRef } from 'react';
import { HiDownload } from 'react-icons/hi';

export default function Hero() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      showCursor: true,
      strings: ['Android Developer', 'Content Writer'],
    });
  }, []);

  return (
    <section id='home' className='hero-section'>
      <div className='container'>
        <div className='flex flex-wrap items-center justify-center sm:px-4'>
          <div className='column'>
            <h1 className='sub-title'>
              Hello 👋, my name is{' '}
              <span className='title lg:text-5xl'>Masparudin</span>
            </h1>
            <h2 className='job-title'>
              I'm a{' '}
              <span className=' text-dark dark:text-white' ref={textRef}></span>
            </h2>
            <p className='paragraph mb-10 leading-relaxed'>
              Assisting companies in developing Android applications{' '}
              <br className='hidden lg:block' />  to significantly improve business growth.
            </p>

            <div className='flex flex-wrap justify-center space-y-2 text-center sm:justify-start sm:space-y-0 sm:space-x-2'>
              <a href='#contact' className='btn btn-primary w-full sm:w-auto'>
                Contact Me
              </a>
              <a
                href='https://drive.google.com/file/d/1wnaqIgSp8WnfLhQPZ9OvhVJQowzk8hzh/view?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-secondary flex w-full items-center justify-center sm:w-auto'
              >
                <HiDownload style={{ marginRight: 10 }} /> Download CV
              </a>
            </div>
          </div>
          <div className='column px-4 xl:w-2/5'>
            <div className='relative mt-10 md:mt-0 lg:right-0 lg:mt-0'>
              <img
                src='images/masparudin.png'
                alt='masparudin'
                className='mx-auto max-w-full sm:w-3/4 md:mx-0 md:w-full'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
