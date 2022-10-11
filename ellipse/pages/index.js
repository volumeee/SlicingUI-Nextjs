
import React from "react";
import Header from "../components/header";

function index() {
  return (
    <>
      <Header />
      <main className="h-screen w-screen bg-background flex">
        {/* Headline */}
        <div className="w-7/12 flex flex-row items-center px-[90px]">
          <div>
            <div>
              <p className="flex items-center text-brand font-medium text-lg">
                <span className="w-5 h-0.5 bg-brand block mr-[6px] "></span>
                Future Investment</p>
              <h3 className="mt-3 font-montserrat font-extrabold text-[60px] leading-[70px] text-text-200">
                Manage Your Finances Every Day
                <span className="text-brand ml-4">
                  Very Easily
                </span>
              </h3>
              <p className="text-text-300 text-lg mt-5">
                Manage & develop your finances well for the future to come.
                Download now on your smartphone and start managing your finances.
              </p>

            </div>
            <div className="flex space-x-[30px]">
              <a href="#">
                <img src="/images/googleplay.svg" alt="google-play" className="h-[50px] mt-10" />
              </a>
              <a href="#">
                <img src="/images/appstore.svg" alt="app-store" className="h-[50px] mt-10" />
              </a>
            </div>
          </div>
        </div>

        {/* Hero */}
        <div className="w-5/12 bg-green rounded-l-[30px]">
          
        </div>
      </main>
    </>
  );
}

export default index;