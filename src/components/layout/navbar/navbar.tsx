import Link from "next/link";
import MobileMenu from "./mobilemenu";
import Search from "./search";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="hidden lg:block">
          <Search />
        </div>
        <div className="text-xl font-semibold lg:font-semibold lg:text-3xl">
          BUSINESSLY
        </div>
        <div className="hidden lg:block px-5 py-3 border-2 border-slate-950">
          Subscribe
        </div>

        <div className="flex lg:hidden items-center">
          <MobileMenu />
        </div>
      </div>

      <div className="hidden lg:flex justify-center gap-12 text-slate-600 mt-5">
        <Link href={"/"}>
          <span className="text-slate-950">Home</span>
        </Link>
        <Link href={"/stockmarket"}>
          <span>Stock</span>
        </Link>
        <Link href={"/tecnology"}>
          <span>Tecnology</span>
        </Link>
        <Link href={"/politics"}>
          <span>Politics</span>
        </Link>
        <Link href={"/automobile"}>
          <span>Automobile</span>
        </Link>
        <Link href={"/health"}>
          <span>Health</span>
        </Link>
        <Link href={"/interactivesession"}>
          <span> Sessions</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
