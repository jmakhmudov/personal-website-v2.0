import logo from '@/assets/JM.svg';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import '@/styles/components.css'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState<string>('-top-full');
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpened(!isOpened);
        if (menuOpen === '-top-full') {
            setMenuOpen('top-0');
        } else {
            setMenuOpen('-top-full')
        }
    };

    return (
        <nav className=''>

            <section className=' absolute top-0 left-0 right-0 flex justify-between align-middle py-4 px-3 lg:px-20 z-10'>
                <Link href="/">
                    <Image
                        priority
                        src={logo}
                        alt='logo'
                    />
                </Link>

                <button
                    className={`menu ${isOpened ? 'opened' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Main Menu"
                    aria-expanded={isOpened}
                >
                    <svg width="50" height="50" viewBox="0 0 100 100">
                        <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                        <path className="line line2" d="M 20,50 H 80" />
                        <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                    </svg>
                </button>
            </section>

            <section className={`bg-black bg-opacity-50 backdrop-blur-3xl absolute ${menuOpen} h-screen w-screen duration-1000 grid place-items-center`}>
                <ul className='font-syne text-center text-2xl flex flex-col lg:flex-row gap-10 lg:gap-40 cursor-pointer sm:text-4xl lg:text-5xl'>
                    <li className='hover:opacity-60 transition-opacity duration-500'>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li className='hover:opacity-60 transition-opacity duration-500'>
                        <Link href="/work">
                            Work
                        </Link>
                    </li>
                    <li className='hover:opacity-60 transition-opacity duration-500'>
                        <Link href="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </section>

        </nav>
    );
}

export default Navbar;