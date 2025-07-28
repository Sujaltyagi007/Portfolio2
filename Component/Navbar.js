"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Oswald } from "next/font/google";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Navbar({prop}) {
  const [IsNavbar, setIsNavbar] = useState("navbar-background1");
  const navbarRef = useRef(null);
  const navListLeftRef = useRef(null);
  const navListRightRef = useRef(null);
  const tlRef = useRef(null);
  const navitems1 = ["About", "Work", "Playground"];
  const navitems2 = ["Service", "Contact", "Resume"];
  
  const handleMouseEnter = () => {
    setIsNavbar("navbar-background2");
    const items1 = navListLeftRef.current.querySelectorAll("li");
    const items2 = navListRightRef.current.querySelectorAll("li");
    items1.forEach((item) => {
      gsap.set(item, { y: 0, opacity: 0, clearProps: "display" });
    });
    items2.forEach((item) => {
      gsap.set(item, { y: 0, opacity: 0, clearProps: "display" });
    });

    tlRef.current && tlRef.current.kill();
    const tl = gsap.timeline();
    tl.fromTo(
      items1,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.2, stagger: 0.07, ease: "power2.out" },
      0.05
    );
    tl.fromTo(
      items2,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.2, stagger: 0.07, ease: "power2.out" },
      0.05
    );
    tlRef.current = tl;
  };
  const handleMouseLeave = () => {
    setIsNavbar("navbar-background1");
    const items1 = navListLeftRef.current.querySelectorAll("li");
    const items2 = navListRightRef.current.querySelectorAll("li");
    tlRef.current && tlRef.current.kill();
    const tl = gsap.timeline();
    tl.to(
      items1,
      { y: 30, opacity: 0, duration: 0.3, stagger: 0.06, ease: "power2.in" },
      0
    );
    tl.to(
      items2,
      { y: 30, opacity: 0, duration: 0.3, stagger: 0.06, ease: "power2.in" },
      0
    );
    tl.set([items1, items2], { display: "none" });
    tlRef.current = tl;
  };
  useGSAP(() => {
    return () => {
      tlRef.current && tlRef.current.kill();
    };
  }, []);

  return (
    <div
      ref={navbarRef}
      style={{
        willChange: "transform, opacity",
        opacity: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(6px)",
      }}
      className={` ${IsNavbar} w-full fixed top-0 z-50 `}
    >
      <div
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        className="flex justify-center items-center "
      >
        <ul
          ref={navListLeftRef}
          className={`flex items-center text-white text-[2.5vh] ${
            IsNavbar == "navbar-background2"
              ? "translate-x-10"
              : " translate-x-0"
          }   `}
        >
          {navitems1.map((item, i) => (
            <li key={`left-${i}`} className="group px-8 hover:border rounded-4xl cursor-pointer">
              <div className="flex gap-4 justify-center translate-y-3 items-center group-hover:rotate-x-90 group-hover:translate-y-0 transition-all duration-400 ease-in-out">
                {item}
              </div>
              <div className=" rotate-x-90 flex gap-4 text-white justify-center items-center group-hover:-translate-y-4 group-hover:rotate-x-0 transition-all duration-400 ease-in-out">
                {item}
              </div>
            </li>
          ))}
        </ul>
        <div
          className={`text-[7vh] font-bold text-white ${oswald.className} cursor-pointer`}
        >
          <div
            onMouseEnter={() => setIsNavbar("navbar-background3")}
            onMouseLeave={() => setIsNavbar("navbar-background2")}
            className=" flex justify-center items-center gap-2 group"
          >
            <div className="flex justify-center items-center">
              <span className=" translate-x-[90px] group-hover:translate-x-0 transition-all duration-300 ease-in-out mx-0 group-hover:ml-10 ">
                S
              </span>
              <span className=" opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out -translate-x-1/4 group-hover:translate-x-0 -z-10">
                ujal
              </span>
            </div>
            <div className="flex justify-center items-center ">
              <span className="translate-x-[0px] group-hover:translate-x-0 transition-all duration-300 ease-in-out mx-0  ">
                T
              </span>
              <span className=" opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out -translate-x-1/4 group-hover:mr-8 group-hover:translate-x-0 -z-10">
                yagi
              </span>
            </div>
          </div>
        </div>
        <ul
          ref={navListRightRef}
          className={`flex items-center text-white text-[2.5vh] ${
            IsNavbar == "navbar-background2"
              ? "-translate-x-10"
              : " translate-x-0"
          } `}
        >
          {navitems2.map((item, i) => (
            <li key={`right-${i}`} className=" group hover:border px-8 rounded-4xl h-fit cursor-pointer">
              <div
               className="flex justify-center translate-y-3 items-center group-hover:rotate-x-90 group-hover:translate-y-0 transition-all duration-400 ease-in-out"
              >{item}</div>
              <div
               className=" rotate-x-90 flex text-white justify-center items-center group-hover:-translate-y-4 group-hover:rotate-x-0 transition-all duration-400 ease-in-out"
              >{item}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
