'use client'
import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Oswald } from 'next/font/google'

const oswald = Oswald({
    subsets: ['latin'],
    weight: '400',
})
const navitems = ['About', 'Work', 'Playground']

export default function Navbar() {
    const [IsNavbar,setIsNavbar] = useState('navbar-background2')
    const navbarRef = useRef(null)
    const navListLeftRef = useRef(null)
    const navListRightRef = useRef(null)
    const tlRef = useRef(null)
    const handleMouseEnter = () => {
        setIsNavbar('navbar-background2')
        const items1 = navListLeftRef.current.querySelectorAll('li')
        const items2 = navListRightRef.current.querySelectorAll('li')
        items1.forEach(item => {
            gsap.set(item, { y: 0, opacity: 1, clearProps: 'display' })
        })
        items2.forEach(item => {
            gsap.set(item, { y: 0, opacity: 1, clearProps: 'display' })
        })

        tlRef.current && tlRef.current.kill();
        const tl = gsap.timeline()
        tl.fromTo(items1,
            { y: -60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, stagger: 0.07, ease: 'power2.out' },
            0.05
        )
        tl.fromTo(items2,
            { y: -60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, stagger: 0.07, ease: 'power2.out' },
            0.2
        )
        tlRef.current = tl;
    }
    const handleMouseLeave = () => {
        setIsNavbar('navbar-background1')
        const items1 = navListLeftRef.current.querySelectorAll('li')
        const items2 = navListRightRef.current.querySelectorAll('li')
        tlRef.current && tlRef.current.kill();
        const tl = gsap.timeline()
        tl.to(items1,
            { y: 30, opacity: 0, duration: 0.3, stagger: 0.06, ease: 'power2.in' },
            0
        )
        tl.to(items2,
            { y: 30, opacity: 0, duration: 0.3, stagger: 0.06, ease: 'power2.in' },
            0
        )
        tl.set([items1, items2], { display: 'none' });
        tlRef.current = tl;
    }
    useGSAP(() => {
        return () => {
            tlRef.current && tlRef.current.kill();
        }
    }, [])

    return (
        <div
            ref={navbarRef}
            style={{
                willChange: 'transform, opacity',
                opacity: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(10px)',
            }}
            className={` ${IsNavbar} w-full absolute top-0 h-fit  `}
        >
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="group flex justify-center items-center"
            >
                <ul ref={navListLeftRef} className="flex items-center text-white text-[2.5vh]">
                    {navitems.map((item, i) => (
                        <li key={`left-${i}`} className="mx-4  cursor-pointer">{item}</li>
                    ))}
                </ul>
                <span className={`text-[6vh] text-white ${oswald.className} cursor-pointer`}>
                    ST
                </span>
                <ul ref={navListRightRef} className="flex items-center text-white text-[2.5vh]">
                    {navitems.map((item, i) => (
                        <li key={`right-${i}`} className="mx-4 cursor-pointer">{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
