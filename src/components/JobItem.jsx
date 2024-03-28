/* eslint-disable react/prop-types */
import { IoTrashOutline } from "react-icons/io5";
import { FcCalendar } from "react-icons/fc";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FcAbout } from "react-icons/fc";
import { SiGithub, SiLevelsdotfyi } from "react-icons/si";
function JobItem({ job, idx, setJobApplications }) {
  const handleDeleteJob = () => {
    const existingApplications =
      JSON.parse(localStorage.getItem("jobApplications")) || [];

    if (idx >= 0) {
      existingApplications.splice(idx, 1);
      localStorage.setItem(
        "jobApplications",
        JSON.stringify(existingApplications),
      );
      setJobApplications([...existingApplications]);
    } else {
      console.log("no item found");
    }
  };

  return (
    <div
      className=" relative mb-4 w-[300px] rounded-lg border-2 border-blue-950 bg-gray-200 p-7 text-blue-950 shadow-xl shadow-blue-100
     hover:shadow-green-400"
    >
      <div className="flex=row mb-7 ">
      <div className="flex items-center text-sm">
          <div>
            <SiGithub className="mr-1 h-6 w-6 " />
          </div>
          <span className="break-all">{job.Repository}</span>
        </div>
        <hr className="m-auto  my-[.35rem]  ml-[2rem] h-[4px] w-[85%] items-center rounded-3xl border-[.2px] border-green-400 bg-slate-600 " />
        <div className="flex items-center text-sm ">
          <div>
            <FcAbout className="mr-1 h-6 w-6" />
          </div>
          <span className="break-all  ">{job.Duties}</span>
        </div>

        
        
        <hr className="m-auto  my-[.35rem]  ml-[2rem] h-[4px] w-[85%] items-center rounded-3xl border-[.2px] border-green-400 bg-slate-600 " />
        <div id="delete-btn" className="absolute right-4 top-2 text-sm">
          <span onClick={handleDeleteJob}>
            <IoTrashOutline className="mr-1 h-6 w-6" />
          </span>
        </div>
      </div>
      <div className="ml-4">
      <div className="mb-1 flex space-x-7">
        <div className="inline-block items-center text-sm">
          <LiaLaptopCodeSolid className="m-auto  h-6 w-6" />
          <span>{job.jobtype}</span>
        </div>

        <div className="inline-block items-center text-center text-sm">
          <FcCalendar className="m-auto  h-6 w-6" />
          <span>{job.dateApplied}</span>
        </div>
      

      <div className="inline-block place-content-around items-center">
        <div id="experience" className="text-sm">
          <SiLevelsdotfyi className="m-auto mr-1 h-6 w-6" />
          <span>{job.status}</span>
        </div>
      </div>
      </div>
      </div>
      {/* Add a box for editing data */}
      <div className="mt-4"></div>
    <div className="mt-4">
      <textarea
        className="w-full text-white h-20 p-2 border-2 border-gray-300 rounded-lg"
        placeholder="Add a note..."
        value={job.note}
        onChange={(e) => {
          const updatedJob = { ...job, note: e.target.value };
          // Update the job object in the existingApplications array
          const existingApplications =
            JSON.parse(localStorage.getItem("jobApplications")) || [];
          existingApplications[idx] = updatedJob;
          localStorage.setItem(
            "jobApplications",
            JSON.stringify(existingApplications)
          );
          setJobApplications([...existingApplications]);
        }}
      ></textarea>
    </div>
    </div>
  );
}

export default JobItem;
