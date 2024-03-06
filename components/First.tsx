import React from 'react';
import Link from 'next/link';

const First: React.FC = () => {
  return (
    <div className="container mx-auto pt-10 text-center bg-white relative">
      <div className="lg:flex lg:justify-between lg:items-center">
      <div className=" lg:text-left pb-8">
          <img src="/img/first.png" alt="Image" className="mx-auto" />
        </div>
        <div className="lg:text-right">
          <h1 className="text-3xl font-bold text-blue-500 font-homemadeApple mb-8 pt-8 pb-8 lg:pt-0 lg:pb-0">Happy Anniversary, Babe!</h1>
          <p className='mb-8'>Hello dear, what is here is not much, but I made it <br /> with love, and I wanna say this to you...</p>
          <div className='flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0 lg: ml-4 md:ml-0 pb-8'>
            <Link href="#loveLetter">
              <button className="bg-white text-black font-forum py-2 px-4 rounded-full border border-black flex items-center">
                <span>Read My Letter</span>
                <img src="/img/icon1.png" alt="" className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:flex lg:justify-between lg:items-center pt-12">
        <div className="lg:text-left">
          <h1 className="text-3xl font-bold text-blue-500 font-homemadeApple mb-8 pt-8 pb-8 lg:pt-0 lg:pb-0">Another year of love and laughter with you!</h1>
          <p className='mb-8'>Another year filled with love and laughter <br /> with you, making every moment precious and beautiful.</p>
          <div className='flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0 lg: ml-4 md:ml-0 pb-8'>
            <Link href="#Memories">
              <button className="bg-white text-black font-forum py-2 px-4 rounded-full border border-black flex items-center ">
                <span>See Our Memories</span>
                <img src="/img/icon2.png" alt="" className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
        <div className=" lg:text-right pb-8">
          <img src="/img/first2.png" alt="Image" className="mx-auto" />
        </div>
      </div>

      <div>
        <div className='pt-[161px] '>
      <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcaNzm5VjkMg?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      </div>
      </div>
    
  );
};

export default First;
