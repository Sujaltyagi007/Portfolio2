import { Satisfy } from "next/font/google"
const satisfy = Satisfy({
  subsets: ['latin'],
  weight: '400',
})

export default function Home() {
  return (
    <section className=" font-custom flex flex-col items-center bg-amber-500 justify-center h-dvh">
      <div
        style={{
          backgroundImage: 'linear-gradient(0deg, rgba(237, 237, 237, 0) 10%, rgb(237, 237, 237) 80%)',
        }}
        className='font-custom flex flex-col items-center justify-center text-[10vh] bg-clip-text text-transparent '>
        Hello,I'm
      </div>
      <div className={` text-[20vh] text-white ${satisfy.className} `}>
        Sujal Tyagi
      </div>
    </section>
  )
}
