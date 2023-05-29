interface ISectionTitle {
  title: string;
}

export const SectionTitle = ({ title = "text" }: ISectionTitle) => {
  return (
    <h2 className="font-Jakarta text-3xl font-bold tracking-wide">{title}</h2>
  );
};
