import Image from 'next/image';
import { Raleway, Syne } from 'next/font/google';
import blobAnimation from '@/assets/blobanimation.svg';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { BiLogoGithub } from 'react-icons/bi';

const raleway = Raleway({ subsets: ['latin'] });
const syne = Syne({ subsets: ['latin'], weight: '800' });

export default function Home() {
  return (
    <main
      className="relative w-screen h-screen pb-0"
    >
      <Navbar />

      <Image
        className='absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        priority
        src={blobAnimation}
        alt='blob'
      />

      <section className="text-4xl text-center grid place-items-center h-full sm:text-5xl lg:text-6xl select-none">
        <div>
          <div className='font-syne font-extrabold'>Hello World!</div>
          <div className='text-white text-2xl font-light opacity-50 lg:text-4xl mt-2 font-raleway'>Jaloliddin Makhmudov</div>
        </div>
      </section>

      <Button className='fixed right-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-5 w-[180px] '>
        <a className='flex gap-2 items-center' href="https://github.com/jmakhmudov" target='_blank'>
          <BiLogoGithub size="20" />
          Go to repository
        </a>
      </Button>
    </main>
  );
}
