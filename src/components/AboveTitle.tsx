interface IAboveTitle {
  text: string;
}

export const AboveTitle = ({ text = "text" }: IAboveTitle) => {
  return (
    <div className="my-4 inline-flex items-center justify-start gap-4">
      <div className="h-0.5 w-4 bg-gray-300" />
      <span className="text-gray-500 text-sm leading-6 tracking-widest uppercase">
        {text}
      </span>
    </div>
  );
};