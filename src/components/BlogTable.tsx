interface Props {
  table: JSX.Element;
}

export const BlogTable: React.FC<Props> = ({ table }: Props) => {
  return (
    <>
      <div className="w-full mt-8 self-center lg:w-3/4 mb-12">{table}</div>
    </>
  );
};
