import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload,  faStar } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"

export default function  MovieDetail(props){
    const {id} = useParams()
    const [qid , setQid] = useState(id)
    const [datas, setData] = useState([])
    let finalData = [<h1>hi man</h1>]
        

useEffect(()=>{
    const mappedData = props.data.map(item =>{
        
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
        })
},[])


useEffect(()=>{
                fetch(`https://yts.mx/api/v2/list_movies.json?query_term=${qid}`)
                .then(response => response.json())
                .then(data => {
                    setData(data.data.movies)
                })
                .catch(err => console.error(err));

                },[qid])

finalData = datas.map(data => {
        return(
        
        <div className="main-movieDetail" key={data.id}>
            <div className="main-container">
            <div className="imagecontainer">
                <img src={data.large_cover_image}/>
                <div >
                {data.torrents && <a href={data.torrents[0].url}><button><FontAwesomeIcon style={{color: "white"}} className="icons" icon={faDownload}></FontAwesomeIcon>Download HD</button></a>}
                {data.torrents && <a href={data.torrents[1].url}><button><FontAwesomeIcon style={{color: "white"}} className="icons" icon={faDownload}></FontAwesomeIcon>Download UHD</button></a>}
                </div>
                
            </div>
            <div className="detail-container">
                <h1 className="movie-detail-title">{data.title}</h1>
                <p className="movie-detail-year">{data.year} </p>
                {data.genres && <p className="movie-detail-genres">{data.genres.join("  ")} </p>}
                <p className="movie-detail-rating">{data.rating} <FontAwesomeIcon style={{color: "#EF233C", fontSize: 20}} className="icons fastart" icon={faStar}></FontAwesomeIcon> </p>
                <div className="movie-detail-description">
                <h2>Summary</h2>
                <p>{data.description_full}</p>

            </div>
            </div>
            </div>

            <div>

            </div>
        </div>
    )

    })

    return(
        <div>
            {finalData}

        </div>
    )
}

