type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

export const Button = ({ onClick, children }: Props) => {
  return (
    <button className="bg-slate-900 text-white p-2" onClick={onClick}>
      {children}
    </button>
  );
};
