interface Props {
  thumbnail: string;
  title: string;
  body: JSX.Element;
  date: string;
}

export const Blog: React.FC<Props> = ({
  thumbnail,
  title,
  body,
  date,
}: Props) => {
  return (
    <div className="flex flex-col">
      <div className="article-header">
        <img
          className="article-thumbnail"
          src={thumbnail}
          alt={`${title} thumbnail`}
        />
        <div>
          <h1>{title}</h1>
          <h6>{date}</h6>
        </div>
      </div>
      <div className="flex flex-col">{body}</div>
    </div>
  );
};
