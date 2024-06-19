import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import Project1 from '../../assets/images/Melanoma.png'; 
import Project2 from '../../assets/images/Car.png'; 
import Project3 from '../../assets/images/Credit default.png'; 
import Project4 from '../../assets/images/Buffalo.png'; 
import Project5 from '../../assets/images/Time series.png'; 
import "./index.scss";

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }, []);

    const portfolio = [
        {
            name: "Melanoma Skin Cancer Detection using CNN",
            // description: "Short description of Project One",
            image: Project1,
            url: "https://github.com/deepakrajmohanraj/melanoma-skin-cancer-detection"
        },
        {
            name: "Classification of Car Damage",
            // description: "Short description of Project Two",
            image: Project2,
            url: "https://github.com/deepakrajmohanraj/Classification-of-Car-Damage"
        },
        {
            name: "Credit Defaulter Analysis and Prediction",
            // description: "Short description of Project Three",
            image: Project3,
            url: "https://github.com/deepakrajmohanraj/Credit-Defaulter-Analysis-and-Prediction"
        },
        {
            name: "PostgreSQL Database for Properties in Buffalo",
            // description: "Short description of Project Four",
            image: Project4,
            url: "https://github.com/deepakrajmohanraj/PostgreSQL-Database-for-Properties-in-Buffalo"
        },
        {
            name: "Time Series Forecasting Methods on Retail Store Sales Data",
            // description: "Short description of Project Five",
            image: Project5,
            url: "https://github.com/deepakrajmohanraj/Time-Series-Forecasting-Methods-on-Retail-Store-Sales-Data"
        }
    ];

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => (
                        <div className="image-box" key={idx}>
                            <img
                                src={port.image}
                                className="portfolio-image"
                                alt="portfolio"
                            />
                            <div className="content">
                                <p className="title">
                                    <a href={port.url} target="_blank" rel="noopener noreferrer">
                                        {port.name}
                                    </a>
                                </p>
                                {/* <h4 className="description">{port.description}</h4> */}
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                {renderPortfolio(portfolio)}
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;
