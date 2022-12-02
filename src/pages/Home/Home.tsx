import { Avatar } from "@/components/Avatar/Avatar";
import { TweetButton } from "@/components/Buttons/TweetButton/TweetButton";
import { GiFallingStar } from "react-icons/gi";
import { Timeline } from "./Timeline/Timeline";

const user = {
  tweet: "Tweet firts",
  username: "@alinpr18",
  name: "Ali Paredes",
};

export const Home = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-[37rem] border-x h-screen flex flex-col">
      <div className="flex px-4 justify-between sticky top-0 bg-white min-h-[56px] items-center">
        <h1 className="text-xl font-bold">Home</h1>
        <GiFallingStar className="h-5 w-5" />
      </div>
      <form className="flex gap-2 px-4 border-b" onSubmit={handleSubmit}>
        <Avatar w="w-12" h="h-12" />
        <div className="flex flex-1 flex-col">
          <textarea
            className="resize-none outline-none placeholder:text-xl"
            placeholder="Whats happening?"
            cols={10}
            rows={2}
            name="content"
            onChange={handleSubmit}
          ></textarea>
          <div className="flex p-3">
            <div className="flex-1">
              <button className="w-">+</button>
              <button>+</button>
              <button>+</button>
              <button>+</button>
            </div>
            <button type="submit">
              <TweetButton w="w-20" h="h-9" text="text-base" />
            </button>
          </div>
        </div>
      </form>
      <Timeline />
    </div>
  );
};
