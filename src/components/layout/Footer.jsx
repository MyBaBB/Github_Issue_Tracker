import { TbBrandGithubFilled } from "react-icons/tb";
import WebApp from "../PWAFolder/WebApp";

function Footer() {
  return (
    <footer className="fixed bottom-0 mt-auto h-[2rem] w-screen bg-blue-950 pb-6 pt-1  text-center
     text-gray-200  dark:bg-gray-500 dark:text-blue-950">
      
       GitHub 2024 &copy; Brett Baker&nbsp;
<div className="relative  -top-[3.7rem]  z-[400]">< WebApp /></div>
       <TbBrandGithubFilled size={25} className="absolute bottom-1 left-8 inline-block text-blue-400" />&nbsp;
       <TbBrandGithubFilled size={25} className="absolute bottom-1 right-8 inline-block text-blue-400" />
    </footer>
  );
}

export default Footer;
