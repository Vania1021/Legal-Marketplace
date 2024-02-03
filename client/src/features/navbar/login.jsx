import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export const LoginComponent = () => {
  const [clicked, setClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitForm = async (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Submitted:", email, password);
    setClicked(false);
  };
  return (
    <>
      <button
        className=" bg-[#3D00B7] text-white rounded-[60px] lr:mr-5 mr-2 px-6 py-0.5 lg:py-2"
        onClick={() => setClicked(true)}
      >
        Login
      </button>
      <Popup open={clicked} onClose={() => setClicked(false)} position="top">
        {(close) => (
          <div className="lg:mx-10 lg:my-6 m-6">
            <div className="flex justify-center mb-6">
              <div className="font-[500] text-xl">
                Login
              </div>
            </div>
            <form>
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
              </div>
            </form>
          </div>
        )}
      </Popup>
    </>
  );
};
