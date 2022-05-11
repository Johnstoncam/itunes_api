import React from "react";


const HitList = ({hits}) => {

    const hitItems = hits.map((hit, index) => {
        return (
        <div>
            <> {index +1}</>
            <br></br>
            <><img src = {hit["im:image"][1].label} /></>
            <br></br>
            <>"{hit["im:name"].label}"</>
            <br></br>
            <>{hit["im:artist"].label}</>
            <br></br>
            <div><audio controls><source src={hit.link[1].attributes.href} /></audio></div>
        </div>)
    })
    
    return (
        <>
            <p>{hitItems}</p>
        </>
    )
}

export default HitList