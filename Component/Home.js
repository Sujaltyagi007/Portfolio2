import { Oswald } from "next/font/google";
import CustomBtn from "./CustomBtn";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <section className=" relative font-custom flex flex-col items-center bg-amber-300 justify-center h-dvh">
      <div className="font-custom flex flex-col items-center justify-center leading-35 h-[80vh] ">
        <div
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(237, 237, 237, 0) 10%, rgb(237, 237, 237) 60%)",
          }}
          className=" text-[10vh] bg-clip-text text-transparent"
        >
          Hello,I'm
        </div>
        <div
          className={` text-[25vh] font-bold text-white ${oswald.className} `}
        >
          Sujal Tyagi
        </div>
      </div>
      <div className=" text-[3vh] text-center w-1/2 h-[15vh] ">
        Transforming ideas into robust solutions, optimizing user experiences,
        and delivering impactful code.
      </div>
      <CustomBtn />
    </section>
  );
}
