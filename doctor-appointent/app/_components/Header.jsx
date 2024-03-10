import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import  Link  from "next/link";
function Header() {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore ",
      path: "/Explore",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/Contact Us",
    },
  ];
  return (
    <div className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="logo"  width={1} height={1} />
        <ul className="flex gap-8">
          {Menu.map((item, index) => (
            <Link href={item.path}>
            <li className="hover:text-blue-700 cursor-pointer hover:scale-105 transition-all ease-in-out">
              {item.name}
            </li>
            </Link>
          ))}
        </ul>
      </div>
      <Button> Don't Push Me </Button>
    </div>
  );
}

export default Header;
