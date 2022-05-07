import React, {useState} from 'react'
import AddCategory from './AddCategory'
import GifGrid from './GifGrid'

export const GifExpertApp = () => {
//   const categories = ['one punch' , 'samurai x' , 'Dragon ball']
const [categories, setCategories] = useState( ['one punch'] )


const handleAdd = () =>{
// setCategories([...categories , 'Naruto'])}
setCategories(cats => [...cats , 'Naruto'])
// toma los elementos del estado anterior y la agrega un nuevo elemento
}


  return (
      <>
       <h2>GifExpertApp</h2>
       <hr/>
       <AddCategory setCategories = { setCategories } />
       <ol>
           {
               categories.map( category =>

                   <GifGrid 
                   key = { category }
                   category = { category } 
                   />
               )
           }
       </ol>
      </>
  
  )
}
