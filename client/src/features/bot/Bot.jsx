import React, { useEffect, useRef, useState } from "react";
import { Navbar } from "../navbar/Navbar";
import axios from "axios";

import { FooterComponent } from "../footer/footer";

export function Bot() {
  const [input, setInput] = useState("");
  const [chats, setChats] = useState([
    { message: "Hi, How can I help you?", author: "bot" },
  ]);
  const [loading, setLoading] = useState(false);
  const [inputEnabled, setInputEnabled] = useState(true);

  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chats]);

  const handleSubmit = () => {
    if (!inputEnabled) return;

    if (input === "") {
      return;
    }

    setChats([...chats, { message: input, author: "user" }]);
    setLoading(true);
    setInputEnabled(false);

    console.log({ msg: input, chats: chats });

    axios
      .post("http://localhost:5000/", {
        msg: input,
        chats: chats,
      })
      .then((res) => {
        console.log(res.data);
        setChats([
          ...chats,
          { message: JSON.stringify(res.data), author: "bot" },
        ]);
        setInput("");
        setLoading(false);
        setInputEnabled(true);
        inputRef.current?.focus();
      })
      .catch((err) => {
        console.log(err);
        setChats([
          ...chats,
          {
            message: "Sorry, I didn't get that. Please try again.",
          },
        ]);
        setInput("");
        setLoading(false);
        setInputEnabled(true);
        inputRef.current?.focus();
      });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    if (chats.length > 0 && inputRef.current) {
      inputRef.current.focus();
    }
  }, [chats]);
  const display_clients = (message) => {
    // string to json
    const json = JSON.parse(message);
    // disply this json as table {
    //     "Name": "Anushka",
    //     "AOR_Code": "AOR002",
    //     "Court": "South East Delhi",
    //     "Stakeholder_Type": "Individual",
    //     "Type_of_Lawyer": "criminal lawyer",
    //     "Stars": 5,
    //     "Type_of_Court": "district court",
    //     "location": "Delhi",
    //     "consultation_fee": 456969,
    //     "Location": "delhi"
    //   } having this values
    return (
      <table className="table-auto">
        <thead>
          <tr className="text-left border-b">
            <th className="pr-2">Name</th>
            <th className="pr-2">AOR_Code</th>
            <th className="pr-2">Court</th>
            <th className="pr-2">Stakeholder_Type</th>
            <th className="pr-2">Type_of_Lawyer</th>
            <th className="pr-2">Stars</th>
            <th className="pr-2">Type_of_Court</th>
            <th className="pr-2">location</th>
            <th className="pr-2">consultation_fee</th>
            <th className="pr-2">Location</th>
          </tr>
        </thead>
        <tbody>
          {json.map((item) => (
            <tr key={item.AOR_Code}>
              <td>{item.Name}</td>
              <td>{item.AOR_Code}</td>
              <td>{item.Court}</td>
              <td>{item.Stakeholder_Type}</td>
              <td>{item.Type_of_Lawyer}</td>
              <td>{item.Stars}</td>
              <td>{item.Type_of_Court}</td>
              <td>{item.location}</td>
              <td>{item.consultation_fee}</td>
              <td>{item.Location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-8  items-center min-h-[70vh]">
        <div className="flex flex-col items-center justify-center mb-2">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#00CDFA] to-[#FF76DF]">
            E-Vakil Bot
          </h1>
          <p>Your personalised AI-powered chatbot for all your legal needs</p>

          <div className="flex gap-4 mt-12 h-[30vh]">
            <div className="flex flex-col gap-y-4 w-[30vw] p-4">
              <div className="flex items-center gap-x-2">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.86642 20.3861H4.67579C4.47688 20.3861 4.28612 20.3071 4.14546 20.1664C4.00481 20.0258 3.92579 19.835 3.92579 19.6361V15.4455C3.92545 15.3481 3.94432 15.2516 3.98132 15.1615C4.01832 15.0714 4.07273 14.9895 4.14142 14.9205L15.3914 3.67052C15.4612 3.59966 15.5444 3.54338 15.6361 3.50497C15.7279 3.46656 15.8263 3.44678 15.9258 3.44678C16.0253 3.44678 16.1237 3.46656 16.2155 3.50497C16.3072 3.54338 16.3904 3.59966 16.4602 3.67052L20.6414 7.85177C20.7123 7.92156 20.7686 8.00474 20.807 8.09649C20.8454 8.18823 20.8652 8.28669 20.8652 8.38615C20.8652 8.48561 20.8454 8.58407 20.807 8.67581C20.7686 8.76755 20.7123 8.85074 20.6414 8.92052L9.39142 20.1705C9.32239 20.2392 9.24048 20.2936 9.15039 20.3306C9.06031 20.3676 8.96381 20.3865 8.86642 20.3861Z"
                    stroke="#705CF6"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.9258 6.13623L18.1758 11.3862"
                    stroke="#705CF6"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <h1 className="font-bold text-lg">
                  Give a brief description about your case
                </h1>
              </div>
              <p className="border border-zinc-300 rounded-lg p-4 font-[#111827] text-sm">
                "My friend murdered my father because he was not able to pay the
                loan of rs 5 lakhs. I reside in Tees hazari district. Suggest me
                a lawyer in the consultation fee range 3000-5000."
              </p>
            </div>
            <div className="flex flex-col gap-y-4 w-[30vw] p-4">
              <div className="flex items-center gap-x-2">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.439 2.9521L9.8553 5.53586C9.57411 5.81704 9.57411 6.27292 9.8553 6.5541L12.4371 9.13596C12.7183 9.41713 13.1742 9.41713 13.4554 9.13596L16.0391 6.55219C16.3203 6.27101 16.3203 5.81514 16.0391 5.53395L13.4573 2.9521C13.1761 2.67091 12.7202 2.67091 12.439 2.9521Z"
                    stroke="#705CF6"
                    stroke-width="1.536"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.1999 8.71186L15.6162 11.2956C15.335 11.5768 15.335 12.0327 15.6162 12.3139L18.198 14.8957C18.4792 15.1769 18.9351 15.1769 19.2162 14.8957L21.8 12.312C22.0812 12.0308 22.0812 11.5749 21.8 11.2937L19.2181 8.71186C18.9369 8.43068 18.4811 8.43068 18.1999 8.71186Z"
                    stroke="#705CF6"
                    stroke-width="1.536"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.67905 8.70356L4.09529 11.2873C3.8141 11.5685 3.8141 12.0244 4.09529 12.3056L6.67714 14.8874C6.95832 15.1686 7.4142 15.1686 7.69537 14.8874L10.2791 12.3037C10.5603 12.0225 10.5603 11.5666 10.2791 11.2854L7.69728 8.70356C7.41611 8.42238 6.96022 8.42238 6.67905 8.70356Z"
                    stroke="#705CF6"
                    stroke-width="1.536"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.4399 14.4633L9.85614 17.0471C9.57497 17.3283 9.57497 17.7842 9.85614 18.0653L12.438 20.6472C12.7192 20.9284 13.1751 20.9284 13.4562 20.6472L16.04 18.0634C16.3212 17.7822 16.3212 17.3263 16.04 17.0452L13.4581 14.4633C13.1769 14.1821 12.7211 14.1821 12.4399 14.4633Z"
                    stroke="#705CF6"
                    stroke-width="1.536"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <h1 className="font-bold text-lg">
                  Get easy to understand summaries of your docs
                </h1>
              </div>
              <p className="border border-zinc-300 rounded-lg p-4 font-[#111827] text-sm">
                "A client has sent me an NDA but I am having a hard time
                understanding it. Summarise this NDA for me in simple points"
              </p>
            </div>
          </div>
        </div>
        <div className="flex mt-8 h-[40vh] w-[80vw] overflow-y-scroll rounded-lg bg-[##E9E9FE]">
          <div ref={chatContainerRef} className="w-full p-4">
            {chats.map((chat, index) => (
              <div key={index} className="flex items-center">
                {chat.author === "bot" ? (
                  <div className="mr-2 rounded-full border border-stone-300 p-2">
                    {/* <BotIcon size={21} /> */}
                  </div>
                ) : (
                  <div className="mr-2 rounded-full border border-stone-200 p-2">
                    {/* <User2 size={21} /> */}
                  </div>
                )}
                <div className="mb-2 inline-flex w-full items-center p-4">
                  <span
                    className={`${
                      chat.author === "user" ? "text-gray-400" : "text-gray-500"
                    } inline-block w-full rounded-lg text-base
                font-medium`}
                  >
                    {chat.author === "bot" && chat.message[0] !== "H"
                      ? display_clients(chat.message)
                      : chat.message}
                  </span>
                </div>
              </div>
            ))}

            {loading && (
              <div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity }}
                className="ml-2 mt-2 flex h-4 w-4 animate-spin items-start rounded-full ring-gray-400"
              >
                <div className="h-2 w-2 rounded-full bg-gray-400"></div>
              </div>
            )}

            {inputEnabled && (
              <div className="mt-2 flex items-center rounded-lg border p-4">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(event) =>
                    setInput(
                      event.target.value.charAt(0).toUpperCase() +
                        event.target.value.slice(1)
                    )
                  }
                  onKeyDown={handleKeyDown}
                  className="w-full bg-transparent text-base font-medium text-gray-400 outline-none placeholder:text-gray-400"
                  placeholder="Type your message here..."
                />
                <button
                  type="submit"
                  size={21}
                  className="mr-4"
                  onClick={handleSubmit}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </>
  );
}
