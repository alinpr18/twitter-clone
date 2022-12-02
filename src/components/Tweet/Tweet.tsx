import { AiOutlineHeart } from "react-icons/ai";
import { BiUpload } from "react-icons/bi";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { Avatar } from "../Avatar/Avatar";

interface Props {
  username: string;
  name: string;
  tweet: string;
}

export const Tweet = ({
  username = "@alinpr18",
  name = "Ali Paredes",
  tweet = "Hola que hace",
}: Props) => {
  return (
    <a href="#" className="border-b flex gap-3 px-4 py-2 hover:bg-slate-100">
      <Avatar w="w-12" h="h-12" />
      <div className="flex flex-col flex-1">
        <div className="flex gap-2">
          <h3 className="font-semibold hover:underline">{name}</h3>
          <span>{username}</span>
        </div>
        <p>{tweet}</p>
        <div className="flex justify-between max-w-md">
          <button className="font-normal py-2 flex items-center gap-2 hover:bg-blue-200 rounded-full px-3 ">
            <FaRegComment className="text-lg flex items-center " />
            <span className="text-xs">
              {Math.floor(Math.random() * (50000 - 100 + 1) + 100)}
            </span>
          </button>
          <button className="font-normal py-2 flex items-center gap-2 hover:bg-green-200 rounded-full px-3 ">
            <FaRetweet className="text-lg" />
            <span className="text-xs">
              {Math.floor(Math.random() * (50000 - 100 + 1) + 100)}
            </span>
          </button>
          <button className="font-normal py-2 flex items-center gap-2 hover:bg-red-200 rounded-full px-3 ">
            <AiOutlineHeart className="text-lg" />
            <span className="text-xs">
              {Math.floor(Math.random() * (50000 - 100 + 1) + 100)}
            </span>
          </button>
          <button className="font-normal py-2 flex items-center gap-2 hover:bg-blue-200 rounded-full px-3 ">
            <BiUpload className="text-lg" />
          </button>
        </div>
      </div>
    </a>
  );
};
