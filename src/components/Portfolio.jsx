
import { ListWorks } from "./ListWorks";

export const Portfolio = () => {
    return (
        <>
            <div className="page">
                <div className="letter-big">
                    <span>P</span>
                    <h1>ortafolio</h1>
                </div>
                <div className="letter-middle">
                    <span>L</span>
                    <h2>istado de proyectos</h2>

                </div>
                <ListWorks />
            </div>
        </>
    )
}
