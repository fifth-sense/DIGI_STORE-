import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { ShoppingBagIcon } from "lucide-react";

const Header = () => {
  const menuList = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "Store",
      path: "/store",
    },
    {
      name: "Explore",
      path: "/explore",
    },
  ];
  return (
    <div
      className="flex p-4 px-10 md:px-32 lg:px-48 bg-primary border-b-4 border-black 
        justify-between item-center"
    >
      <h2 className="font-bold text-lg bg-black text-white p-1 px-2">
        DIGI STORE
      </h2>
      <ul className="hidden md:flex gap-5">
        {menuList?.map((item, index) => {
          return (
            <li
              className="px-2 p-1 cursor:pointer hover:border-2 font-bold"
              key={index}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
      <div className="flex gap-5 item-center">
        <ShoppingBagIcon />
        <Button className="bg-red-500 hover:bg-red-600 text-white p-2 px-4 rounded-md ">
          Start selling
        </Button>
        <UserButton/>
      </div>
    </div>
  );
};

export default Header;
