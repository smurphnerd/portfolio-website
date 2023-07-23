import S from "./BlogCard.module.scss";

interface Props {
    blurb?: string;
    date: string;
    title: string;
    thumbnail: string;
    route: string;
}

export const BlogCard: React.FC<Props> = ({
    blurb,
    date,
    title,
    thumbnail,
    route,
}: Props) => {
    const detailsStyle = blurb
        ? [S.blogDetails, "justify-between"].join(" ")
        : [S.blogDetails, "justify-center"].join(" ");

    return (
        <a href={`/blog/${route}`}>
            <div className={S.container}>
                <div className={S.mainContent}>
                    <img
                        className={S.thumbnail}
                        src={thumbnail}
                        alt={`${title} thumbnail`}
                    />
                    <div className={detailsStyle}>
                        <div>
                            <h2 className={S.blogTitle}>{title}</h2>
                            {blurb && <p>{blurb}</p>}
                        </div>
                    </div>
                </div>
                <h3 className={S.blogDate}>{date}</h3>
            </div>
        </a>
    );
};
