import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import client from "../../img/client_createAccount.svg";
import lawyer from "../../img/lawyer_createAccount.svg";

export const CreateAccount = () => {
  const [type, setType] = useState("");
  const [clicked, setClicked] = useState(false);
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Submitted:", email, password, type);
    setClicked(false);
    resetForm();
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="grid grid-cols-2 lg:gap-6 lg:m-10 gap-2 m-3">
            <div
              className="border-solid border-2 border-[#BDBDFC] py-2 px-4 hover:border-4"
              onClick={() => {
                nextStep();
                setType("user");
              }}
            >
              <div className="flex flex-row justify-between mb-2">
                <img src={client} alt="client" className="w-20 h-20" />
                <div className="rounded-[100%] border-2 border-solid border-[#bdbdfc] h-5 w-5 mt-2.5 mr-2" />
              </div>
              <div className="font-[500]">
                I’m a client, looking for legal help
              </div>
            </div>
            <div
              className="border-solid border-2 border-[#BDBDFC] py-2 px-4 hover:border-4"
              onClick={() => {
                nextStep();
                setType("lawyer");
              }}
            >
              <div className="flex flex-row justify-between mb-2">
                <img src={lawyer} alt="client" className="w-20 h-18" />
                <div className="rounded-[100%] border-2 border-solid border-[#bdbdfc] h-5 w-5 mt-2.5 mr-2" />
              </div>
              <div className="font-[500]">I’m a legal help provider</div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="lg:mx-10 lg:my-6 m-6">
            <div className="flex justify-center mb-6">
              <div className="font-[500] text-xl">
                Find the best help for all your legal needs
              </div>
            </div>
            <form>
              <div className="flex flex-col mb-2">
                <label className="font-[500] mb-1">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-solid border-2 border-[#EDEDEE] py-2 px-4 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col mb-2">
                <label className="font-[500] mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-solid border-2 border-[#EDEDEE] py-2 px-4 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col mb-2">
                <label className="font-[500] mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-solid border-2 border-[#EDEDEE] py-2 px-4 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col items-center justify-center mt-6">
                <button
                  className="bg-[#5B5BF7] text-white rounded-md w-full px-4 py-2"
                  type="submit"
                  onClick={submitForm}
                >
                  Submit
                </button>
                <div className="mt-6 text-[#616778]">
                  By clicking “Submit” above, you acknowledge that you have read
                  and understood,
                </div>
                <div className="text-[#616778] mb-3">
                  and agreed to Lawrina`s Terms & Conditions and Privacy Policy.
                </div>
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <button
        className="border-[#3D00B7] text-[#3D00B7] text-md border-2 rounded-[60px] lg:mr-8 px-6 py-0.5 lg:py-2"
        onClick={() => {
          setClicked(true);
          setStep(1);
        }}
      >
        Create Account
      </button>
      <Popup open={clicked} onClose={() => setClicked(false)} position="top">
        {(close) => (
          <div>
            <div className="flex flex-row justify-between items-center lg:mx-10 mx-3 my-2">
              {step > 1 && (
                <button className="text-lg text-[#9499AA]" onClick={prevStep}>
                  Back
                </button>
              )}
              <div className="text-lg">
                {step > 1 ? "Register your Account" : "Choose type of account"}
              </div>
              <button className="text-lg text-[#9499AA]" onClick={close}>
                x
              </button>
            </div>
            {renderStepContent()}
          </div>
        )}
      </Popup>
    </>
  );
};
