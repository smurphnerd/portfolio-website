import { HiArrowLeft } from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

interface Props {
    link: string;
}

export const ArticleLayout: React.FC<Props> = ({ link }: Props) => (
    <CSSTransition appear in timeout={1000} classNames="long-fade">
        <div className="article-section">
            <div className="article-content">
                <Link to={link}>
                    <button className="back-button">
                        <HiArrowLeft />
                    </button>
                </Link>
                <Outlet />
            </div>
            <div className="article-banner"></div>
        </div>
    </CSSTransition>
);
