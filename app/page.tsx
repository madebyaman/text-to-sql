'use client';

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header className="bg-white p-2">
        <div className="flex lg:flex-1 items-center justify-center">
          <a href="#" className="m-1.5">
            <span className="sr-only">Text to SQL Agent</span>
            <p>Logo</p>
          </a>
          <h1 className="text-black font-bold">Text to SQL Agent</h1>
        </div>
      </header>

      <div className="flex flex-col h-full">
        {/* {messages.length > 0 &&
          messages.map((message, index) => {
            if (message instanceof HumanMessage) {
              return ( */}
        <div
          // key={message.getType() + index}
          className="col-start-1 col-end-8 p-3 rounded-lg"
        >
          <div className="flex flex-row items-center">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-400 text-white flex-shrink-0 text-sm">
              Me
            </div>
            <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
              <div>Tell me a joke about SQL</div>
            </div>
          </div>
        </div>
        {/* );
            } */}

        {/* if (message instanceof AIMessage) {
              return ( */}
        <div
          // key={message.getType() + index}
          className="col-start-6 col-end-13 p-3 rounded-lg"
        >
          <div className="flex items-center justify-start flex-row-reverse">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-400 flex-shrink-0 text-sm">
              AI
            </div>
            <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
              {/* <div>{message.content as string}</div> */}
              <div>
                A couple of relational databases walk into a bar. They left
                because they couldn't find a table there
              </div>
            </div>
          </div>
        </div>
        {/* );
            }
          })} */}
      </div>

      <div className="flex flex-col flex-auto justify-between bg-gray-100 p-6">
        <div className="top-[100vh] flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
          <div className="flex-grow ml-4">
            <div className="relative w-full">
              <input
                type="text"
                // disabled={isLoading}
                // value={inputMessage}
                // onChange={(e) => setInputMessage(e.target.value)}
                // onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
              />
            </div>
          </div>
          <div className="ml-4">
            <button
              // onClick={sendMessage}
              className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-2 flex-shrink-0"
            >
              {/* <span>{isLoading ? 'Loading...' : 'Send'}</span> */}
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
