// components/LandingPage.tsx

import Link from 'next/link';

const Mainpage: React.FC = () => {
  return (
    <div className="container mx-auto pt-[10px] pb-[97px] text-center">
      <h1 className="text-2xl text-blue-500 pt-[60px] pb-[60px]">Hi, beautiful 👋🏻 I wanna show you something.</h1>
      <div className="flex justify-center">
        <img src="/img/landingimg.png" alt="" className="mx-auto" />
      </div>
      <div className="flex justify-center ">
        <Link href="/Homepage">
          <button className="bg-white text-black font-forum py-2 px-4 rounded-full border border-black mt-4 flex items-center]">
            <span>see here, darling</span>
            <img src="/img/landingimg2.png" alt="" className="ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Mainpage;
