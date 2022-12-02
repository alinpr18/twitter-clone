import { Tweet } from "@/components/Tweet/Tweet";
import { getFromLocalStorage } from "@/utils/getFromLocalStorage";

export const Timeline = () => {
  const value = getFromLocalStorage("tweets");
  return (
    <>
      <Tweet name={value.name} username={""} tweet={""} />
      <Tweet name={value.tweet} username={value.username} tweet={value.tweet} />
    </>
  );
};
