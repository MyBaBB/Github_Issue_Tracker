import { GiStarSattelites } from "react-icons/gi";

function About() {
  return (
    <div className=" flex flex-col items-center bg-gray-500 pt-5 text-black dark:bg-blue-950 dark:text-gray-300">
      <article className="mt-[8rem] ">
      <GiStarSattelites
          size={50}
          className="relative flex items-center m-o m-auto -mt-20 mb-4 animate-spin text-green-300"
          style={{ animationDuration: "3000ms" }}
        />
      <h2 className="text-3xl underline decoration-green-500 font-semibold text-center">About Issue Tracker</h2>
      <p className="text-2xl mt-3 px-20 text-justify">
        A simple and effective application to keep track of GitHub issues that
        have been  applied for. Quick and Easy mobile reference.
      </p>
      <p className="text-xl mt-3 text-center mb-4">
        Created with Productivity in Mind &nbsp;
        
      </p>
      </article>
    </div>
  );
}

export default About;
