import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

function Movie({ item }) {
    return (
        <Link to={"/watch/movie/" + item.id + "/" + item.title}>
            <div className="result-box" key={item.id}>
                <div className="result-image">
                    <img
                        src={"https://image.tmdb.org/t/p/original" + item.poster_path}
                        alt=""
                        srcset=""
                    />
                </div>
                {/* <div className="result-detail">
                <p className="result-title">{item.title}</p>
            </div> */}
            </div>
        </Link>
    );
}

function Search(props) {
    let queryParams = new URLSearchParams(useLocation().search);
    const [results, setresults] = useState([]);
    const [query, setquery] = useState(queryParams.get("query"));
    const [currentPage, setcurrentPage] = useState(1)
    const [totalPages, settotalPages] = useState()

    useEffect(() => {
        async function getAllResults() {
            await getResults();
        }
        getAllResults();
        return () => { };
    }, [currentPage]);

    const getResults = async () => {
        try {
            if (query) {
                var response = await axios.get(
                    `
            https://api.themoviedb.org/3/search/multi?api_key=dfc43a605d906f9da6982495ad7bb34e&language=en-US&query=${query}&page=${currentPage}&include_adult=false`
                );
                setresults(prev=>[...prev,...response.data.results]);
                settotalPages(response.data.total_pages)
                console.log(response.data.total_pages);
            }
        } catch (error) {
            console.log("error ", error);
        }
    };

    function handleChange(event) {
        setquery(event.target.value);
    }
    return (
        <div className="search-container">
            <div className="search-input-container">
                <form action="/search" method="get">
                    <input
                        type="text"
                        value={query}
                        placeholder="Search by title, actor..."
                        className="search-input"
                        name="query"
                        onChange={handleChange}
                        id=""
                    />
                </form>
            </div>
            <div className="search-results">
                <div className="results-container">
                    {results.map((item) =>
                        item.media_type === "movie" ? (
                            <Movie item={item} key={item.id} />
                        ) : null
                    )}
                </div>
            </div>
            <div className="load-more" onClick={()=>{
                if(currentPage<totalPages)
                {
                    setcurrentPage(prev=>prev+1)
                }
                }
                }>
                <button>Load more</button>
            </div>
        </div>
    );
}

export default Search;
