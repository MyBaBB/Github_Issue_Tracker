import { useEffect, useState } from "react";
import JobItem from "./JobItem";

function JobList({ jobApplications, setJobApplications }) {
  const [savedJobs, setSavedJobs] = useState([]);
  useEffect(() => {
    const storedJobs =
      JSON.parse(localStorage.getItem("jobApplications")) || [];
    setSavedJobs(storedJobs);
  }, []);
  console.log(jobApplications);

  return (
    <div className="h-screen">
      {jobApplications.length > 0 && (
        <div className="mt-10 flex justify-center text-xl font-bold text-blue-950 dark:text-gray-200">
          <h2 className="text-2xl">GitHub Repos</h2>
        </div>
      )}
      <div className="m-10 flex justify-center">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {jobApplications.map((job, index) => (
            <JobItem
              key={index}
              job={job}
              idx={index}
              setJobApplications={setJobApplications}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobList;
