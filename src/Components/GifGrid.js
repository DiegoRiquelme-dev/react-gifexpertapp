import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

const GifGrid = ( { category }) => {
    const { data:images , loading} = useFetchGifs( category );
    console.log(loading);

    return (
      <>
      <h3> { category } </h3>

      {loading && <p>Loading</p> }
      <div className='card-grid'>                 
              {
                images.map(imgs =>(
                 <GifGridItem 
                 key = {imgs.id }
                 { ...imgs}
                 // ... = tomar todo el objeto y enviarlo como prop
                 />
                ))
              }
      </div>
      </>
    )
  }
      
export default GifGrid