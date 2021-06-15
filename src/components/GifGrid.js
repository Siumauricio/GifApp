import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GrifGridItem } from './GrifGridItem';

export const GifGrid = ({category}) => {
    const {data:Images,loading} = useFetchGifs(category);

    return (
        <>
        <h3>{category}</h3> 
        {loading && <p>Loading</p>} 
        <div className="card-grid">
              {
                  Images.map((img) => (
                    <GrifGridItem 
                    key ={img.id} 
                    {...img}/>
                  ))
              }
        </div>
        </>
    )
}
