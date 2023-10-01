type Props = {
  kind: string;
};
export const Loading = ({ kind }: Props) => (
  <p className="text-black">{kind} Loading...</p>
);
