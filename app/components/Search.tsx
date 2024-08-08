
"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    //It won't reload the page when submitted
    e.preventDefault();

    //Back to empty after submitting the current search
    setSearch("");

    //Routes the location of the results
    //Pushes to the web address
    router.push(`/${search}/`);
  };

  return (
    <form
      className="w-50 flex justify-center md:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-slate-50 p-2 px-4 w-80 text-xl rounded-xl"
        placeholder="Search"
      />
      <button className="px-4 text-xl rounded-xl bg-slate-300 ml-2 
        font-semibold hover:opacity-90 active:opacity-75">
        Search
      </button>
    </form>
  );
};

export default Search;






