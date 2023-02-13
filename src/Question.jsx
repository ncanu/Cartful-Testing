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
import {useState} from "react";
import {Link} from "react-router-dom";

library.add(faBars);


function Question() {
    const initProducts = [
        {name: 'Coffee Maker', img: coffeeMaker, style: {backgroundColor: "#EEB426", transform: "rotate(-12deg)", marginTop: 75}},
        {name: 'French Press', img: frenchPress, style: {backgroundColor: "#9CAF96", transform: "rotate(-8deg)", marginTop: 35}},
        {name: 'Pour Over', img: pour, style: {backgroundColor: "#D4A1A6", transform: "rotate(-4deg)", marginTop: 10}},
        {name: 'AeroPress', img: aeroPress, style: {backgroundColor: "#DA8464"}},
        {name: 'Espresso', img: espresso, style: {backgroundColor: "#A9C9E1", transform: "rotate(4deg)", marginTop: 10}},
        {name: 'Pods', img: pods, style: {backgroundColor: "#C47D30", transform: "rotate(8deg)", marginTop: 35}},
        {name: 'Moka Pot', img: mokaPot, style: {backgroundColor: "#D2C6C3", transform: "rotate(12deg)", marginTop: 75}}
    ];
    const [ products, setProducts] = useState(initProducts);

    const backMessage = '< Back';
    const selectOption = (index) => {
        const oldSelection = products[index].isSelected;
        const updatedProducts = [...products].map( item => {return {...item, isSelected: false}});
        const selectElement = updatedProducts[index];
        selectElement.isSelected = !oldSelection;
        updatedProducts[index] = selectElement;
        setProducts(updatedProducts);
    };

    const userSelection = () => {
        return products.some( (product) => product.isSelected)
    }


    return (
        <div className="App">

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

                {
                    products.map( (product, index) => {
                        let updatedStyle;

                        if(userSelection()){
                            updatedStyle = product.isSelected ? product.style : {...product.style, backgroundColor: '#E9E4DB', color: '#222222'};
                        } else {
                            updatedStyle = product.style;
                        }

                        return <div className="card"
                                    key={product.name}
                                    style={updatedStyle}
                                    onClick={() => selectOption(index)}>
                            <div className="img-wrapper"
                                 style={{backgroundImage: `url(${product.img})`}}></div>
                            {product.name}
                        </div>
                    })
                }


            </div>

            <br />
            <br />
            <br />
            <br />


            <div className="footer">
                <div className="back">
                    <a className="blackLink" href="">
                        {backMessage}
                    </a>
                </div>

                <div className="header-title">
                    {userSelection() &&
                        <Link className='whiteLink' to="/results">
                            <button className="button">CONTINUE</button>
                        </Link>
                    }
                </div>

                <div className="whyItMatters">
                    <a className="blackLink" href="">
                        Why it matters +
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Question;
