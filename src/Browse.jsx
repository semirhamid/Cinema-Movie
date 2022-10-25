import React , {useEffect, useState} from "react";
import {Link} from "react-router-dom"
import NotFound from './NotFound'

function Browse(props){
    let rand = Math.ceil(Math.random() * 100)
    const [currentPage , setCurrentPage]= useState(rand)

            useEffect(()=>{props.handleBrowse(`?page=${currentPage}`)},[currentPage])



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




function incrementCurrent(){
    setCurrentPage(prev => prev +=1)
    scrollUP()

}
function decrementCurrent(){
    setCurrentPage(prev => prev -= 1 )
    scrollUP()
    
}
function scrollUP(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

return(
    <div className="main">
        
    <div className="movie-container">
        {mappedData}
        
    </div>
    <div className="changeCounter">
            <button disabled = {currentPage===1} onClick={decrementCurrent} >{`<< Prev`}</button>
            <button onClick={incrementCurrent} >{`Next >>`}</button>
        </div>
    </div>
)
}

export default Browse