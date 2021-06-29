import React from 'react';
import americanBrew from '../assets/americanBrew.PNG';
import cavsStats from '../assets/cavsStats.PNG';

const Portfolio = () => {
    return (
        <div className="portfolio_container">
            <h1 className="section_header">Projects</h1>
            <h1 className="project_header">American Breweries</h1>
            <div className="project_container">
                <div className="project_image_container">
                    <a href="https://american-breweries.herokuapp.com/">
                        <img className="project_image" src={americanBrew} alt="American Breweries image" />
                    </a>
                </div>
                <div className="project_desc_container">
                    <p className="project_desc">
                        <span className="body_header">Overview: </span>
                        American Breweries is a web app that 
                        displays the location of 4,700+ breweries in the United States. 
                        It includes a search feature that allows the user to search for 
                        a brewery by name, city, or zip code.
                    </p>
                    <p className="project_desc">
                        <span className="body_header">Languages: </span>
                        Python, HTML, and CSS
                    </p>
                    <p className="project_desc">
                        <span className="body_header">Libraries: </span>
                        requests, pandas, numpy, Flask.
                    </p>
                    <p className="project_desc">
                        <span className="body_header">Description: </span>
                        For this project I pulled data from an API (
                            <a className="body_link" href="https://www.openbrewerydb.org/">Open Brewery DB</a>
                            ) using Python's requests library. I then cleaned 
                            and organized the data using Python's pandas library. 
                            I displayed the locations of the breweries using Plotly Express' 
                            scatter plots. The data was stored in a database using sqlite3, 
                            allowing for a search feature. Lastly, I displayed the map 
                            and search feature using Flask. See the code 
                            on <a className="body_link" href="https://github.com/wsethgreen/american-breweries">GitHub</a>.
                    </p>
                </div>
            </div>
            <h1 className="project_header">Cavs Stats</h1>
            <div className="project_container">
                <div className="project_image_container">
                    <a href="https://cavs-stats.herokuapp.com/">
                    <img className="project_image" src={cavsStats} alt="Cavs Stats image" />
                    </a>
                    
                </div>
                <div className="project_desc_container">
                    <p className="project_desc">
                        <span className="body_header">Overview: </span>
                        Cavs Stats is a web app that tracks the stats of the 
                        Cleveland Cavaliers and its players.
                    </p>
                    <p className="project_desc">
                        <span className="body_header">Languages: </span>
                        Python, HTML, and CSS
                    </p>
                    <p className="project_desc">
                        <span className="body_header">Libraries: </span>
                        requests, pandas, numpy, Flask.
                    </p>
                    <p className="project_desc">
                        <span className="body_header">Description: </span>
                        For this project I pulled data from an API (
                        <a className="body_link" href="https://www.balldontlie.io/">balldontlie</a>
                        ) using Python's requests library. 
                        I then cleaned, organized, and manipulated the data 
                        using Python's pandas and numpy library so it could be 
                        easily digested. Lastly, I displayed the data using Flask. 
                        See the code 
                        on <a className="body_link" href="https://github.com/wsethgreen/american-breweries">GitHub</a>.
                    </p>
                </div>
            </div>
            <h1 className="project_header">More to come!</h1>
        </div>
    )
}

export default Portfolio
