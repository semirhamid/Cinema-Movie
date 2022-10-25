import React , { useState , useEffect } from 'react'
import './App.css'
import Home from "./Home"
import MovieDetail from "./MovieDetail"
import Browse from "./Browse"
import { Routes, Route} from "react-router-dom"
import Footer from "./Footer"
import NotFound from './NotFound'
import Header from './Header'


function App() {
  const [query , setQuery] = useState("")
  const [data, setData] = useState([])
  const [search , setSearch] = useState("")


    function handleSearch(event){
        event.preventDefault()
        setSearch(event.target.value)
    }

    function handleSubmit(event){
      event.preventDefault()
        let result = search.trim().replace(" ", "%20")
        let prefix = `?query_term=${result}&sort_by=year`
        setQuery(prefix)
        setSearch("")
    }

    function handleBrowse(quest){
      setSearch("")
      setQuery(quest)
    }

  useEffect(()=>{
                  fetch(`https://yts.mx/api/v2/list_movies.json${query}`)
                  .then(response => response.json())
                  .then(data => {
                    let pureData = data.data.movies
                    setData(pureData)
                  })
                  .catch(err => console.error(err));
                  },[query])



  return (
    <div>
              

<Header handleSearch={handleSearch}  handleSubmit={handleSubmit} search={search}/>

      <Routes>
        <Route exact path="/browse" element={ <Browse data={data} handleBrowse={handleBrowse}/> } />
        <Route  path="/browse/:id" element={<MovieDetail data={data}/>  } />
        <Route  path="/:id" element={<MovieDetail data={data}/>  } />
        <Route exact path="/" element={ <Home data={data} handleBrowse={handleBrowse} /> } />
        <Route path="*" element={<NotFound />}/>
      </Routes>

      

      <Footer />
    
    </div>
  )
}

export default App
