interface Props {
  w: string;
  h: string;
}

export const Avatar = ({ w, h }: Props) => {
  return <div className={`bg-red-400 ${w} ${h} rounded-full`}></div>;
};
