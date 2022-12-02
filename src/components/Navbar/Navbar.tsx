import { BiHash, BiHomeCircle } from "react-icons/bi";
import { BsBookmark, BsTwitter } from "react-icons/bs";
import { CgMoreO, CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbListSearch, TbMessage } from "react-icons/tb";
import { v4 as uuid } from "uuid";
import { Avatar } from "../Avatar/Avatar";
import { TweetButton } from "../Buttons/TweetButton/TweetButton";

const ListNav = [
  {
    Home: <BiHomeCircle className="h-7 w-7" />,
  },
  {
    Explore: <BiHash className="h-7 w-7" />,
  },
  {
    Notifications: <IoMdNotificationsOutline className="h-7 w-7" />,
  },
  {
    Messages: <TbMessage className="h-7 w-7" />,
  },
  {
    Bookmarks: <BsBookmark className="h-7 w-7" />,
  },
  {
    Lists: <TbListSearch className="h-7 w-7" />,
  },
  {
    Profile: <CgProfile className="h-7 w-7" />,
  },
  {
    More: <CgMoreO className="h-7 w-7" />,
  },
];

export const Navbar = () => {
  return (
    <nav className="w-64 flex flex-col gap-2">
      <span className="p-3 text-xl w-fit hover:bg-slate-300 rounded-full">
        <BsTwitter className="h-7 w-7 text-blue-500" />
      </span>
      <ul>
        {ListNav.map((i) => (
          <li
            key={uuid()}
            className="py-1 w-fit hover:bg-slate-300 rounded-full"
          >
            <a className="text-xl flex items-center gap-4 p-3" href="#">
              <i>{Object.values(i)}</i>
              <span>{Object.keys(i)}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="flex-1">
        <TweetButton w="w-56" h="h-12" text="text-lg" />
      </div>
      <div className="flex gap-3 p-3 hover:bg-slate-300 rounded-full items-center">
        <Avatar w="w-10" h="h-10" />
        <div>
          <h3 className="font-semibold">Ali Paredes</h3>
          <span>@alinpr18</span>
        </div>
      </div>
    </nav>
  );
};
