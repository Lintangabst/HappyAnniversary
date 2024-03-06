// Import komponen First dan Navbar
import First from "@/components/First";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LoveLetter from "@/components/loveLetter";
import Memories from "@/components/Memories";


const Homepage: React.FC = () => {
  return (
    
    <div className="bg-white">
      <Navbar />
        <hr className="my-2 w-3/4 mx-auto border-gray-300 pb-[80px]" />
      <First />
      <LoveLetter/>
      <Memories />
        <hr className="my-2 w-3/4 mx-auto border-gray-300 pb-[80px]" />
      <Footer/>
    </div>
  );
};

export default Homepage;
