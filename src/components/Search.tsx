import { MagnifyingGlass } from "phosphor-react";

export const Search = () => {
  return (
    <form>
      <div className="flex">
        <input
          autoComplete="off"
          className="w-full p-3 pl-10 text-normal bg-transparent border border-gray-100 rounded-full"
          placeholder="Search ..."
        />
        <button>
          <MagnifyingGlass size={27} className="text-white -ml-10" />
        </button>
      </div>
    </form>
  );
};
