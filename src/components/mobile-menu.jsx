"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import ActiveLinkStyle from "./active-link-style";
import LinkHoverEffect from "./link-hover-effect";
import ContactsComponent from "./contacts";
import burgerImage from "../../public/icon-hamburger.svg";
import iconClose from "../../public/icon-close.svg";

function MobileMenu() {
  let [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <button onClick={toggle} className="block hover:cursor-pointer lg:hidden">
        <Image src={burgerImage} alt="burger icon" />
      </button>

      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={toggle}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-start justify-center bg-light-cream px-4 pb-14 pt-10">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="grid w-full items-center gap-7">
                  <div className="justify-self-end">
                    <button
                      className="flex items-center justify-center rounded-sm p-2 hover:bg-violet-100"
                      onClick={toggle}
                    >
                      <Image src={iconClose} alt="close icon" />
                    </button>
                  </div>
                  <nav className="flex w-fit flex-col gap-4">
                    <ActiveLinkStyle
                      href={"/"}
                      className="text-[64px] font-bold text-gray-700"
                      onClick={toggle}
                    >
                      HOME
                    </ActiveLinkStyle>
                    <ActiveLinkStyle
                      href={"/work"}
                      className="text-[64px] font-bold text-gray-700"
                      onClick={toggle}
                    >
                      WORK
                    </ActiveLinkStyle>
                    <ActiveLinkStyle
                      href={"/contact"}
                      className="text-[64px] font-bold text-gray-700"
                      onClick={toggle}
                    >
                      CONTACT
                    </ActiveLinkStyle>
                  </nav>
                  <div className="flex flex-col gap-6">
                    <LinkHoverEffect href={"mailto:jrad.louay@gmail.com"}>
                      jrad.louay@gmail.com
                    </LinkHoverEffect>
                    <ContactsComponent />
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
