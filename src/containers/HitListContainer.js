import React, {useState, useEffect} from "react";
import HitList from "../components/HitList";

const HitListContainer = () => {

    const[hits, setHits] = useState([])

    useEffect(() => {
        getHits()
    }, [])

    const getHits = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(hits => setHits(hits.feed.entry))
        .catch(err => console.error)
    }

    return (
        <>
        <h1>UK TOP 20</h1>
        <HitList hits = {hits}></HitList>
        </>
    )
}

export default HitListContainer 