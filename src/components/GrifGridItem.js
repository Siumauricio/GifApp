import React from 'react'

export const GrifGridItem = ({title,url}) => {
    // console.log(url)
    return (
        <div className="card animate__animated animate__fadeInDownBig"> 
            <img src={url} alt={title}/>
            <p>{title}</p>
            {/* {img.title} */}
        </div>
    )
}
