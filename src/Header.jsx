import React from "react";
import { useLocation, Link , NavLink } from "react-router-dom";
import mainlogo from "./assets/mainlogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Header(props){
    
    
    return(<header>
                <img src ={mainlogo} alt="cinema movie logo" className="logo"></img>
                
            <nav>
                    <ul>
                        <NavLink  className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link') } to="/" >Home</NavLink>
                        <NavLink  className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')} to="/browse">Browse</NavLink>
                    </ul>
                </nav>  

            <div className="left-header">
            {(useLocation().pathname === "/" | useLocation().pathname === "/browse" ) ?                 
            <form >
                <div className="search-bar">
                    <FontAwesomeIcon className="icon" icon={faSearch}></FontAwesomeIcon>
                    <input 
                    className="input-text"
                    type="text" 
                    placeholder="Quick Search"
                    name="search"
                    value={props.search}
                    onChange={props.handleSearch}
                    />

                    <input type="submit" value="Search" name="submit" className="search-btn" onClick={props.handleSubmit}/>
                    </div>
                </form> : []}


                
                {<div className="authentication">
                    <Link  to="/login">Login</Link>
                    <Link to="/login">Register</Link>
                </div>}

            </div>
        </header>)
}