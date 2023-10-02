import Link from "next/link";
import { auth } from "@clerk/nextjs";
const Header = () => {
  const { userId } = auth();
  console.log(userId);
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
              <Link href='sign-in'>Sign In</Link>
            </div>

            <div className=' text-gray-300 hover:text-white  mr-4'>
              <Link href='sign-up'>Sign Up</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
