import React from "react";
import facebook from "../../img/facebook.svg";
import twitter from "../../img/twitter.svg";
import linkedin from "../../img/linkedin.svg";
export const FooterComponent = () => {
  return (
    <div className="grid grid-cols-7 mb-10 mt-12 mx-8 gap-2">
      <div className="col-span-2">
        <div className="text-2xl font-bold mb-5"> ABC </div>
              <div classNmae="text-[#565656]"> India’s biggest legal marketplace.</div>
              <div className="flex flex-row mt-12">
                <img src={facebook} alt="facebook" className="mr-5" />
                <img src={twitter} alt="twitter" className="mr-5" />
                <img src={linkedin} alt="linkedin" />
              </div>
      </div>
      <div>
        <div className="mb-3 font-[500]">Templates</div>
        <div className="text-[#616778] mb-2">Find a Template</div>
        <div className="text-[#616778] mb-2">Business Needs</div>
        <div className="text-[#616778] mb-2">Personal Needs</div>
        <div className="text-[#616778] mb-2">Real Estate</div>
        <div className="text-[#616778]">Pricing</div>
      </div>
      <div>
        <div className="mb-3 font-[500]">Lawyer Match</div>
        <div className="text-[#616778] mb-2">Find a Lawyer</div>
        <div className="text-[#616778]">Get Listed</div>
      </div>
      <div>
        <div className="mb-3 font-[500]">Legal Guides</div>
        <div className="text-[#616778] mb-2">Start Reading</div>
        <div className="text-[#616778] mb-2">Business Needs</div>
        <div className="text-[#616778] mb-2">Personal Needs</div>
        <div className="text-[#616778]">Real Estate</div>
      </div>
      <div>
        <div className="mb-3 font-[500]">Resources</div>
        <div className="text-[#616778]">Webinars</div>
          </div>
          <div>
        <div className="mb-3 font-[500]">About Us</div>
        <div className="text-[#616778] mb-2">Our Team & Mission</div>
        <div className="text-[#616778] mb-2">Blog</div>
        <div className="text-[#616778]">Contact Us</div>
      </div>
    </div>
  );
};
