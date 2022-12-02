import { v4 as uuid } from "uuid";
import { Search } from "../Search/Search";

const Trends = [
  "Platzi",
  "Binance",
  "Colombia",
  "Qatar",
  "Mundial",
  "Argentina",
];

export const Trending = () => {
  return (
    <div className="w-[22rem] flex flex-col gap-3 max-lg:hidden">
      <div className="sticky top-0 h-14 flex items-center bg-white">
        <Search />
      </div>
      <div className="bg-slate-100 rounded-xl flex flex-col gap-4 overflow-hidden">
        <h2 className="text-xl font-bold px-4 pt-4">Trends for you</h2>
        <ul>
          {Trends.map((i) => (
            <li key={uuid()} className="hover:bg-slate-300">
              <a className="flex flex-col p-4" href="#">
                <span className="text-xs">Trending in Global</span>
                <p className="font-semibold">{i}</p>
                <span className="text-xs">
                  {Math.floor(Math.random() * (50000 - 100 + 1) + 100)}K Tweets
                </span>
              </a>
            </li>
          ))}
          <li className="hover:bg-slate-300">
            <a className="p-4 flex text-blue-500" href="#">
              Show More
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
