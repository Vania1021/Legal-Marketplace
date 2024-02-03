import React from "react";
import img from "../../img/cuate.jpg";
import lawyer from "../../img/lawyers.png";
import { FeaturesComponent } from "./features";
import { SearchLawyerComponent } from "./searchLawyer";
import { DivAnimatedSteps } from "./steps";
export const LandingPageComponent = () => {
  return (
    <div className="flex-auto mt-8">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex-auto px-8 py-2">
          <div className="text-5xl font-semibold">
            Match Your Legal Needs With the Perfect Lawyer
          </div>
          <div className="mt-5">
            Skilled attorneys are just a search away. Start browsing by legal
            issue, practice area, or location for free.
          </div>
          <div className="flex flex-auto mt-12">
            <input
              class="bg-[#F6F7FA] p-3 rounded focus:outline-none"
              placeholder="Practice area, legal issue"
              type="text"
              name="search"
            />
            <input
              class="bg-[#F6F7FA] p-3 border-solid border-l-2 rounded w-24 lg:w-64 focus:outline-none"
              placeholder="State, city"
              type="text"
              name="search"
            />
            <button className="bg-[#3D00B7] text-white rounded px-2">
              Find a Lawyer
            </button>
          </div>
        </div>
        <div className="flex flex-auto justify-center">
          <img src={img} className="object-contain" alt="hiii" />
        </div>
      </div>
      <FeaturesComponent />
      <DivAnimatedSteps />
      <SearchLawyerComponent />
      <div class="flex-auto mt-10 mb-10 mx-8 bg-[#F2F2FE] rounded">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col p-8 items-start lg:ml-12">
            <div className="text-2xl font-semibold">Are You a Lawyer?</div>
            <div className="mt-3">
              Check out how we can get you more leads for free. Build your brand
              and become more visible online.
            </div>
            <button className="bg-[#3D00B7] text-white p-2 rounded lg:mt-8 mt-5">
              Get Started
            </button>
          </div>
          <div className="py-4 px-6 flex flex-auto justify-center">
            <img src={lawyer} className="object-contain" alt="hiii" />
          </div>
        </div>
      </div>
      <div class="flex flex-col mt-10 mb-10 mx-8 items-center">
        <div className="font-semibold text-2xl mb-2">
          The Ultimate Legal Ecosystem
        </div>
        <div>
          We cover every step of your legal journey, whether you're a client or
          a lawyer.
        </div>
        <div className="grid grid-cols-2 gap-4 lg:gap-10 mt-10">
          <div className="flex flex-col items-start py-2 pr-5 pl-2">
            <div className="font-[600]">Match</div>
            <div className="text-[#616778] mt-4">Searchable directory of qualified lawyers across India</div>
            <div className="text-[#9499AA] mt-2">Get instant legal assistance with your issue.</div>
            <button className="mt-6 text-[#00E]">Find Lawyer  {">"} </button>
          </div>
          <div className="flex flex-col items-start py-2 pr-5 pl-2">
            <div className="font-[600]">Tool</div>
            <div className="text-[#616778] mt-4">AI-driven tool for contract drafting
and review</div>
            <div className="text-[#9499AA] mt-2">Use our software to remove errors and
have all clauses at hand.</div>
            <button className="mt-6 text-[#00E]">Try  {">"} </button>
          </div>
        </div>
      </div>
    </div>
  );
};
