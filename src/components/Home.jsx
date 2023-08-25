import { Link } from "react-router-dom"
import { ListWorks } from "./ListWorks"


export const Home = () => {
    return (
        <>
            <div className="page">
                <div className="letter-big">
                    <span>B</span>
                    <h1>ienvenidos</h1>
                </div>
            </div>
            <div className="">
                <div className="letter-middle">
                    <span>D</span>
                    <h3>eseo ayudarte a crear tu sitio web que marque la diferencia y te impulse hacia el éxito en línea. </h3>
                </div>
            </div>
            <div className="">
                <div className="letter-middle">
                    <span>O</span>
                    <h3> ptimizaré tu presencia online para una mayor visibilidad y relevancia en Internet. </h3>
                </div>
            </div>
            <div className="">
                <div className="letter-middle">
                    <span>M</span>
                    <h3>ejoraré tus ventas de manera significativa.</h3>
                </div>
            </div>
            <div className="">
                <div className="letter-middle">
                    <div className="margin-right"></div>
                    <span>I</span>
                    <h3>ncrementaré las visitas de la página mediante estrategias de SEO.</h3>
                </div>
            </div>
            <div className="">
                <div className="letter-middle">
                    <span>N</span>
                    <h3>otarás cambios significativos en tu presencia en internet.</h3>
                </div>
            </div>
            <div className="">
                <div className="letter-middle">
                    <span>G</span>
                    <h3>estionaré tu proyecto para que tu sitio web sea más efectivo y atractivo.</h3>
                </div>
            </div>
            <div className="">
                <div className="letter-middle">
                    <span>O</span>
                    <h3>ptimizaré tu sitio web para que obtenga resultados sobresalientes. </h3>
                </div>
            </div>
            <div className="home"></div>
            <br />
            <div className="page">
                <div className="letter-big space-up-down">
                    <Link to="/contact">
                        <div className="border">
                            <span>&quot;&nbsp;</span>
                            <h2 >CONTACTA CONMIGO.</h2>
                            <span>&nbsp;&quot;</span>
                        </div>
                    </Link>
                </div>
                
            </div>

            <div className="page">
                <div className="letter-middle">
                    <span>E</span>
                    <h3> stos son algunos de mis proyectos</h3>
                </div>
                <div>
                    <ListWorks limit="4" />
                </div>
            </div>
        </>
    )
}
