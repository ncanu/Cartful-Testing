import './Results.css';
import {Link} from "react-router-dom";
import product from './assets/product.svg'
import lips from './assets/1.svg'
import tasting from './assets/tasting-notes.svg'
import results from './assets/results.svg'
import dip from './assets/dip.svg'


function Results() {

    const backMessage = '< Back';

    return (<div>

        <br />
        <br />

        <div className="containerNumbers" >
            <span className="dot1C">1</span>
            <span className="dot1C">2</span>
            <span className="dot1C">3</span>
            <span className="dot1C">4</span>
            <span className="dot1C">5</span>
            <span className="dot1C">6</span>
        </div>

        <br />

        <div>
            <h2 className="titleMain">
                Meet your new favorite coffee.
            </h2>
        </div>

        <div>
            <h4 className="subtitleMain">
                Here’s what we recommend for your busy days, quiet moments, and upcoming adventures.
            </h4>
        </div>

        <br />
        <br />
        <br />
        <br />

        <div className="details" style={{background: 'rgba(34, 34, 34, 0.05)', margin: 100}}>
            <div className="box-title-prod">
                <div className="card">
                    <div className="img-wrapper2"
                         style={{backgroundImage: `url(${product})`}}></div>
                    {"GUATEMALA COFFEE"}
                    <br/>
                    $20.50
                </div>

            </div>
            <div className="box-title2">

                <div className="details" >
                    <div className="box-title-prod">
                        <div className="card">
                            <div className="img-wrapper2"
                                 style={{backgroundImage: `url(${lips})`}}></div>
                            <h4 className="subtitleMain">
                                {"Red Apple, Lemongrass,Malt Chocolate"}
                            </h4>

                        </div>
                    </div>
                    <div className="box-title-prod">
                        <div className="card">
                            <div className="img-wrapper2"
                                 style={{backgroundImage: `url(${tasting})`}}></div>
                            <h4 className="subtitleMain">
                                {"Medium"}
                            </h4>
                        </div>
                    </div>
                    <div className="box-title-prod">
                        <div className="card">
                            <div className="img-wrapper2"
                                 style={{backgroundImage: `url(${results})`}}></div>
                            <h4 className="subtitleMain">
                                {"Great with milk/cream"}
                            </h4>
                        </div>
                    </div>
                    <div className="box-title-prod">
                        <div className="card">
                            <div className="img-wrapper2"
                                 style={{backgroundImage: `url(${dip})`}}></div>
                            <h4 className="subtitleMain">
                                {"Brews a delicious cup with a pour over"}
                            </h4>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <div className='detailsMobile'>
            <h2 className="subtitleMain">
                BEST MATCH
            </h2>
            <img src={product} alt="React Logo" className="center" />
            <h4 className="subtitleMain">
                GUATEMALA COFFEE
                <br/>
                $20.50
            </h4>

        </div>

        <div className='detailsMobile'>
            <h2 className="subtitleMain2">
                WHY YOU’LL LOVE IT
            </h2>
            <h4 className="subtitleMain">
                If you’ve ever taken a bite from a ripe red apple, you’ll know the way this coffee tastes.
            </h4>

        </div>

        <div className='detailsMobile'>
            <h2 className="subtitleMain2">
                Tasting Notes
            </h2>
            <img src={lips} alt="React Logo" className="center" />
            <h4 className="subtitleMain">
                Red Apple, Lemongrass, Malt Chocolate
            </h4>

        </div>

        <div className='detailsMobile'>
            <h2 className="subtitleMain2">
                Roast level
            </h2>
            <img src={tasting} alt="React Logo" className="center" />
            <h4 className="subtitleMain">
                Medium
            </h4>

        </div>

        <div className='detailsMobile'>
            <h2 className="subtitleMain2">
                Sipping style
            </h2>
            <img src={results} alt="React Logo" className="center" />
            <h4 className="subtitleMain">
                Great with milk/cream
            </h4>

        </div>


        <div className='detailsMobile'>
            <h2 className="subtitleMain2">
                Brew method
            </h2>
            <img src={dip} alt="React Logo" className="center" />
            <h4 className="subtitleMain">
                Brews a delicious cup with a pour over
            </h4>
        </div>


        <div className="footer">
            <div className="back">
                    <Link className="blackLink" to="/">
                        {backMessage}
                    </Link>
            </div>
            <div className="header-title">
            </div>
            <div className="whyItMatters">
            </div>
        </div>

    </div>);
}

export default Results;
