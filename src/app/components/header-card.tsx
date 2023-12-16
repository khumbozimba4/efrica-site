'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HeaderCard = () => {
  const router = useRouter();

    return (
      <div className="flex flex-col w-full">
        <div className="flex relative bg-blue-500 w-full p-4 flex-row gap-[20px] items-center justify-end">
        <div className="text-base font-medium text-white">
          Email
        </div>
        <Link href="/contacts" className="text-base font-medium text-white mr-8">
          Contacts Us
        </Link>
        </div>

      <div className="w-full bg-white overflow-hidden gap-[40px] flex flex-row items-center justify-center text-xl">
      <Image
      onClick={()=>{
        router.push('/');

      }}
          className="h-[100px] w-[150px] hover:cursor-pointer"
          alt=""
          src="/rectangle-23@2x.png"
          width={100}
          height={100}
        />
          <Link href="/services" className="font-medium hover:cursor-pointer">
            Services
          </Link>
          <Link href="/industry" className="font-medium hover:cursor-pointer">
            Industries
          </Link>
          <Link href="/company" className="font-medium hover:cursor-pointer">
            Company
          </Link>
          <Link href="/technology" className="font-medium hover:cursor-pointer">
            Technologies
          </Link>
          <Link href="/solutions" className="font-medium  hover:cursor-pointer">
            Solutions
          </Link>
          <Link href="/blog" className="font-medium  hover:cursor-pointer">
            Blogs
          </Link>
        </div>
        </div>
    );
  };
  
  export default HeaderCard;