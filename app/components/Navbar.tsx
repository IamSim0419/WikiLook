
import Link from "next/link";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="bg-green-500 p-4 flex justify-between flex-col md:flex-row sticky top-0">
      <h1 className="text-3xl font-bold text-slate-50 grid place-content-center md:mb-0 mb-2
       [text-shadow:_2px_2px_4px_rgb(0_0_0_/_40%)]">
        <Link href="/">
          <span className="text-yellow-400">Wiki</span>Look
          <span className="animate-pulse text-gray-200">!</span>
        </Link>
      </h1>
      <Search />
    </nav>
  );
};

export default Navbar;




