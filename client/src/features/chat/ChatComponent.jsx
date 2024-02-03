import { Navbar } from "../navbar/Navbar";
export const ChatComponent = () => {
  return (
    <>
      <Navbar></Navbar>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="messanger p-4 bg-white h-screen overflow-hidden">
        <div className="flex">
          <div className="basis-2/6 pt-3 bg-white border-r border-slate-300">
            <div className="">
              <div className="search-box h-10 text-slate-500">
                <div className="flex justify-between px-5 border-solid border-2 border-slate-400 py-1 rounded-[22px] mr-2">
                  <form className="flex justify-center items-center">
                    <i className="fa fa-search pr-2"></i>
                    <input
                      type="text"
                      name="search"
                      id="search"
                      placeholder="Search"
                      className="font-light focus:outline-none"
                    />
                  </form>
                </div>
              </div>
              <div className="user-list overflow-y-auto h-screen bg-white">
                <div className="flex hover:bg-slate-100 transition px-5 py-3 hover:cursor-pointer border-solid border-b-2">
                  <div className="pr-4">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
                      width="50"
                      alt="img"
                    />
                  </div>
                  <div>
                    <h3 className="text-violet-500 tex-md">Lupe Fiasco</h3>
                    <p className="text-sm text-gray-400 font-light overflow-hidden h-5">
                      I got two ticket to go see the awesome
                    </p>
                  </div>
                </div>
                <div className="flex hover:bg-slate-100 transition px-5 py-3 hover:cursor-pointer border-solid border-b-2">
                  <div className="pr-4">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
                      width="50"
                      alt="img"
                    />
                  </div>
                  <div>
                    <h3 className="text-violet-500 tex-md">Lupe Fiasco</h3>
                    <p className="text-sm text-gray-400 font-light overflow-hidden h-5">
                      I got two ticket to go see the awesome
                    </p>
                  </div>
                </div>
                <div className="flex hover:bg-slate-100 transition px-5 py-3 hover:cursor-pointer border-solid border-b-2">
                  <div className="pr-4">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
                      width="50"
                      alt="img"
                    />
                  </div>
                  <div>
                    <h3 className="text-violet-500 tex-md">Lupe Fiasco</h3>
                    <p className="text-sm text-gray-400 font-light overflow-hidden h-5">
                      I got two ticket to go see the awesome
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="basis-4/6">
            <div className="">
              <div className="bg-white user-info-header px-5 py-3">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
                      width="40"
                      alt="img"
                    />
                    <h3 className="text-gray-500 tex-md pl-4">Lupe Fiasco</h3>
                  </div>
                </div>
              </div>
              <div className="message-area mt-4 px-4">
                <div className="relative receive-chat flex justify-start">
                  <div className="px-5 mb-2 bg-violet-400 text-white py-2 text-sm max-w-[80%] rounded font-light">
                    <i className="fa fa-caret-up text-violet-400 -top-2 absolute"></i>
                    <p>
                      I got two tickets to go to see this awesome band called,
                      Lorem ipsum dollar !! Do you want to come ?
                    </p>
                  </div>
                </div>
                <div className="send-chat flex justify-end">
                  <div className="px-5 mb-2 bg-violet-200 text-slate-600 py-2 text-sm max-w-[80%] rounded font-light">
                    <p>
                      I got two tickets to go to see this awesome band called,
                      Lorem ipsum dollar !! Do you want to come ?
                    </p>
                  </div>
                </div>
                <div className="receive-chat flex justify-start">
                  <div className="px-5 mb-2 bg-violet-400 text-white py-2 text-sm max-w-[80%] rounded font-light">
                    <p>
                      I got two tickets to go to see this awesome band called,
                      Lorem ipsum dollar !! Do you want to come ?
                    </p>
                  </div>
                </div>
                <div className="relative send-chat flex justify-end">
                  <div className="px-5 mb-2 bg-violet-200 text-slate-600 py-2 text-sm max-w-[80%] rounded font-light">
                    <p>
                      I got two tickets to go to see this awesome band called,
                      Lorem ipsum dollar !! Do you want to come ?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 fixed bottom-0 w-full pl-4">
                <textarea
                  className="w-full bg-gray-100 pt-3 h-12 focus:outline-none font-light"
                  placeholder="Write a message"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
