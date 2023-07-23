interface Props {
  src: string;
  alt: string;
  caption?: JSX.Element;
}

export const BlogImage: React.FC<Props> = ({ src, alt, caption }: Props) => {
  const mb = caption ? "mb-8" : "mb-12";

  return (
    <>
      <img
        className={`w-full mt-8 self-center lg:w-3/4 ${mb}`}
        src={src}
        alt={alt}
      />
      {caption && (
        <p className="text-center text-bodyQuietColor text-sm italic mb-8">
          {caption}
        </p>
      )}
    </>
  );
};
