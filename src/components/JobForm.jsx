// JobForm.js
import React, { useState } from "react";
import "../index.css";
import Error from "./Error";

import { RiArrowDropDownLine } from "react-icons/ri";

function JobForm({ onAddJob }) {
  const [isfill, setIsfill] = useState(true);
  const [Repository, setRepository] = useState("");
  const [Duties, setDuties] = useState("");
  const [dateApplied, setDateApplied] = useState("");
  const [jobtype, setJobtype] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newApplication = { Repository, Duties, dateApplied, jobtype, status };

    if (
      Repository.length == 0 ||
      Duties.length == 0 ||
      dateApplied.length == 0
    ) {
      setIsfill(false);

      setTimeout(() => {
        setIsfill(true);
      }, 2000);
    }
    if (Repository.length == 0 || Duties.length == 0 || dateApplied.length == 0)
      return;
    saveToLocalStorage(newApplication);

    onAddJob(newApplication);

    setRepository("");
    setDuties("");
    setDateApplied("");
  };

  const saveToLocalStorage = (newApplication) => {
    const existingApplications =
      JSON.parse(localStorage.getItem("jobApplications")) || [];
    const updatedApplications = [...existingApplications, newApplication];
    localStorage.setItem(
      "jobApplications",
      JSON.stringify(updatedApplications),
    );
  };

  return (
    <div className="flex justify-center">
      <form className="mt-5 w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-blue-950 dark:text-gray-200"
              htmlFor="Repository"
            >
              Repository:
            </label>
            <input
              className="mb-3 block w-full appearance-none rounded border 
      bg-gray-500 px-4 py-3 leading-tight text-blue-950 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="Repository"
              type="text"
              value={Repository}
              onChange={(e) => setRepository(e.target.value)}
            />
          </div>

          <div className="w-full px-3 md:w-1/2">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-blue-950 dark:text-gray-200"
              htmlFor="Duties"
            >
              Duties:
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-500 px-4 py-3 leading-tight 
      text-blue-950 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="Duties"
              type="text"
              value={Duties}
              onChange={(e) => setDuties(e.target.value)}
            />
          </div>
        </div>

        <div className="-mx-3 mb-2 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-blue-950 dark:text-gray-200"
              htmlFor="date"
            >
              {" "}
              Date Applied:
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-500 px-4 py-3 leading-tight text-blue-950 focus:bg-white"
              id="date"
              type="date"
              value={dateApplied}
              onChange={(e) => setDateApplied(e.target.value)}
            />
          </div>

          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-blue-950 dark:text-gray-200"
              htmlFor="type"
            >
              {" "}
              Job Type:
            </label>
            <div className="relative">
              <select
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-500 px-4 py-3 pr-8 leading-tight text-blue-950 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="type"
                onChange={(e) => setJobtype(e.target.value)}
              >
                <option className="text-sm" value="">
                  Select
                </option>
                <option value="Internship">Internship</option>
                <option value="Part Time">Part time</option>
                <option value="Full Time">Full time</option>
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-950">
                <RiArrowDropDownLine className="h-5 w-5 fill-current" />
              </div>
            </div>
          </div>

          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label
              className="gray-700 mb-2 block text-xs font-bold uppercase tracking-wide text-blue-950 dark:text-gray-200"
              htmlFor="status"
            >
              {" "}
              Status:
            </label>
            <div className="relative">
              <select
                className="block w-full appearance-none rounded border border-gray-200
        bg-gray-500 px-4 py-3 pr-8 leading-tight text-blue-950 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="status"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Applied">Applied</option>
                <option value="Pending">Pending</option>
                <option value="Interviewing">Interviewing</option>
                <option value="Hired">Hired</option>
                <option value="Rejected">Rejected</option>
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-950">
                <RiArrowDropDownLine className="h-5 w-5 fill-current" />
              </div>
            </div>
          </div>
        </div>
        {!isfill && <Error className="text-red-700" />}
        <div className="mt-5 flex justify-center">
          <button
            className="rounded border border-blue-950 bg-transparent px-4 py-2 font-semibold text-blue-950 transition delay-150 ease-in-out hover:bg-blue-950 hover:text-gray-200 hover:transition-all dark:bg-gray-500 dark:hover:border-gray-200 dark:hover:bg-darkblue dark:hover:text-gray-200"
            type="submit"
          >
            Add Job
          </button>
        </div>
      </form>
    </div>
  );
}

export default JobForm;
