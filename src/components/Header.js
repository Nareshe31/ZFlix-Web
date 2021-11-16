import { Link } from "react-router-dom";
import React, { useState,useRef,useEffect } from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
function Header() {
    const {search,pathname}=useLocation()
    const [moviesDropdown, setmoviesDropdown] = useState(false)
    const [tvshowsDropdown, settvshowsDropdown] = useState(false)
    const [searchShow, setsearchShow] = useState(false)
    const [query, setquery] = useState('')
    const inputRef = useRef()

    let navigate = useNavigate();
    useEffect(() => {
        document.addEventListener('keydown',(e)=>{
            if(e.ctrlKey && e.keyCode === 191){
                handleSearchToggle()
            }
            if(e.ctrlKey && e.shiftKey && e.keyCode === 72){
                navigate('/en')
            }
            console.log(e.keyCode);
        })
        
        return () => {
            
        }
    }, [])

    useEffect(() => {
        if(pathname!=="/en/search"){
            setsearchShow(false)
            inputRef.current.blur();
        }
        return () => {
            
        }
    }, [search])
    const handleSearchToggle=()=>{
        setsearchShow(prev=>!prev)
        if(searchShow){
            setquery('')
        }
        else{
            inputRef.current.focus()
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate({pathname:'/en/search',search:"?"+new URLSearchParams({q: query}).toString()})
    }
    return(
        <nav className="navbar">
            <Link to="/">
                <div className="nav-header">
                    <img src="/apple-touch-icon.png" alt="" srcset="" />
                </div>
            </Link>
            <ul className="nav-list nav-middle">
                <Link to="/en/movie">
                    <li className="nav-item dropdown" onMouseEnter={()=>setmoviesDropdown(true)} onMouseLeave={()=>setmoviesDropdown(false)}>Movies 
                        <span><i className={moviesDropdown?"fas fa-chevron-up":"fas fa-chevron-down"}></i></span>
                        <ul className="nav-list-child first">
                            <Link to="/en/popular/movies">
                                <li className="nav-item-child first">Most Popular</li>
                            </Link>
                            <Link to="/en/most-recent/movies">
                                <li className="nav-item-child">Most Recent</li>
                            </Link>
                            <Link to="/en/top-rated/movies">
                                <li className="nav-item-child last">Top Rated</li>
                            </Link>
                        </ul>
                    </li>
                </Link>
                <Link to="/en/tv">
                    <li className="nav-item" onMouseEnter={()=>settvshowsDropdown(true)} onMouseLeave={()=>settvshowsDropdown(false)}>TV Shows
                        <span><i className={tvshowsDropdown?"fas fa-chevron-up":"fas fa-chevron-down"}></i></span>
                        <ul className="nav-list-child last">
                            <Link to="/en/popular/tv-shows">
                                <li className="nav-item-child first">Most Popular</li>
                            </Link>
                            <Link to="/en/most-recent/tv-shows">
                                <li className="nav-item-child">Most Recent</li>
                            </Link>
                            <Link to="/en/top-rated/tv-shows">
                                <li className="nav-item-child last">Top Rated</li>
                            </Link>
                        </ul>
                    </li>
                </Link>
                <Link to="/en/login">
                    <li className="nav-item">Login</li>
                </Link>
            </ul>
            <ul className="nav-list">
                <div className={searchShow?"search-container active":"search-container"}>
                    <form onSubmit={handleSubmit} >
                        <input ref={inputRef} autoComplete={false} autoCorrect={false} spellCheck={false} type="text" name="q" id="" value={query} onChange={(e)=>setquery(e.target.value)} placeholder="What are you looking for?" />
                    </form>
                </div>
                {searchShow?
                    <li className="nav-item search" onClick={handleSearchToggle}>
                        <i className="fas fa-times"></i>
                    </li>
                    :
                    <li className="nav-item search"  onClick={handleSearchToggle}>
                        <i className="fas fa-search"></i>
                    </li>
                }
            </ul>
            
        </nav>
    )
}

export default Header