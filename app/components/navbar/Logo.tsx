"use client"
import Image from "next/image";
import {useRouter} from "next/navigation";

const Logo = () => {
  return (
    <div>
        <Image src="/image/dummy_logo.jpg" alt="logo" className="hidden md:block cursor-pointer" height="50" width="50"/>
    </div>
  )
}

export default Logo