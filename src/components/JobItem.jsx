/* eslint-disable react/prop-types */
import {
  IoTrashBin,
  IoPersonSharp,
  IoBriefcase,
  IoCalendar,
} from "react-icons/io5";
import { FaRegBuilding, FaListCheck } from "react-icons/fa6";

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
      className=" w-[300px] relative mb-4 rounded-lg border-2 border-blue-950 bg-gray-200 p-7 text-blue-950 shadow-xl shadow-blue-100
     hover:shadow-green-400" 
    >
      <div className="mb-7 flex=row ">
        <div className="flex items-center text-sm ">
          <div>
            <IoPersonSharp className="mr-1 h-6 w-6" />
          </div>
          <span className="break-all  ">{job.Duties}</span>
        </div>
 <hr  className="w-[85%]  h-[7px]  ml-[2rem] my-[.35rem] bg-slate-600 items-center m-auto border-[.2px] rounded-3xl border-green-400 "/>
        <div className="flex items-center text-sm">
          <div>
            <FaRegBuilding className="mr-1 h-6 w-6 " />
          </div>
          <span className="break-all">{job.Repository}</span>
        </div>

        <div id="delete-btn" className="text-sm absolute top-2 right-4">
          <span onClick={handleDeleteJob}>
            <IoTrashBin className="mr-1 h-6 w-6" />
          </span>
        </div>
      </div>
      <div className="mb-7 flex space-x-7">
        <div className="flex items-center text-sm">
          <IoBriefcase className="mr-1 h-6 w-6" />
          <span>{job.jobtype}</span>
        </div>

        <div className="flex items-center text-sm">
          <IoCalendar className="mr-1 h-6 w-6" />
          <span>{job.dateApplied}</span>
        </div>
      </div>

      <div className="flex place-content-around items-center">
        <div id="status" className="text-sm">
          <FaListCheck className="mr-1 h-6 w-6" />
          <span>{job.status}</span>
        </div>
      </div>
      
    </div>
  );
}

export default JobItem;
