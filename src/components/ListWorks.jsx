
import { Link } from "react-router-dom";
import { works } from "../data/works";
// eslint-disable-next-line react/prop-types
export const ListWorks = ({limit}) => {
    return (
        <section className="works">
            { works.slice(0,limit).map(work => (
                <article key={ work.id } className="work-item">
                    <div className="mask">
                        <Link to={ work.url } target="_blank">
                            <img src={ "/images/" + work.id + ".png" } alt={ work.name } />
                        </Link>
                    </div>
                    <span>{ work.categories }</span>
                    <h3><Link to={ work.url } target="_blank">{ work.name }</Link></h3>
                    <h4>{ work.technologies }</h4>
                </article>
            ))
            }
        </section>
    )
}
