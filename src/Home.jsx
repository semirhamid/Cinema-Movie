import React, {useEffect} from "react";
import {Link} from "react-router-dom"
import NotFound from './NotFound'

function Home(props){

    useEffect(()=>{props.handleBrowse(``)},[])

    const mappedData = props.data? props.data.map(item =>{
        
        return(
            <div className="movie-description-container" key={item.id}>
                <div className="movie-item"  >
                    <img src={item.medium_cover_image} className="image" alt={item.title} /> 
                        <div className="middle">
                            <Link className="text" to={`/${item.imdb_code}`}>Details</Link>
                        </div>
                    
                    
                </div>
                    <div className="movie-item-bottom">
                        <p className="movie-title">{item.title}</p>
                        <p className="movie-year">{item.year}</p>
                    </div>
                </div>
        )
        }) : [<div className="not-found" ><NotFound /></div>]

    return(
        <div className="main">
            <div className="movie-container">
                {mappedData}
            </div>
        </div>
        
    )
}
export default Home