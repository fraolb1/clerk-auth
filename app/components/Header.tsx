import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";
import { useId } from "react";
const Header = () => {
  const { userId } = auth();
  return (
    <>
      <nav className=' bg-blue-700 py-4 flex justify-between items-center px-10 mb-5'>
        <div className='flex items-center'>
          <Link href='/'>
            <div className=' text-lg uppercase font-bold text-white'>
              Clerk App
            </div>
          </Link>
        </div>
        {!userId && (
          <div className='flex space-x-5'>
            <div className=' text-gray-300 hover:text-white mr-4 '>
              <Link href='login'>Sign In</Link>
            </div>

            <div className=' text-gray-300 hover:text-white  mr-4'>
              <Link href='register'>Sign Up</Link>
            </div>
          </div>
        )}
        {userId && (
          <>
            <Link href='profile' className=' text-gray-300 hover:text-white'>
              Profile
            </Link>
            <UserButton />
          </>
        )}
      </nav>
    </>
  );
};

export default Header;
