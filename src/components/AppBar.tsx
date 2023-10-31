import { Search } from "./Search";

export const AppBar = () => {
  return (
    <div className="flex justify-between items-center mx-8 h-20">
      <div>YouTube</div>
      <div className="w-1/2 sm:w-2/3 md:w-3/5 lg:w-1/2">
        <Search />
      </div>
      <div>SignIn</div>
    </div>
  );
};
