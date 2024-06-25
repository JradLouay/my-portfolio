"use client";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useState } from "react";
import ActiveLinkStyle from "./ActiveLinkStyle";

function MobileMenu() {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={open} className="block lg:hidden hover:cursor-pointer">
        <svg
          width="36"
          height="26"
          viewBox="0 0 36 26"
          className="stroke-black fill-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.5"
            y1="1.5"
            x2="34.4375"
            y2="1.5"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="8.6875"
            y1="13"
            x2="34.4375"
            y2="13"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="15.875"
            y1="24.5"
            x2="34.4375"
            y2="24.5"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full bg-white pt-14 items-start justify-center px-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full grid gap-7 items-center">
                  <div className="justify-self-end">
                    <button
                      className="p-2 flex justify-center items-center rounded-sm hover:bg-violet-100"
                      onClick={close}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="stroke-black fill-none"
                      >
                        <line
                          x1="1.41421"
                          y1="1"
                          x2="23"
                          y2="22.5858"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <line
                          x1="1"
                          y1="22.5858"
                          x2="22.5858"
                          y2="1"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <nav className="flex flex-col gap-4 w-fit">
                    <ActiveLinkStyle
                      href={"/"}
                      className=" text-black text-[64px] font-bold"
                      onClick={close}
                    >
                      HOME
                    </ActiveLinkStyle>
                    <ActiveLinkStyle
                      href={"/about"}
                      className=" text-black text-[64px] font-bold"
                      onClick={close}
                    >
                      ABOUT
                    </ActiveLinkStyle>
                    <ActiveLinkStyle
                      href={"/work"}
                      className="  text-black text-[64px] font-bold"
                      onClick={close}
                    >
                      WORK
                    </ActiveLinkStyle>
                    <ActiveLinkStyle
                      href={"/contact"}
                      className=" text-black text-[64px] font-bold"
                      onClick={close}
                    >
                      CONTACT
                    </ActiveLinkStyle>
                  </nav>
                  <div className="">
                    <div className=" text-black text-2xl font-semibold">
                      jrad.louay@gmail.com
                    </div>
                    <div className=" text-black text-2xl font-semibold">
                      +216 25 422 636
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
export default MobileMenu;
