import './App.css';
import coffeeMaker from './assets/coffee-maker-desktop.svg'
import frenchPress from './assets/french-press-desktop.svg'
import pour from './assets/pour-over-desktop.svg'
import aeroPress from './assets/aeropress-desktop.svg'
import espresso from './assets/espresso-desktop.svg'
import pods from './assets/pods-desktop.svg'
import mokaPot from './assets/moka-pot-desktop.svg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars);


function App() {
  return (
    <div className="App">
        <div className="nav">
            <div className="links">
            </div>

            <div className="header-title">The Coffee Shop</div>

            <div className="logout">
                <a className="button-dark" href="">
                    <FontAwesomeIcon icon="bars" color="#FFFFFF"/>
                </a>
            </div>
        </div>

        <br />
        <br />

        <div className="containerCards">
            <span className="dot1">1</span>
            <span className="dot2">2</span>
            <span className="dot">3</span>
            <span className="dot">4</span>
            <span className="dot">5</span>
            <span className="dot">6</span>
        </div>

        <br />



        <div className="containerCards">
            <h2 className="titleMain">
                How do you brew at home?
            </h2>
        </div>

        <br />

        <div className="containerCards">
            <div className="card" style={{backgroundColor: "#EEB426", transform: "rotate(-12deg)", marginTop: 75}}>
                <div className="img-wrapper"
                     style={{backgroundImage: `url(${coffeeMaker})`}}></div>
                Coffee Maker
            </div>
            <div className="card" style={{backgroundColor: "#9CAF96", transform: "rotate(-8deg)", marginTop: 35}}>
                <div className="img-wrapper"
                     style={{backgroundImage: `url(${frenchPress})`}}></div>
                French Press
            </div>
            <div className="card" style={{backgroundColor: "#D4A1A6", transform: "rotate(-4deg)", marginTop: 10}}>
                <div className="img-wrapper"
                     style={{backgroundImage: `url(${pour})`}}></div>
                Pour Over
            </div>
            <div className="card" style={{backgroundColor: "#DA8464"}}>
                <div className="img-wrapper"
                     style={{backgroundImage: `url(${aeroPress})`}}></div>
                AeroPress
            </div>
            <div className="card" style={{backgroundColor: "#A9C9E1", transform: "rotate(4deg)", marginTop: 10}}>
                <div className="img-wrapper"
                     style={{backgroundImage: `url(${espresso})`}}></div>
                Espresso
            </div>
            <div className="card" style={{backgroundColor: "#C47D30", transform: "rotate(8deg)", marginTop: 35}}>
                <div className="img-wrapper"
                     style={{backgroundImage: `url(${pods})`}}></div>
                Pods
            </div>
            <div className="card" style={{backgroundColor: "#D2C6C3", transform: "rotate(12deg)", marginTop: 75}}>
                <div className="img-wrapper"
                     style={{backgroundImage: `url(${mokaPot})`}}></div>
                Moka Pot
            </div>

        </div>

        <br />
        <br />
        <br />
        <br />


        <div className="footer">
            <div className="back">
                <a className="button-dark" href="">
                    Back
                </a>
            </div>

            <div className="header-title"></div>

            <div className="whyItMatters">
                <a className="button-dark" href="">
                    Why it matters
                </a>
            </div>
        </div>

    </div>
  );
}

export default App;
