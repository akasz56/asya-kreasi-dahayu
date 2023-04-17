import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pages = [
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Works", href: "/works" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-neutral-900">
      <nav
        className="mx-auto px-6 lg:px-4 max-w-screen-2xl h-24 flex items-center justify-between"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href={"/"}
            className="text-xl font-normal leading-[1.5em] tracking-wider text-white"
          >
            ASYA KREASI DAHAYU
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <ul className="flex space-x-16">
            {pages.map((item, key) => (
              <li key={key}>
                <Link
                  href={item.href}
                  className="text-xl font-normal leading-[1.5em] tracking-wider text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <Transition.Root as={Fragment} show={mobileMenuOpen}>
        <Dialog as="div" className="relative z-10" onClose={setMobileMenuOpen}>
          <div className="fixed inset-0" />
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-300"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-300"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-sm">
                    <div className="flex h-full flex-col overflow-y-scroll bg-neutral-300 py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-end">
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-neutral-300 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        <div className="flex flex-col">
                          {pages.map((item, key) => (
                            <Link
                              key={key}
                              href={item.href}
                              className="text-black text-3xl font-medium leading-[3rem] tracking-wider mb-3"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  );
}
