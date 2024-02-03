import { useState } from "react";
export const SearchLawyerComponent = () => {
  const statesInIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];
  const practiceAreas = [
    "Personal Injury",
    "Business Law",
    "DUI & DWI",
    "Criminal Law",
    "Family Law",
    "Divorce",
    "Estate Planning",
    "Real Estate Law",
    "Domestic Violence",
    "Probate",
    "Medical Malpractice",
    "Products Liability",
    "Employment Law",
    "Bankruptcy",
    "Workers' Compensation",
    "Appeals & Appellate",
    "Insurance Claims",
    "Traffic Tickets",
    "Juvenile Law",
    "Arbitration & Mediation",
    "Nursing Home Abuse",
  ];
  const [selected, setSelected] = useState(true);
  const [array, setArray] = useState(practiceAreas);

  const change = (state) => {
    setSelected(state);
    setArray(state ? practiceAreas : statesInIndia);
  };

  return (
    <div className="flex-auto mt-10 mb-10 mx-8">
      <div className="text-2xl font-bold">Search for the perfect lawyer</div>
      <div className="flex flex-row my-2">
        <button
          className={`bg-white ${
            selected
              ? " text-[#00E] border-solid border-2 border-[#00E]"
              : "text-slate-500"
          } rounded px-2 py-1 mr-2`}
          onClick={() => change(true)}
        >
          By practice area
        </button>
        <button
          className={`bg-white ${
            !selected
              ? " text-[#00E] border-solid border-2 border-[#00E]"
              : "text-slate-500"
          } rounded px-2 py-1 mr-2`}
          onClick={() => change(false)}
        >
          By state
        </button>
      </div>
      <div className="text-slate-400 mb-2">
        Popular {selected ? "practice areas" : "states"}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {array.map((area) => (
          <div className="flex flex-row items-baseline" key={area}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M5 8.66669V10.6667H9V8.66669H13.6667V13.3334C13.6667 13.5102 13.5964 13.6797 13.4714 13.8048C13.3464 13.9298 13.1768 14 13 14H1C0.823189 14 0.653619 13.9298 0.528595 13.8048C0.403571 13.6797 0.333333 13.5102 0.333333 13.3334V8.66669H5ZM6.33333 7.33335H7.66667V9.33335H6.33333V7.33335ZM3.66667 3.33335V1.33335C3.66667 1.15654 3.7369 0.986973 3.86193 0.861949C3.98695 0.736925 4.15652 0.666687 4.33333 0.666687H9.66667C9.84348 0.666687 10.013 0.736925 10.1381 0.861949C10.2631 0.986973 10.3333 1.15654 10.3333 1.33335V3.33335H13C13.1768 3.33335 13.3464 3.40359 13.4714 3.52862C13.5964 3.65364 13.6667 3.82321 13.6667 4.00002V7.33335H9V6.00002H5V7.33335H0.333333V4.00002C0.333333 3.82321 0.403571 3.65364 0.528595 3.52862C0.653619 3.40359 0.823189 3.33335 1 3.33335H3.66667ZM5 2.00002V3.33335H9V2.00002H5Z"
                fill="#0000EE"
              />
            </svg>
            <div className="text-[#00E] text-sm ml-1">{area}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
