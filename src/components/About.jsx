import { GiStarSattelites } from "react-icons/gi";

function About() {
  return (
    <div className="h- flex flex-col items-center bg-gray-500 pt-5 text-blue-900 dark:bg-blue-950 dark:text-gray-300">
      <h2 className="text-xl font-semibold">About Issue Tracker</h2>
      <p className="text-md mt-3 px-20 text-justify">
        A simple and effective application to keep track of GitHub issues that
        I&apos;ve applied for.
      </p>
      <p className="text-md mt-3 text-center">
        Created with Productivity in Mind &nbsp;
        <GiStarSattelites
          size={20}
          className="inline-block animate-spin text-blue-800 dark:text-green-300"
          style={{ animationDuration: "3000ms" }}
        />
      </p>
    </div>
  );
}

export default About;
