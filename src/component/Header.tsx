import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, useScroll } from "framer-motion";

export default function Header() {
  const router = useRouter();

  const { scrollY } = useScroll();
  const [show, setShow] = useState(true);

  useEffect(() => {
    let previous = scrollY.get();

    const handleChangeScroll = (latest: number) => {
      if (latest > previous) {
        setShow(false);
        previous = latest;
      } else {
        setShow(true);
        previous = latest;
      }
    };

    const unsubScroll = scrollY.on("change", handleChangeScroll);

    return () => {
      unsubScroll();
    };
  }, [scrollY]);

  const pages = [
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Works", href: "/works" },
    { title: "Product", href: "/product" },
    { title: "Contact", href: "/contact" },
  ];

  const variants = {
    visible: { y: 0 },
    hidden: { y: "-100%" },
  };

  return (
    <motion.div
      initial="hidden"
      animate={show ? "visible" : "hidden"}
      variants={variants}
      transition={{ ease: "easeOut" }}
      className="sticky top-0 w-full z-10 bg-asya-light"
    >
      <nav className="container flex mx-auto py-6">
        <Link
          href={"/"}
          className="flex-1 uppercase text-asya-dark text-lg font-medium tracking-widest"
        >
          Asya Kreasi Dahayu
        </Link>
        <ul className="grid grid-cols-5 w-1/2">
          {pages.map((item, key) => (
            <li
              key={key}
              className="text-center text-asya-dark text-lg font-medium tracking-widest"
            >
              <Link
                href={item.href}
                className={
                  router.pathname.startsWith(item.href)
                    ? "underline underline-offset-4"
                    : ""
                }
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
}
