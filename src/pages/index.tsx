import Image from 'next/image';
import { Raleway, Syne } from 'next/font/google';
import blobAnimation from '@/assets/blobanimation.svg';
import Navbar from '@/components/Navbar';

const inter = Raleway({ subsets: ['latin'] });
const syne = Syne({ subsets: ['latin'], weight: '800' });

export default function Home() {
  return (
    <main
      className={`${inter.className} relative w-screen h-screen`}
    >
      <Navbar />

      <Image
        className='absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        priority
        src={blobAnimation}
        alt='blob'
      />

      <section className={`${syne.className} text-4xl text-center grid place-items-center h-full sm:text-5xl lg:text-6xl`}>
        <div>
          <h1>Frontend Developer</h1>
          <p className='text-lg sm:text-xl lg:text-4xl'>UI/UX Designer</p>
        </div>
      </section>
    </main>
  );
}
