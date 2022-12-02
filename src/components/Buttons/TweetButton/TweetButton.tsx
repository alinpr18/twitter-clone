interface Props {
  w: string;
  h: string;
  text: string;
}

export const TweetButton = ({ w, h, text }: Props) => {
  return (
    <div className={`bg-blue-400 rounded-full  ${w} ${h}`}>
      <span
        className={`text-white flex justify-center items-center h-full ${text} font-bold`}
      >
        Tweet
      </span>
    </div>
  );
};
