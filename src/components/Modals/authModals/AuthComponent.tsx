"use client";

import React from "react";

import LoginComponent from "./LoginComponent";
import SignupComponent from "./SignupComponent";
import { useGlobalContext } from "@/context";
import { VscClose } from "react-icons/vsc";
import { Button } from "@/components";

export default function AuthComponent() {
  const { authClick, setAuthClick, loginBtn, setLoginBtn } = useGlobalContext();

  return (
    <div
      className={`${
        authClick ? "scale-100 opacity-100 z-[200000]" : "scale-0 opacity-0"
      } overflow-hidden font-rubik fixed top-0 left-0 flex flex-row-reverse items-center justify-center bg-black bg-opacity-30 w-screen h-screen`}
    >
      <div
        className={`${
          authClick ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } relative w-[98%] max-w-[420px] sm:max-w-[500px] max-h-[90vh] xs:max-h-[85vh] overflow-hidden overflow-y-auto py-4 px-[6px] xs:px-2 rounded bg-purple-50 text-slate-800 transition-custom duration-[400ms] flex flex-col gap-5`}
      >
        <header className="flex self-center font-serif h-[35px] xs:h-10 sm:h-12 w-full sm:w-[95%] border-b rounded-bl-md">
          <Button
            onClick={() => setLoginBtn(true)}
            className={`${
              loginBtn ? "auth-btn-active" : ""
            } justify-center auth-btn rounded-r-none font-serif`}
          >
            Login
          </Button>

          <Button
            onClick={() => setLoginBtn(false)}
            className={`${
              !loginBtn ? "auth-btn-active" : ""
            } justify-center auth-btn rounded-l-none font-serif`}
          >
            Signup
          </Button>
        </header>

        <aside className="w-full sm:w-[95%] h-fit">
          <div className="flex items-center h-fit overflow-hidden">
            <div
              className={`${
                loginBtn ? "translate-x-0" : "-translate-x-full"
              } login-container transition-custom`}
            >
              <LoginComponent />
            </div>

            <div
              className={`${
                loginBtn ? "translate-x-0" : "-translate-x-full"
              } login-container transition-custom`}
            >
              <SignupComponent />
            </div>
          </div>
        </aside>

        <VscClose
          onClick={() => setAuthClick(false)}
          className="cursor-pointer p-1 text-xl xs:text-2xl font-bold border hover:border-red-600 hover:text-red-600 rounded-full absolute right-3 top-4 transition-custom"
        />
      </div>
    </div>
  );
}
