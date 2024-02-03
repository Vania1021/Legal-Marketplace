import React from "react";
import group from "../../img/Group.svg";
import explore from "../../img/explore.png";
import begin_issue from "../../img/begin_issue.png";
import { Link } from "react-router-dom";

export const DivAnimatedSteps = () => {
  return (
    <div className="flex-auto mt-10 mb-10 mx-8">
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-start pr-5">
          <div className="text-2xl font-semibold mb-4 mt-7">How Does It Work?</div>
          <div>
            Use our AI powered chatbot to explore and find the attorney to get
            legal advice or assistance with your issue.
          </div>
          <Link to="/bot" className="mt-8 bg-[#3D00B7] text-white text-lg py-2 px-5 rounded-[60px]">Launch bot</Link>
        </div>
        <div className="grid grid-cols-10">
          <img src={group} className="h-[100%]" alt="a" />
          <div className="col-span-9 p-4 lg:px-5 border-solid border-b-2">
            <button className="bg-[#F2F2FE] text-[#3D00B7] px-2 rounded mb-3">
              Step 1
            </button>
            <div className="flex flex-row">
              <img src={begin_issue} className="lg:h-auto h-fit" alt="a" />
              <div className="flex flex-col ml-4">
                <div className="text-[17px] font-semibold mb-1">
                  Begin with a legal issue and location
                </div>
                <div className="text-sm text-slate-500">
                  Specify your legal matter or choose a practice area, then your
                  location to our chatbot. We will find the right lawyer for you
                  in minutes.
                </div>
              </div>
            </div>
          </div>
          <img src={group} className="h-[100%]" alt="a" />
          <div className="col-span-9 p-4 lg:px-5 border-solid border-b-2">
            <button className="bg-[#F2F2FE] text-[#3D00B7] px-2 rounded mb-3">
              Step 2
            </button>
            <div className="flex flex-row">
              <img src={explore} className="lg:h-auto h-fit" alt="a" />
              <div className="flex flex-col ml-4">
                <div className="text-[17px] font-semibold mb-1">
                  Explore lawyer profiles
                </div>
                <div className="text-sm text-slate-500">
                  Learn about the lawyer’s experience, education, and
                  publications to choose the highly qualified professional
                  that’s close to you.
                </div>
              </div>
            </div>
          </div>
          <img src={group} className="h-[100%]" alt="a" />
          <div className="col-span-9 p-4 lg:px-5 border-solid border-b-2">
            <button className="bg-[#F2F2FE] text-[#3D00B7] px-2 rounded mb-3">
              Step 3
            </button>
            <div className="flex flex-row">
              <img src={explore} className="lg:h-auto h-fit" alt="a" />
              <div className="flex flex-col ml-4">
                <div className="text-[17px] font-semibold mb-1">
                  Reach out to a legal professional
                </div>
                <div className="text-sm text-slate-500">
                  Contact the needed lawyer directly to request legal help.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
