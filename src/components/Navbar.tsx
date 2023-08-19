import logo from '@/assets/JM.svg';
import Image from 'next/image';

const Navbar = () => {

    return (
        <nav className=' flex justify-between align-middle p-4 lg:px-20'>
            <Image 
                priority
                src={logo}
                alt='logo'
            />

            Menu
        </nav>
    );
}

export default Navbar;