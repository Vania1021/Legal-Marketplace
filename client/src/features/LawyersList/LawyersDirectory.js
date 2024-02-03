import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navbar } from "../navbar/Navbar";
import verifiedIcon from "../../img/verifiedicon.png";
import dollar from "../../img/dollar.png";
import realtime from "../../img/realtime.png";
import location from "../../img/location.png";
import scales from "../../img/scales.png";
import { FooterComponent } from "../footer/footer";
import Pagination from "../../pages/Pagination";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  StarIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
const ITEMS_PER_PAGE = 9;
const people = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
    description:
      "Seasoned negotiator, mediator, and attorney providing premier legal advice, services, and representation with backgrounds in the following but not limited to law areas: business/commercial (restaurant & manufacturing), contracts, education, employment,family and matrimonial, healthcare, real estate, and probate & wills/trusts",
  },
  {
    name: "Michael Foster",
    email: "michael.foster@example.com",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
    description:
      "Seasoned negotiator, mediator, and attorney providing premier legal advice, services, and representation with backgrounds in the following but not limited to law areas: business/commercial (restaurant & manufacturing), contracts, education, employment,family and matrimonial, healthcare, real estate, and probate & wills/trusts",
  },
  {
    name: "Dries Vincent",
    email: "dries.vincent@example.com",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
    description:
      "Seasoned negotiator, mediator, and attorney providing premier legal advice, services, and representation with backgrounds in the following but not limited to law areas: business/commercial (restaurant & manufacturing), contracts, education, employment,family and matrimonial, healthcare, real estate, and probate & wills/trusts",
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
    description:
      "Seasoned negotiator, mediator, and attorney providing premier legal advice, services, and representation with backgrounds in the following but not limited to law areas: business/commercial (restaurant & manufacturing), contracts, education, employment,family and matrimonial, healthcare, real estate, and probate & wills/trusts",
  },
  {
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
    description:
      "Seasoned negotiator, mediator, and attorney providing premier legal advice, services, and representation with backgrounds in the following but not limited to law areas: business/commercial (restaurant & manufacturing), contracts, education, employment,family and matrimonial, healthcare, real estate, and probate & wills/trusts",
  },
  {
    name: "Tom Cook",
    email: "tom.cook@example.com",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
    description:
      "Seasoned negotiator, mediator, and attorney providing premier legal advice, services, and representation with backgrounds in the following but not limited to law areas: business/commercial (restaurant & manufacturing), contracts, education, employment,family and matrimonial, healthcare, real estate, and probate & wills/trusts",
  },
];

const totalItems = 10;
export function LawyerDirectory() {
  return (
    <>
      <Navbar />
      <div className="flex-auto mt-8 justify-content">
        <div className="flex mt-12 justify-center">
          <div className="flex bg-[#F6F7FA]">
            <div class="grid place-items-center h-full w-12 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              className="bg-[#F6F7FA] p-3 pr-44 rounded focus:outline-none"
              placeholder="Practice area, legal issue"
              type="text"
              name="search"
            />
          </div>
          <div className="flex bg-[#F6F7FA]">
            <div class="grid border-l-2 place-items-center h-full w-12 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              className="bg-[#F6F7FA] p-3 pr-44 border-solid rounded focus:outline-none"
              placeholder="State, city"
              type="text"
              name="search"
            />
          </div>

          <button className="text-white rounded">
            <div class="grid rounded bg-[#3D00B7] place-items-center h-full w-12 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="flex m-5 mx-80 mb-10">
          <button className="ml-8 bg-[#3D00B7] text-sm text-white rounded-[60px] lr:mr-5 mr-2 px-6 py-0.5 lg:py-1">
            Practice Area
          </button>
          <button className=" text-sm border rounded-[60px] lr:mr-5 mr-2 px-4 py-0.5 lg:py-1">
            State
          </button>
          <button className=" text-sm border rounded-[60px] lr:mr-5 mr-2 px-4 py-0.5 lg:py-1">
            Price
          </button>
          <button className=" text-sm border rounded-[60px] lr:mr-5 mr-2 px-4 py-0.5 lg:py-1">
            Sort
          </button>
        </div>
        <div className="mt-32 ">
          <h1 className="text-center mb-10 text-3xl font-semibold">
            Workers' Compensation Lawyers Near You
          </h1>
          <ul role="list" className="my-15 mx-52">
            {people.map((person) => (
              <li key={person.email} className="py-10">
                <div className="flex justify-around py-3">
                  <div className="flex min-w-0 gap-x-4">
                    <img
                      className="h-32 w-32 flex-none rounded-full bg-gray-50"
                      src={person.imageUrl}
                      alt=""
                    />
                    <div className="min-w-0 flex-auto">
                      <p className="text-2xl mx-5 font-semibold leading-6 text-gray-900">
                        {person.name}
                      </p>
                      <div className=" mx-5">
                        <div class="flex items-center space-x-1 mt-3">
                          <svg
                            class="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-gray-300 dark:text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        </div>
                        <p className="mt-5 flex truncate leading-5 ">
                          <img src={verifiedIcon}></img>
                          <span className="ml-2">
                            Contracts Counsel verified
                          </span>
                        </p>
                        <p className="mt-5 truncate leading-5 flex">
                          <img src={location}></img>{" "}
                          <span className="ml-2">Des Moines, IA </span>
                        </p>
                        <p className="mt-5 truncate leading-5 flex">
                          <img src={scales}></img>{" "}
                          <span className="ml-2">
                            Massachusetts, New Hampshire{" "}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                    <button className="border-[#3D00B7] text-sm font-semibold text-[#3D00B7] text-md border-2 rounded-[60px] lg:mr-8 px-6 py-0.5 lg:py-2">
                      View Profile
                    </button>
                    <button className=" bg-[#3D00B7] text-sm text-white rounded-[60px] lr:mr-5 mr-2 px-6 py-0.5 lg:py-2">
                      Schedule a call
                    </button>

                    <p className="mt-6 leading-5 flex">
                      <img src={realtime}></img>
                      <span className="ml-2">15 Years practicing</span>
                    </p>

                    <div className="mt-5 flex items-center gap-x-1.5">
                      <img src={dollar}></img>
                      <p className=" leading-5">225.00 / hour</p>
                    </div>
                  </div>
                </div>
                <div className="mx-24 my-5">{person.description}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Pagination></Pagination>
      <FooterComponent></FooterComponent>
    </>
  );
}
